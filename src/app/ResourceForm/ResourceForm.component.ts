import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';



export interface PeriodicElement {
  key: string;
  value: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {key: "1", value: 'Hydrogen'},
];



@Component({
  selector: 'app-resourceForm',
  templateUrl: './resourceForm.component.html',
  styleUrls: ['./resourceForm.component.css']
})
export class ResourceFormComponent {
  networkForm: FormGroup;

  displayedColumns: string[] = ['key', 'value'];
  dataSource = ELEMENT_DATA;

  constructor(private fb: FormBuilder) {
    this.networkForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      tablerow: this.fb.array([])
    });
   
    this.populateTableRows(ELEMENT_DATA);
  }
  
  populateTableRows(data: PeriodicElement[]): void {
    data.forEach(element => {
      this.tablerow.push(
        this.fb.group({
          key: [element.key, Validators.required],
          value: [element.value, Validators.required],
        })
      );
    });
  }
  
  get tablerow() {
      return this.networkForm.get('tablerow') as FormArray;
  }
  
  addTableRow(): void {
    console.log("waleed");
    
    const rowGroup = this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
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
