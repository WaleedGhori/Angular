import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vnet',
  templateUrl: './Vnet.component.html',
  styleUrls: ['./Vnet.component.css']
})
export class VnetComponent implements OnInit {
  @Input() parentForm!: FormGroup; 

  constructor() { }
  renderValue: number = 1;
  
  addRender(){
     this.renderValue +=1;
  }
  ngOnInit(): void {
   
    }

 
}
