import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class LoginService {

  public SERVER_API = 'https://localhost:8443';
  public ELECC_API = this.SERVER_API + '/elecc';
  basic = '';

  constructor(public http: HttpClient) {}

  public authUser(ident: string, cred: string) {
    console.log('[Elecc Log]: Autenticando con parametros: ' + JSON.stringify({ident, cred}));
    const json = JSON.stringify({ident, cred});
    const params = new HttpParams()
      .set('identification', ident)
      .set('pass', cred);

    this.http.post('http://localhost:8080/authUser', params, httpOptions).subscribe();

  }
}
