import { Injectable } from '@angular/core';
import { EnquiryFormModel, EnquiryFormModelReq } from 'src/model/EnquiryForm';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {


  constructor(private dataService: DataService) { }

  Enquiries: Array<EnquiryFormModel> = []

  async checkEligibility(value: EnquiryFormModel) {

    var reqModel: EnquiryFormModelReq = {
      productname: value.productname,
      rcd: value.rcd,
      premium: value.premium,
      sa: value.sa,
      ppt: value.ppt,
      pt: value.pt,
      mode: value.mode,
      surrendervalue: value.surrendervalue,
      accruedrb: value.accruedrb,
      age: value.age,
      dob: this.getDateFormatForApi(value.dob),
      calculationdate: this.getDateFormatForApi(value.calculationdate),
      lastpremiumdate: this.getDateFormatForApi(value.lastpremiumdate),
      lastpremiumduedate: this.getDateFormatForApi(value.lastpremiumduedate),
      email: value.email,
      status: "PENDING"
    };

    var res = await this.dataService.checkEligibility(reqModel);
    console.log(res);
    return Promise.resolve(res);
  }

  async uploadFile(formData: FormData) {
    //    var res = await this.dataService.uploadFile(formData);
    var res = "true"
    console.log(res);
    return Promise.resolve(res);
  }

  getDateFormatForApi(dateValue) {
    return `${dateValue.year}-${dateValue.month}-${dateValue.day} 00:00:00`
  }


}
