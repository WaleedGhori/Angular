import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-subnet',
  templateUrl: './subnet.component.html',
  styleUrls: ['./subnet.component.css']
})
export class SubnetComponent implements OnInit {
  @Input() resourceForm!: FormGroup;
  networkForm: FormGroup
  panelOpenState = false;
  
  constructor(private fb: FormBuilder) {
    this.networkForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      nic: this.fb.array([])
    });
  }
  
  get nic() {
    return this.networkForm.get('nic') as FormArray;
  }

  addNic(): void {
    const nicGroup = this.fb.group({
      nicName: ['', Validators.required]
    });
    this.nic.push(nicGroup);
  }

  removeSubnet(index: number): void {
    this.nic.removeAt(index);
  }
  ngOnInit(): void {
    if (!this.resourceForm) {
      console.error('SubnetComponent: resourceForm is not defined!');
    }
  }
}
