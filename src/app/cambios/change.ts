import { Website } from "../web-sites/website";

export class Change {

    idAsociado: number;
    lugarCambio: string;
    descripcion: string;
    fechaCambio: Date;
    previo:string;
    nuevo:string;
    sitioWeb:Website;
}
