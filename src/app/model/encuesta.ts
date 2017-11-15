import { MateriaEncuesta } from './materiaEncuesta'

export class Encuesta {
    public materias_nopuedoporhorario: MateriaEncuesta[];
    public materias_aprobadas: MateriaEncuesta[];
    public materias_todaviano: MateriaEncuesta[];
    constructor(
        public legajo: number,
        public materias: MateriaEncuesta[],
    ) {



    }

  getJsonMaterias() {
      var materias;
    //   materias =
    console.log("Este es el json de las materias");
    //   console.log(this.getJsonAprobadas);
    this.getJsonAprobadas();
      return materias;

  }

  private getJsonAprobadas(){
      var materias: String = "{materias_aprobadas:" ;
      materias = materias + JSON.stringify(this.materias_aprobadas);

      materias = materias + "}"
    //   console.log(materias);

      return materias;
  }

  private  getJsonNoPuedoHorario() {
      var materias: String = "{materias_nopuedohorario:" ;
      materias = materias + JSON.stringify(this.materias_nopuedoporhorario);

      materias = materias + "}"
      //   console.log(materias);

      return materias;
  }

  private getJsonTodaviaNo() {
      var materias: String = "{materias_todaviano:" ;
      materias = materias + JSON.stringify(this.materias_todaviano);

      materias = materias + "}"
      //   console.log(materias);

      return materias;
  }

  private getJsonMateriasACursar() {
      var materias: String = "{materias_acursar:" ;
      materias = materias + JSON.stringify(this.materias);

      materias = materias + "}"
    //   console.log(materias);

      return materias;
  }


}
