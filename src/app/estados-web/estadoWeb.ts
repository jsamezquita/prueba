import { Website } from "../web-sites/website";

/**
 * This class represents an estadoWeb of the CmSites.
 * It contains all the information relevant to the estadoWeb.
 */
export class EstadoWeb {


    /**
     * representa el estado asignado al estado web
     */
    estado: String;

    /**
     * id de un estado web
     */
    id: number;

    /**
     * descripcion correspondiente al estado web
     */
    descripcion: string;

    /**
     * fecha en la que se genero el estado web
     */
    fechaCambio: string;

    /**
     * sitio al cual pertenece el estado web
     */
    sitioAsociado: Website;

    


    constructor(estado: String, id: number, descripcion: string, fechaCambio: string, sitioAsociado:Website) {
        this.estado = estado;
        this.id = id;
        this.descripcion = descripcion;
        this.fechaCambio = fechaCambio;
        this.sitioAsociado = sitioAsociado;
       
    }
}