import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Users} from '../users'


@Injectable ()

export class AuthService {

    user: Users;
    authenticated: string;
    
    constructor(private http: HttpClient) {}

    getData(){
        return this.http.get('assets/users.json')
    }

 
    
    
}