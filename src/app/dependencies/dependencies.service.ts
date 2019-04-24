import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dependencies } from './dependencies';
import { Observable } from 'rxjs';
import { AppConstants } from '../appConstants';
import { DependenciesDetail } from './dependencies-detail';

const API_URL = AppConstants.baseURL;
const dependencies = 'dependencies';


@Injectable()
export class DependenciesService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    getDependencyDetail(depId): Observable<DependenciesDetail> {
        return this.http.get<DependenciesDetail>(API_URL + dependencies + '/' + depId);
    }   
    createDependency(dep): Observable<Dependencies> {
        return this.http.post<Dependencies>(API_URL + dependencies, dep);
    }
}