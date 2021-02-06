import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-policynumberform',
  templateUrl: './policynumberform.component.html',
  styleUrls: ['./policynumberform.component.scss']
})
export class PolicynumberformComponent implements OnInit {

  policynumber: number
  MOCKpolicyForm: any;
  step: number = 1;
  IsEligible: boolean = false;
  CompletedResponse: any;

  constructor(private enquiryService: EnquiryService
    , private ngxService: NgxUiLoaderService
    , private loginService: LoginService) { }

  ngOnInit(): void {
    this.MOCKpolicyForm = { "productname": "pname", "rcd": 23.32, "premium": 23.32, "sa": 23.32, "ppt": 23.32, "pt": 23.32, "surrendervalue": 23.32, "accruedrb": 23.32, "age": 23, "dob": { "year": 2020, "month": 12, "day": 12 }, "calculationdate": { "year": 2020, "month": 12, "day": 12 }, "lastpremiumdate": { "year": 2020, "month": 12, "day": 12 }, "lastpremiumduedate": { "year": 2020, "month": 12, "day": 12 }, "email": "example@ds.com" }
  }

  checkForPolicy() {
    this.step = 2;
  }

  async getConfirmation(confirm) {
    if (confirm) {
      this.ngxService.start();
      // stop here if form is invalid
      var res = await this.enquiryService.checkEligibility(this.MOCKpolicyForm);
      this.step = 3;
      if (res && res["IsEligible"]) {
        this.IsEligible = true;
      }
      this.CompletedResponse = res;
      this.ngxService.stop();
    }
    else {
      this.step = 1
    }

  }

}
