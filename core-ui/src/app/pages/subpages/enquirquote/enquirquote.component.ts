import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-enquirquote',
  templateUrl: './enquirquote.component.html',
  styleUrls: ['./enquirquote.component.scss']
})
export class EnquirquoteComponent implements OnInit {

  submitted = false;
  IsEligible: boolean = false;
  Step = 1;
  formId: string = "";
  CompletedResponse: any;

  Expand = {
    personaldetail: true,
    policydetail: true
  }


  constructor(private enquiryService: EnquiryService
    , private el: ElementRef
    , private router: Router
    , private ngxService: NgxUiLoaderService
    , private loginService: LoginService) { }

  ngOnInit(): void {
  }

  enquiryForm = new FormGroup({
    'name': new FormControl('customer name', [
      Validators.required
    ]),
    'mobile': new FormControl('1231231231', [
      Validators.required,
      Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)
    ]),
    'productname': new FormControl('pname', [
      Validators.required
    ]),
    'rcd': new FormControl(23.32, [
      Validators.required,
      Validators.pattern(/\-?\d+\.\d+/)
    ]),
    'premium': new FormControl(23.32, [
      Validators.required,
      Validators.pattern(/\-?\d+\.\d+/)
    ]),
    'sa': new FormControl(23.32, [
      Validators.required,
      Validators.pattern(/\-?\d+\.\d+/)
    ]),
    'ppt': new FormControl(23.32, [
      Validators.required,
      Validators.pattern(/\-?\d+\.\d+/)
    ]),
    'pt': new FormControl(23.32, [
      Validators.required,
      Validators.pattern(/\-?\d+\.\d+/)
    ]),
    'surrendervalue': new FormControl(23.32, [
      Validators.required,
      Validators.pattern(/\-?\d+\.\d+/)
    ]),
    'accruedrb': new FormControl(23.32, [
      Validators.required,
      Validators.pattern(/\-?\d+\.\d+/)
    ]),
    'age': new FormControl(23, [
      Validators.required,
      Validators.pattern(/^[0-9]*$/),
    ]),
    'dob': new FormControl({ year: 2020, month: 12, day: 12 }, [
      Validators.required
    ]),
    'calculationdate': new FormControl({ year: 2020, month: 12, day: 12 }, [
      Validators.required
    ]),
    'lastpremiumdate': new FormControl({ year: 2020, month: 12, day: 12 }, [
      Validators.required
    ]),
    'lastpremiumduedate': new FormControl({ year: 2020, month: 12, day: 12 }, [
      Validators.required
    ]),
    'email': new FormControl('example@ds.com', [
      Validators.required,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ])
  });

  // convenience getter for easy access to form fields
  get f() { return this.enquiryForm.controls; }

  onReset() {
    this.submitted = false;
    this.enquiryForm.reset();
  }

  async onSubmit() {
    this.ngxService.start();
    this.submitted = true;
    // stop here if form is invalid
    if (this.enquiryForm.invalid) {
      this.ngxService.stop();
      return;
    }

    if (!this.loginService.User) {
      alert("Please Login to continue");
      this.ngxService.stop();
    }
    console.log(this.enquiryForm.value);
    var res = await this.enquiryService.checkEligibility(this.enquiryForm.value);
    this.Step = 2
    if (res && res["IsEligible"]) {
      this.IsEligible = true;
      // TODO: add a toster for giving info for uploading file.
      this.formId = res["id"];
    }
    this.CompletedResponse = res;
    this.ngxService.stop();
  }

  async goBack() {
    this.Step = 1;
    this.IsEligible = false;
  }

}
