import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-resourceForm',
  templateUrl: './resourceForm.component.html',
  styleUrls: ['./resourceForm.component.css']
})
export class ResourceFormComponent {
  networkForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.networkForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      operator: ['', [Validators.required]],
      description: ['', Validators.required],
      subnets: this.fb.array([])  
    });
  }
  get subnets() {
    return this.networkForm.get('subnets') as FormArray;
  }

  addSubnet(): void {
    this.subnets.push(this.fb.control('', Validators.required));
  }
  removeSubnet(index: number): void {
    this.subnets.removeAt(index);
  }

  onSubmit(): void {
    console.log('Form Data:', this.networkForm.value);
  }
}
