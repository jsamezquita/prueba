import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EstadoWeb} from './estadoWeb';
import {Observable} from 'rxjs';
import {AppConstants} from '../appConstants'
import {States} from "./states";

const API_URL = AppConstants.baseURL;
const estadosWeb = 'estadosWeb';

@Injectable({
  providedIn: 'root'
})
export class EstadosWebService {

  constructor(private http: HttpClient) { }

    getStatesValues():Observable<States>
    {
        return new Observable<States>(observer => {

            setInterval(() => {
                this.getStateBarValue().then(
                    value => {
                        observer.next(value);
                    }
                );
            }, 2000);
        });

    }

  getStateBarValue() : Promise<States> {

      let tempPromise= new Promise<States>(((resolve) => {


          let a = this.http.get<EstadoWeb[]>(API_URL + estadosWeb);
          let b :EstadoWeb[];
          let activos: number =0 ;
          let inavtivos: number =0;
          let falla: number =0;
          let otros: number =0;

          let promise = a.toPromise().then(value => {
              b = value
              b.forEach(estado => {
                  switch (estado.estado) {
                      case 'ACTIVO':
                          activos++;
                          break;
                      case'INACTIVO':
                          inavtivos++;
                          break;
                      case 'ENFALLA':
                          falla++;
                          break;
                      case 'OTROS':
                          otros++;
                          break;
                  }
              });
              let totales = activos + inavtivos + falla + otros;
              activos = (activos / totales)*100;
              inavtivos = (inavtivos / totales)*100;
              falla = (falla / totales)*100;
              otros = (otros / totales)*100;
              let response = new States(activos, inavtivos, falla, otros);

              resolve(response);

          });
      }));
    return tempPromise;

  }

  getEstadosSitio(sitio:number) : Observable<EstadoWeb[]>
  {
      return new Observable<EstadoWeb[]>(subscriber => {
          this.http.get<EstadoWeb[]>(API_URL + `websites/${sitio}/states`).subscribe(value => {
              subscriber.next(value);
          });
         setInterval(() => {
             this.http.get<EstadoWeb[]>(API_URL + `websites/${sitio}/states`).subscribe(value => {
                subscriber.next(value);
             });
             }, 1000);
      });
  }

  getEstadoActual(sitio:number) : Observable<EstadoWeb>
  {
      return new Observable<EstadoWeb>(subscriber => {
          this.http.get<EstadoWeb>(API_URL+`websites/${sitio}/states/last`).subscribe(value =>
              subscriber.next(value));
         setInterval(()=>{
                this.http.get<EstadoWeb>(API_URL+`websites/${sitio}/states/last`).subscribe(value =>
                subscriber.next(value))
         },1000) ;
      });
  }

  getEstadoActualStatic(sitio:number):Observable<EstadoWeb>
  {
      return    this.http.get<EstadoWeb>(API_URL+`websites/${sitio}/states/last`);
  }

  /**
    * Creates an EstadoWeb
    * @param EstadoWeb The new EstadoWeb
    * @returns The confirmation that the EstadoWeb was created
    */
   createEstadoWeb(EstadoWeb): Observable<EstadoWeb> {
    return this.http.post<EstadoWeb>(API_URL + "estadosWeb", EstadoWeb);
}

  

}
