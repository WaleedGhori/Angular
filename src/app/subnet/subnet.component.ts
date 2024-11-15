import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subnet',
  templateUrl: './subnet.component.html',
  styleUrls: ['./subnet.component.css']
})
export class SubnetComponent implements OnInit {
  @Input() resourceForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    if (!this.resourceForm) {
      console.error('SubnetComponent: resourceForm is not defined!');
    }
  }
}
