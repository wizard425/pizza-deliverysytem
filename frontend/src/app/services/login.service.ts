import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.baseUrl + 'auth';

  constructor(protected http: HttpClient) { }

  login (model : User): Observable<User> {
    return this.http.post<User>(this.url, model);
  }

}
