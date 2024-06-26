import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  retry,
  throwError,
} from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserRequestsService {
  userLoggedBehavior: BehaviorSubject<boolean>;

  httpheader = {};

  constructor(private httpClient: HttpClient) {
    // this.userLoggedBehavior = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  getAllUsers(): Observable<object[]> {
    return this.httpClient.get<object[]>(`${environment.BAseApiURL}/users`);
  }

  signup(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(
        `${environment.BAseApiURL}/admin/register`,
        user,
        this.httpheader
      )
      .pipe(retry(3));
  }

  addNewUser(user: any): Observable<IUser> {
    return this.httpClient.post<any>(
      `${environment.BAseApiURL}/users`,
      JSON.stringify(user)
      // this.httpheader
    );
    // .pipe(
    //   retry(3),
    //   catchError((err) => {
    //     return throwError(() => {
    //       return new Error('Error While Adding user');
    //     });
    //   })
    // );
  }

  getOneUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.BAseApiURL}/users/${id}`);
  }

  editOneUser(id: string, updates: any): Observable<IUser> {
    console.log(updates);

    return this.httpClient.patch<any>(
      `${environment.BAseApiURL}/users/${id}`,
      JSON.stringify(updates)
    );
  }

  deleteUser(id: string | undefined) {
    var user = `${environment.BAseApiURL}/users/${id}`;
    return this.httpClient.delete(user);
  }
}
