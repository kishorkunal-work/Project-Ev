export interface DateModel {
    year: number;
    month: number;
    day: number;
}


export interface EnquiryFormModel {
    name: string;
    mobile: string;
    productname: string;
    rcd: string;
    premium: string;
    sa: string;
    ppt: string;
    pt: string;
    mode: string;
    surrendervalue: string;
    accruedrb: string;
    age: string;
    dob: DateModel;
    calculationdate: DateModel;
    lastpremiumdate: DateModel;
    lastpremiumduedate: DateModel;
    email: string;
    status: string;
}

export interface EnquiryFormModelReq {
    name: string;
    mobile: string;
    productname: string;
    rcd: string;
    premium: string;
    sa: string;
    ppt: string;
    pt: string;
    mode: string;
    surrendervalue: string;
    accruedrb: string;
    age: string;
    dob: string;
    calculationdate: string;
    lastpremiumdate: string;
    lastpremiumduedate: string;
    email: string;
    status: string;
}

