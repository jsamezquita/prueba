import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Website } from './website';
import { Observable } from 'rxjs';
import { AppConstants } from '../appConstants'
import {EstadoWeb} from "../estados-web/estadoWeb";

const API_URL = AppConstants.baseURL;
const websites = 'websites';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private http: HttpClient) {
  }

  getSites() : Observable<Website[]> {

    return new Observable<Website[]>(subscriber => {
      this.http.get<Website[]>(API_URL + websites).subscribe(value =>
          subscriber.next(value));
      setInterval(()=>{
        this.http.get<Website[]>(API_URL + websites).subscribe(value =>
            subscriber.next(value))
      },60000) ;
    });
  }

  getSite(id:number) : Observable<Website> {

   return this.http.get<Website>(API_URL + `${websites}/${id}`);
  }

  getSitesRelated(id: number) : Observable<Website[]> {
    console.log(`service getting sites related`)
      return this.http.get<Website[]>(API_URL + websites+`/${id}/related`);
  }

  updateSite(site:Website):Observable<Website>
  {
    return this.http.put<Website>(API_URL+websites,site);
  }
}
