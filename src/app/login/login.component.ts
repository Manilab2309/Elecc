import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   ngOnInit() {
    /* Para trazar mensajes en la consola*/
    console.log('[Elecc Log]: login.component.ts cargado');
  }
}
