export class States
{
    active:number;

    inactive :number;

    onfailure:number;

    other:number;


    constructor(active: number, inactive: number, onfailure: number, other: number) {
        this.active = active;
        this.inactive = inactive;
        this.onfailure = onfailure;
        this.other = other;
    }
}