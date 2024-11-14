import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gnet',
  templateUrl: './gnet.component.html',
  styleUrls: ['./gnet.component.css']
})
export class GnetComponent implements OnInit {
  @Input() parentForm!: FormGroup; 

  constructor() {}

  ngOnInit(): void {
    // You can add additional controls specific to Gnet here if needed
  }
}
