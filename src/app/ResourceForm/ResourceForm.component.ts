import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-resourceForm',
  templateUrl: './resourceForm.component.html',
  styleUrls: ['./resourceForm.component.css'],
})
export class ResourceFormComponent {
  @Output() formDataEmitter = new EventEmitter<any>();

  networkForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.networkForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      tablerow: this.fb.array([]),
    });

  }

  get tablerow(): FormArray {
    return this.networkForm.get('tablerow') as FormArray;
  }

  addTableRow(): void {
    const rowGroup = this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    });
    this.tablerow.push(rowGroup);
  }

  removeTableRow(index: number): void {
    this.tablerow.removeAt(index);
  }

  onSubmit(): void {
    this.formDataEmitter.emit(this.networkForm.value);
    if (this.networkForm.valid) {
      console.log('Form Data:', this.networkForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
