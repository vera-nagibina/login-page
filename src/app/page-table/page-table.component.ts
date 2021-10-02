import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../page-login/services/auth.service';
import { TableService } from '../page-table/services/table.service';
import { Data } from './data';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
  
})

export class PageTableComponent {

  data: Data[];
  
  constructor (private router: Router, private auth: AuthService,
               private tableService:TableService){
  
  }
  ngOnInit (){
    
    this.tableService.getData().subscribe((data:Data[]) => this.data = data);
      
  }
  
  logout(){
    this.auth.authenticated = 'false';
    localStorage.setItem('',this.auth.authenticated);
    this.router.navigate(['login'])
  }
  

}