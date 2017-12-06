import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Materia } from '../../model/materia'
import { EstadoMateria } from  '../../model/estadosMateria'
import { Encuesta } from '../../model/encuesta'
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable()
export class EncuestaService {
        legajo;
        token;
        private materiasACursarSubject = new BehaviorSubject([]);

        private materias_a_cursar: Materia[] = [];
        private materias_todavia_no: Materia[] = [];
        private materias_no_puedohorario: Materia[] = [];
        private materias_yaaprobe: Materia[] = [];

        private materias_sugeridas: Materia[] = [];
        // Se agrega esta lista para tener en el servicio todas las materias con su estado //
        private lista_materias: Materia[] = [];
        private materias_aprobadas: Materia[] = [];

        constructor(private http: HttpClient) { }


        setLegajo(legajo){
            this.legajo = legajo;
        }

        setToken(token) {
            this.token = token;
        }
        // Estas materias se usan desde dos componentes distintos //
        getMaterias(): Observable<Materia[]> {
            return this.materiasACursarSubject.asObservable();
        }

        private refresh() {
            // Emitir los nuevos valores para que todos los que dependan se actualicen.
            this.materiasACursarSubject.next(this.materias_a_cursar);
        }

        agregarMateria(materia: Materia) {
          /**
          * Evitar hacer this.user.push() pues estaríamos modificando los valores directamente,
          * se debe generar un nuevo array !!!!.
          */
          this.materias_a_cursar = [...this.materias_a_cursar, materia];
          this.refresh();
        }

        borrarMateria(materia: Materia) {
          /**
          * Evitar hacer this.user.push() pues estaríamos modificando los valores directamente,
          * se debe generar un nuevo array !!!!.
          */
          console.log("Intenta borrar");
          materia['estado'] = undefined;
          this.materias_a_cursar.splice(this.materias_a_cursar.indexOf(materia), 1);
        //   this.materias = this.materias.filter(x => x['id'] == materia['id']);
          this.refresh();
        }

        setMateriasTodaviaNo(materias) {
            this.materias_todavia_no = materias;
        }

        setMateriasYaAprobe(materias) {
            this.materias_yaaprobe = materias;
        }

        setMateriasNoPuedoPorHorario(materias) {
            this.materias_no_puedohorario = materias;
        }

        getMateriasTodaviaNo() {
            return this.materias_todavia_no;
        }

        getMateriasYaAprobe() {
            return this.materias_yaaprobe;
        }

        getMateriasNoPuedoPorHorario() {
            return this.materias_no_puedohorario;
        }

        getListaMaterias() {
            return this.lista_materias;
        }

        setListaMaterias($materias) {
            this.lista_materias = $materias;
            this.acomodarListasdeMaterias();
            this.setEstadoMateriasRestantes();

        }

        /* Las materias restantes, para evitar la seleccion se setea por defecto
           que todavia no va a cursar
        */
        private setEstadoMateriasRestantes() {
            for(var i = 0; i < this.lista_materias.length; i++) {
                this.lista_materias[i]['estado'] = EstadoMateria.TodaviaNo;
            }
        }


        private acomodarListasdeMaterias() {
            this.filtrarAprobadas();
            this.generarMateriasSugeridas();
        }

        private filtrarAprobadas() {
            // this.materias_yaaprobe = this.lista_materias.filter(x => x['aprobada']);
            this.materias_yaaprobe = this.lista_materias.filter(x => x['estado'] == 'yaaprobe');
            for(var i = 0; i < this.materias_yaaprobe.length; i++) {
                this.materias_yaaprobe[i]['estado'] = EstadoMateria.YaAprobe;
            }

            // this.lista_materias = this.lista_materias.filter(x => !x['aprobada']);
            this.lista_materias = this.lista_materias.filter(x => x['estado'] != 'yaaprobe');
        }

        /*
            Evalua UNICAMENTE en la variable materias_aprobadas, de esta manera aseguramos que no se
            sugieran materias correlativas sin haber aprobado materias anteriores. Si es que posee correlativas
            a estas las agrega en la variable materias_sugeridas.
        */
        generarMateriasSugeridas() {
            var tmp_sugeridas = [];
            for(var i = 0; i<5; i++) {
                tmp_sugeridas.push(this.lista_materias[i]);
            }
            this.agregarMateriasSugeridas(tmp_sugeridas);
        }
        /*
            Si ya existe dentro de las materias sugeridas no la toma en cuenta
            Tampoco la toma en cuenta si es correlativa pero ya esta aprobada
            Agrega la materia en la lista de materias_sugeridas y para evitar duplicaciones
            la saca de la lista de materias restantes.
        */
        agregarMateriasSugeridas(materias_sug) {
            for(var i = 0; i<materias_sug.length; i++) {
                if (!(this.existeMateriaSugeridaYa(materias_sug[i]['id']))) {
                    // materias_sug[i]['estado'] = EstadoMateria.VoyACursar;
                    this.materias_sugeridas.push(materias_sug[i]);
                    // Quito la materia de la lista de materias generales para que no este duplicada
                    this.eliminarMateriaDeMateriasGenerales(materias_sug[i]['id']);
                }
            }
        }

        existeMateriaSugeridaYa(materiaId) {
            return this.materias_sugeridas.some(x => x['id'] === materiaId);
        }

        eliminarMateriaDeMateriasGenerales(materiaId) {
            this.lista_materias = this.lista_materias.filter(x => x['id'] !== materiaId);
        }

        getMateriasSugeridas(){
            return this.materias_sugeridas;
        }

        generarMateriasParaEncuesta() {
            this.materias_no_puedohorario = this.generarMateriasPorEstado(EstadoMateria.NoPuedoPorHorario);
            this.materias_todavia_no = this.generarMateriasPorEstado(EstadoMateria.TodaviaNo);
            this.materias_a_cursar = this.generarMateriasPorEstado(EstadoMateria.VoyACursar);
            this.materias_yaaprobe = this.generarMateriasPorEstado(EstadoMateria.YaAprobe);

        }
        /* Recorre las tres listas de materias posibles y arma una en general con las que no
            curso el estado correspondiente
        */
        private generarMateriasPorEstado(estadoMateria: EstadoMateria) {
            var tmp = this.lista_materias.filter(x => x['estado'] == estadoMateria);
            var tmp2 = this.materias_sugeridas.filter(x => x['estado'] == estadoMateria);
            var tmp3 = this.materias_yaaprobe.filter(x => x['estado'] == estadoMateria);
            var tmp_materias = (tmp.concat(tmp2)).concat(tmp3);

            return tmp_materias;
        }

        postEncuesta() {
            var encuesta: Encuesta = this.generarEncuesta();
            const body = encuesta.getMaterias();
            body['legajo'] = this.legajo;
            console.log(body);
            console.log(this.token);
            // const req = this.http.post('http://localhost:8000/api/encuesta/' + this.token, body);
            const req = this.http.put('http://localhost:8000/api/encuesta/' + this.token, body);
            // const req = this.http.post('https://arq-sof-encuesta-backend.herokuapp.com/api/encuesta', body);
            req.subscribe();
        }

        private generarEncuesta(): Encuesta {
            this.generarMateriasParaEncuesta();
            var encuesta: Encuesta = new Encuesta(this.legajo);
            encuesta.setMateriasACursar(this.materias_a_cursar);
            encuesta.setMateriasAprobadas(this.materias_yaaprobe);
            encuesta.setMateriasTodaviaNo(this.materias_todavia_no);
            encuesta.setMateriasNoPuedoPorHorario(this.materias_no_puedohorario);

            return encuesta;
        }
}
