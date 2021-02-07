const sql = require("./db.js");
const util = require('util');

// constructor
const Enquiry = function (enquiry) {
  this.productname = enquiry.productname,
    this.rcd = enquiry.rcd,
    this.premium = enquiry.premium,
    this.sa = enquiry.sa,
    this.ppt = enquiry.ppt,
    this.pt = enquiry.pt,
    this.mode = enquiry.mode,
    this.surrendervalue = enquiry.surrendervalue,
    this.accruedrb = enquiry.accruedrb,
    this.age = enquiry.age,
    this.dob = enquiry.dob,
    this.calculationdate = enquiry.calculationdate,
    this.lastpremiumdate = enquiry.lastpremiumdate,
    this.lastpremiumduedate = enquiry.lastpremiumduedate,
    this.email = enquiry.email,
    this.status = enquiry.status,
    this.userid = enquiry.userid,
    this.Createdon = new Date().toISOString().slice(0, 19).replace('T', ' '),
    this.Createdby = enquiry.createdby
};



Enquiry.create = async function (newEnquiry) {
  let result;
  try {
    result = await sql.query("INSERT INTO EnquiryForm SET ?", newEnquiry);
  } catch (err) {
    //TODO: handle error
  }
  const insertedId = result && result[0] && result[0].insertId ? result[0].insertId : 0
  console.log(insertedId)
  return insertedId;
};

Enquiry.findById = async function (formId) {
  let result;
  try {
    result = await sql.query(`SELECT * FROM enquiryform WHERE id = ${formId}`);
  } catch (err) {
    //TODO: handle error
  }
  return result[0][0];
};


Enquiry.linkFormToUser = async function (formId, userid) {
  let result;
  try {
    result = await sql.query(`update enquiryform set userid = ${userid} where id =${formId}`);
  } catch (err) {
    //TODO: handle error
  }
  return result[0][0];
};

Enquiry.linkFileToEnquiry = async function (formId, path) {
  let result;
  try {
    //todo:::
    result = await sql.query('insert')
    //result = await sql.query(`update enquiryform set fileAttachmentId = ${userid} where id =${formId}`);
  } catch (err) {
    //TODO: handle error
  }
  return result[0][0];
};

Enquiry.ChangeFormStatus = async function (formId, status) {
  let result;
  try {
    result = await sql.query(`update enquiryform set status = ${status} where id =${formId}`);
  } catch (err) {
    //TODO: handle error
  }
  return result[0][0];
};

module.exports = Enquiry;
