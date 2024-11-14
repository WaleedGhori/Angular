import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-resourceForm',
  templateUrl: './ResourceForm.component.html',
  styleUrls: ['./ResourceForm.component.css']
})
export class ResourceFormComponent {
  checkoutForm: FormGroup;
  showSubnet: boolean = false;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      operator: ['', [Validators.required]],
      address: ['', Validators.required],
      networks: this.fb.array([])  
    });
  }

  // Getter for networks form array
  get networks() {
    return (this.checkoutForm.get('networks') as FormArray);
  }

  addNetwork(type: string): void {
    if (type === 'subnet') {
      this.showSubnet = true;  
    }
  }

  // Method to remove a network form
  removeNetwork(index: number): void {
    this.networks.removeAt(index);
    this.showSubnet = false;  // Hide subnet component if no 'subnet' network exists
  }

  // Submit form handler
  onSubmit(): void {
    console.log(this.checkoutForm.value);
  }
}
