import {LoginModel} from '../entities/loginModel.entity';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from '../entities/user.entity';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  login(loginInfo: LoginModel): Observable<any> {
    return this.http.post(environment.loginUrl, loginInfo);
  }

  setLoggedUser(user: User) {
    localStorage.setItem('login', user.login);
    localStorage.setItem('id', user.id);
    localStorage.setItem('token', user.token);
  }

}
