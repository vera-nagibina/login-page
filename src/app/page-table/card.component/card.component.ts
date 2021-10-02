import { Component, Input } from '@angular/core';
import { Data } from '../data';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
  
})
export class CardComponent {
  
  constructor(){

  }

    
  @Input() data: Data; 
  
   
}