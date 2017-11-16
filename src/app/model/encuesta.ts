import { MateriaEncuesta } from './materiaEncuesta'

export class Encuesta {
    private materias: MateriaEncuesta[];
    private materias_todaviano: MateriaEncuesta[];
    private materias_aprobadas: MateriaEncuesta[];
    private materias_nopuedoporhorario: MateriaEncuesta[]
    constructor(
        public legajo: number,
    ) {}

 setMateriasACursar(materias_a_cursar) {
     this.materias = materias_a_cursar;
 }

 setMateriasAprobadas(materias_aprobadas) {
     this.materias_aprobadas = materias_aprobadas;
 }

 setMateriasTodaviaNo(materias_todaviano) {
     this.materias_todaviano = materias_todaviano;
 }

 setMateriasNoPuedoPorHorario(materias_nopuedoporhorario) {
     this.materias_nopuedoporhorario = materias_nopuedoporhorario;
 }

 getMateriasACursar() {
     return this.materias ;
 }

 getMateriasAprobadas() {
     return this.materias_aprobadas;
 }

 getMateriasTodaviaNo() {
     return this.materias_todaviano;
 }

 getMateriasNoPuedoPorHorario() {
     return this.materias_nopuedoporhorario;
 }

  getMaterias() {

      var materias = {};
      materias["materias_a_cursar"] = this.getMateriasACursar();
      materias["materias_aprobadas"] = this.getMateriasAprobadas();
      materias["materias_todaviano"] = this.getMateriasTodaviaNo();
      materias["materias_no_puedoporhorario"] = this.getMateriasNoPuedoPorHorario();

    //   console.log(materias);
      return materias;
  }
}
