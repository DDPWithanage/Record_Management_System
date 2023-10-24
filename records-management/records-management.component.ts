import { Component } from '@angular/core';

@Component({
  selector: 'app-records-management',
  templateUrl: './records-management.component.html',
  styleUrls: ['./records-management.component.css']
})
export class RecordsManagementComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    amount: ''
  };
  records: any[] = [];
  totalAmount: number = 0;

  validateAmount(event: any) {
    const input = event.target.value;
    if (!/^\d+$/.test(input)) {
      alert('Amount field accepts numbers only!');
      event.target.value = input.slice(0, -1);
    }
  }

  submitForm(form: any) {
     // Check if any field is empty
     if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.amount) {
      alert('Please fill out all fields.');
      return;
    }

    // Validate phone number
    let input = this.formData.phone;
    input = input.slice(0, 10); 
    this.formData.phone = input;
    if (!/^\d{10}$/.test(input)) {
        alert('Phone field accepts exactly 10 numbers!');
        return; 
    }
   
    //Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }
    
    //Email should be unique
    if (this.records.find(record => record.email === this.formData.email)) {
      alert('Email address must be unique!');
      return;
    }

    this.records.push({ ...this.formData });
    this.formData = { name: '', email: '', phone: '', amount: '' };
    this.sortRecords();

    // Calculate total amount
    this.totalAmount = this.records.reduce((sum, record) => sum + parseInt(record.amount), 0);

    form.resetForm();
  }

  sortRecords() {
    this.records.sort((a, b) => b.amount - a.amount);
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
  }
}
