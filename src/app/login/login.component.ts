import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  ngOnInit() {
    /* Para trazar mensajes en la consola */
    this.loginForm = this.formBuilder.group({
      ident: ['', Validators.required],
      cred: ['', Validators.required]
    });

    console.log('[Elecc Log]: login.component.ts cargado');
  }

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {}

  // convenience getter for easy access to form fields
  get f() {return this.loginForm.controls; }

  authUser(): void {

    const identVal = this.f.ident.value;
    const credVal = this.f.cred.value;

    console.log('[Elecc Log]: Autenticando usuario...' + identVal + credVal);

    this.loginService.authUser(identVal, credVal);
    console.log('[Elecc Log]: Autenticación OK');

  }

}

