import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Data} from '../data'
import { Observable } from "rxjs";

@Injectable ()

export class TableService {

    data: Data;
    
    constructor(private http: HttpClient) {}

    getData(){
        return this.http.get('assets/data.json');
    }
}