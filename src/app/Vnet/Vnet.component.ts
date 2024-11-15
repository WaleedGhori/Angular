import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vnet',
  templateUrl: './Vnet.component.html',
  styleUrls: ['./Vnet.component.css']
})
export class VnetComponent  {
  @Input() parentForm!: FormGroup;
  
  networkForm: FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.networkForm = this.fb.group({
      // fullName: ['', [Validators.required, Validators.minLength(3)]],
      // description: ['', Validators.required],
      subnets: this.fb.array([]) // Empty Array to save the value of subnets form
    });
  }

  get subnets() {
    return this.networkForm.get('subnets') as FormArray;
  }

  addSubnet(): void {
    const subnetGroup = this.fb.group({
      subnetName: ['', Validators.required]
    });
    this.subnets.push(subnetGroup);
  }

  removeSubnet(index: number): void {
    this.subnets.removeAt(index);
  }
 
}
