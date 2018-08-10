import {User} from '../model/user';
import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import * as CryptoJS from 'crypto-js';
import * as forge from 'node-forge';

@Injectable()
export class LoginService {

  public SERVER_API = 'https://localhost:8443';
  public ELECC_API_TOKEN = this.SERVER_API + '/elecc/token';

  // Security crypt options
  private key = '2018Elecc2309Ram';
  private iv = 'RamELECCSecu2309';

  // http options used for making API calls
  private httpOptions: any;

  constructor(public http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('admin2:oD5TsOGzkZT3dnKuQ/a4PA==')
      })
    };

  }

  public authUser(ident: string, cred: string) {

    console.log('[Elecc Log]: Autenticando con parametros: ' + JSON.stringify({ident, cred}));

    const json = JSON.stringify({ident, cred});
    const user: User = new User(ident, this.encrypt(cred));

    this.http.post(this.ELECC_API_TOKEN, user, this.httpOptions).subscribe(
      res => {
        console.log('API Token ==> ' + JSON.stringify(res));
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      });

  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  encrypt(msg: string): string {

    const salt = forge.random.getBytesSync(128);
    const cipher = forge.cipher.createCipher('AES-CBC', this.key);

    cipher.start({iv: this.iv});
    cipher.update(forge.util.createBuffer(msg));
    cipher.finish();

    const msgout = cipher.output.getBytes();

    return btoa(msgout);

  }
}
