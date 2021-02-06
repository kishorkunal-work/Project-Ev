const Enquiry = require("../models/enquiry.model.js");
const User = require("../models/user.model.js");
const GoogleApiWrapper = require("../models/googleapi.model.js");
var multer = require('multer');

// Create and Save a new Enquiry
exports.GetEligibilty = async function (req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Enquiry
  const enquiry = new Enquiry({
    productname: req.body.productname,
    rcd: req.body.rcd,
    premium: req.body.premium,
    sa: req.body.sa,
    ppt: req.body.ppt,
    pt: req.body.pt,
    mode: req.body.mode,
    surrendervalue: req.body.surrendervalue,
    accruedrb: req.body.accruedrb,
    age: req.body.age,
    dob: req.body.dob,
    calculationdate: req.body.calculationdate,
    lastpremiumdate: req.body.lastpremiumdate,
    lastpremiumduedate: req.body.lastpremiumduedate,
    email: req.body.email,
    status: "PENDING",
    createdby: req.user
  });

  const result = await Enquiry.create(enquiry);

  let EligibilityResponse = await GoogleApiWrapper.GetEligibility(enquiry);
  let IsEligible = EligibilityResponse.data.flag === 1 ? true : false
  res.send({ id: result, data: enquiry, IsEligible, message: EligibilityResponse.data.policyIRR })
};

// Find a single Customer with a customerId
exports.findOne = async function (req, res) {
  let result;

  try {
    result = await Enquiry.findById(req.query.formid);
  }
  catch (err) {
    res.status(404).send({
      message: `Not found Enquiry Form with id ${req.query.formid}.`
    });
  }
  res.send(result);
};

exports.uploadPolicyFile = async function (req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  //upload the file.
  let response = {
    IsNewUser: false,
    Email: "",
    Password: "",
    Error: null,
    Message: ""
  };

  let path = await uploadFileToLocalFolder(req, res);
  //fetch the formid
  let formId = req.body.policyid;
  //get the userid if present
  let form = await Enquiry.findById(formId);
  let email = form.Email;
  response.Email = email;
  //check the email in user table 
  let user = await User.findByEmail(email);
  if (user === undefined) {
    response.IsNewUser = true
    response.Password = Math.random().toString(36).slice(-8);
    await User.signup(email, response.Password, "user");
    user = await User.findByEmail(email);
  }
  await Enquiry.linkFileToEnquiry(formId, path);

  if (user) {
    await Enquiry.linkFormToUser(formId, user.id);
  }

  response.Message = `file uploaded successfully for email ${email}`

  //update the form table with userid , and file path.

  return res.send(response);

};


async function uploadFileToLocalFolder(req, res) {
  var storage = multer.diskStorage(
    {
      destination: './uploads/',
      filename: function (req, file, cb) {
        cb(null, "Policy_" + file.originalname.split(".")[0] + '-' + Date.now() + ".pdf");
      }
    }
  );

  var upload = multer({ storage: storage }).single('file');

  return new Promise(function (resolve, reject) {
    upload(req, res, function (err) {
      if (err) {
        reject(err)
      }
      // No error occured.
      path = req.file.path;
      resolve(path);
    });
  });
}




