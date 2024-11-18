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
      subnets: this.fb.array([]),
      tablerow: this.fb.array([])
    });
  }

  get tablerow() {
    return this.networkForm.get('tablerow') as FormArray;
  }
  addTableRow(): void {
    const tablerow = this.fb.group({
      tablerowname: ['', Validators.required]
    });
    this.tablerow.push(tablerow);
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

  onSubmit(): void {
    console.log('Form Data:', this.networkForm.value);
  }
}
