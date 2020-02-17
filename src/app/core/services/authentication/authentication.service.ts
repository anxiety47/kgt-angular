import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../shared/models/user';
// import { User } from '@shared/models/user';
import { environment } from '../../../../environments/environment';
// import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public currentUser: Observable<User>;
  public url = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<any>(`${this.url}/users/authenticate`, { username, password }).pipe(map(
      user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }
    ));
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
