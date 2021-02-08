import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DialogService } from 'src/app/common/dialog/dialog.service';
import { DataService } from 'src/app/service/data.service';
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
  company = "";

  constructor(private enquiryService: EnquiryService
    , private ngxService: NgxUiLoaderService
    , private loginService: LoginService
    , private dialogService: DialogService
    , private dataService: DataService) { }

  ngOnInit(): void {
    //this.MOCKpolicyForm = { "productname": "pname", "rcd": 23.32, "premium": 23.32, "sa": 23.32, "ppt": 23.32, "pt": 23.32, "surrendervalue": 23.32, "accruedrb": 23.32, "age": 23, "dob": { "year": 2020, "month": 12, "day": 12 }, "calculationdate": { "year": 2020, "month": 12, "day": 12 }, "lastpremiumdate": { "year": 2020, "month": 12, "day": 12 }, "lastpremiumduedate": { "year": 2020, "month": 12, "day": 12 }, "email": "example@ds.com" }
    this.company = this.loginService.isAuthenticated() ? this.loginService.User.decoded.user.company : ""
  }

  async checkForPolicy() {

    if (!this.policynumber) {
      alert("Please enter valid policy number!!")
      return;
    }

    let policy = await this.dataService.fetchPolicy(this.policynumber, this.loginService.User.decoded.user.company);
    this.MOCKpolicyForm = policy["data"] ? policy["data"][0] : undefined;

    if (!this.MOCKpolicyForm) {
      alert("Could not found any policy against this number!!")
      return;
    }

    let html = "";
    html += `<dl class="row">
    <dt class="col-sm-4">Name :</dt>
    <dd class="col-sm-8">${this.MOCKpolicyForm.name}</dd>
    <dt class="col-sm-4">Product Name :</dt>
    <dd class="col-sm-8">${this.MOCKpolicyForm.productname}</dd>
    <dt class="col-sm-4">RCD :</dt>
    <dd class="col-sm-8">${this.MOCKpolicyForm.rcd}</dd>
    <dt class="col-sm-4">Premium :</dt>
    <dd class="col-sm-8">${this.MOCKpolicyForm.premium}</dd>
    <dt class="col-sm-4">Sum Assured :</dt>
    <dd class="col-sm-8">${this.MOCKpolicyForm.sa}</dd>
    <dt class="col-sm-4">Last Premium Pay date :</dt>
    <dd class="col-sm-8">${this.MOCKpolicyForm.lastpremiumdate}</dd>
    </dl>
    `
    this.dialogService.confirm('Please confirm the below policy details to proceed further...',
      '',
      html
    )
      .then((confirmed) => {
        if (confirmed) {
          this.getConfirmation(confirmed)
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }



  async getConfirmation(confirm) {
    if (confirm) {
      this.ngxService.start();
      // stop here if form is invalid
      var res = await this.enquiryService.checkEligibility(this.MOCKpolicyForm);
      this.step = 2;
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

  goBack() {
    this.step = 1
  }

}
