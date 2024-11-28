import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './Task.component.html',
  styleUrls: ['./Task.component.css'],
})
export class TaskComponent {
  networkForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.networkForm = this.fb.group({
      account:['', Validators.required],
      accountName:['', Validators.required],
      freightAccount:['', Validators.required],
      createdDate:['', Validators.required],
      jobNo:['', Validators.required],
      shipperName:['', Validators.required],
      reference:['', Validators.required],
      consignee:['', Validators.required],
      contents:['', Validators.required],
      flightNo:['', Validators.required],
      wawb:['', Validators.required],
      origin:['', Validators.required],
      chargesAmount:['', Validators.required],
      noOfPieces:['', Validators.required],
      wawb1:['', Validators.required],
      flightDate:['', Validators.required],
      grossWeight:['', Validators.required],
      destination:['', Validators.required],
      vloume:['', Validators.required],
      arrivalDate:['', Validators.required],
      tablerow: this.fb.array([]),
    });
  }

  get tablerow(): FormArray {
    return this.networkForm.get('tablerow') as FormArray;
  }

  addTableRow(): void {
    const rowGroup = this.fb.group({
     
      hawb: ['', Validators.required],
      shipper: ['', Validators.required],
      consignee: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      reference: ['', Validators.required],
      code: ['~Select Type~', Validators.required],
      description: ['', Validators.required],  // Ensure this is correct here
      qty: [0, Validators.required],
      uom: [' ', Validators.required],
      notes: [' ', Validators.required],
    });
    this.tablerow.push(rowGroup);
  }

  onSubmit(): void {
    if (this.networkForm.valid) {
      console.log('Form Data:', this.networkForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
