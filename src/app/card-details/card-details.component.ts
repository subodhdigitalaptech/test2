import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  viewMode = 'tab1';
  detailForm: FormGroup;
  paymentForm: FormGroup;
  submitted = false;
  paySubmitted= false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.detailForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.paymentForm = this.formBuilder.group({
      card_number: ['', [Validators.required, Validators.minLength(16)]],
      card_expire: ['', [Validators.required]],
      card_name: ['', Validators.required],
      card_code: ['', [Validators.required]],
    });
    
  }
  // convenience getter for easy access to form fields
  get f() { return this.detailForm.controls; }
  get p() { return this.paymentForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.detailForm.invalid) {
          return;
      }

      this.viewMode = 'tab2';
     
  }
  onPaymentSubmit() {
    this.paySubmitted = true;

    // stop here if form is invalid
    if (this.paymentForm.invalid) {
        return;
    }

    this.viewMode = 'tab3';
   
}


}
