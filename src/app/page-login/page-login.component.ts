import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Users } from './users';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
  
})
export class PageLoginComponent implements OnInit {

form: FormGroup;
condition: boolean = true;
textType: string = 'password';
user: Users;
isError: boolean;

  constructor (
    private router: Router,
    private auth: AuthService){ }
  
  ngOnInit (){
    this.form = new FormGroup( {
      login: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20), 
        Validators.pattern(/^[A-z]+$/)]),
      password: new FormControl(null, [Validators.required])
    })

    this.auth.getData().subscribe((data:Users) => this.user = data);
        
  }
  submit (){
    if (this.form.valid) {
      if (this.form.value.login === this.user.login && this.form.value.password === this.user.password) {
        this.auth.authenticated = 'true';
        this.router.navigate(['']);
        localStorage.setItem('',this.auth.authenticated);
               
      }
      else this.isError = true;
  
    }
    
}
  
  changeView(){
    this.condition = !this.condition;
    if (!this.condition){
      this.textType = 'text';
    }
    else this.textType = 'password';

  }
}
