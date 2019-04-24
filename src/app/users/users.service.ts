import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { AppConstants } from '../appConstants'
import { UserDetail } from './user-detail';


const API_URL = AppConstants.baseURL;
const users = 'users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of user retrieved from the API
    * @returns The list of admins in real time
    */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + users);
  }

  /**
    * Returns the Observable object containing the user retrieved from the API
    * @returns The user
    */
  getUserDetail(userId): Observable<UserDetail> {
    return this.http.get<UserDetail>(API_URL + users + '/' + userId);
  }

  /**
  * Creates an user
  * @param user The user which will be created
  * @returns The confirmation of the user's creation
  */
  createUser(user): Observable<User> {
    return this.http.post<User>(API_URL + users, user);
  }

  /**
    * Updates an user
    * @param user The editorial which will be update
    * @returns The confirmation of the user's update
    */
   updateEditorial(user): Observable<UserDetail> {
    return this.http.put<UserDetail>(API_URL + users + '/' + user.id, user);
}

}
