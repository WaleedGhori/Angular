import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-resourceForm',
  templateUrl: './resourceForm.component.html',
  styleUrls: ['./resourceForm.component.css']
})
export class ResourceFormComponent {
  checkoutForm: FormGroup;
  networks: FormArray;
  showSubnet = false;
  showGnet = false;
  showVnet = false;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      networks: this.fb.array([])
    });
    this.networks = this.checkoutForm.get('networks') as FormArray;
  }

  addNetwork(type: string): void {
    this.networks.push(this.fb.group({
      type: [type, Validators.required],
      name: ['', Validators.required]
    }));

    // Show corresponding network component
    if (type === 'subnet') {
      this.showSubnet = true;
    } else if (type === 'gnet') {
      this.showGnet = true;
    } else if (type === 'vnet') {
      this.showVnet = true;
    }
  }

  removeNetwork(index: number): void {
    this.networks.removeAt(index);
    this.showSubnet = this.networks.value.some((network: any) => network.type === 'subnet');
    this.showGnet = this.networks.value.some((network: any) => network.type === 'gnet');
    this.showVnet = this.networks.value.some((network: any) => network.type === 'vnet');
  }

  onSubmit(): void {
    console.log(this.checkoutForm.value);
  }
}
