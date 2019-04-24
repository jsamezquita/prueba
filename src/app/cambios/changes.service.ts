import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Change } from './change';
import { Observable } from 'rxjs';
import { AppConstants } from '../appConstants'


const API_URL = AppConstants.baseURL;
const cambios = 'changes '; //No estoy seguro de la ruta

@Injectable({
  providedIn: 'root'
})
export class ChangesService {


  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of user retrieved from the API
    * @returns The list of cambios in real time
    */
  getChanges(): Observable<Change[]> {
    return this.http.get<Change[]>(API_URL + cambios);
  }

  /**
  * Creates an user
  * @param cambio The user which will be created
  * @returns The confirmation of the cambio's creation
  */
  createChange(cambio): Observable<Change> {
    return this.http.post<Change>(API_URL + cambios, cambio);
  }

}
