const appConfig = require("../config/app.config");
const axios = require('axios')
const https = require('https')

// constructor
const GoogleApi = function () { };

//for development only
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})
axios.defaults.options = httpsAgent

GoogleApi.GetEligibility = async function (model) {
  return new Promise((resolve, reject) => {
    console.log(model);

    var body = {
      productname: model.productname,
      rcd: model.rcd,
      premium: model.premium,
      sa: model.sa,
      ppt: model.ppt,
      pt: model.pt,
      mode: model.mode,
      surrendervalue: model.surrendervalue,
      accruedrb: model.accruedrb,
      age: model.age,
      dob: GetDateInGoogleApiFormat(model.dob),
      calculationdate: GetDateInGoogleApiFormat(model.calculationdate),
      lastpremiumdate: GetDateInGoogleApiFormat(model.lastpremiumdate),
      lastpremiumduedate: GetDateInGoogleApiFormat(model.lastpremiumduedate)
    };

    console.log(body);

    axios
      .post(appConfig.google_api_for_eligibility
        , body)
      .then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
        resolve(res)
      })
      .catch(error => {
        console.error(error)
        reject(error);
      })
  });
}

function GetDateInGoogleApiFormat(date) {
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1; //months from 1-12
  let day = dateObj.getDate();
  let year = dateObj.getFullYear();
  let newdate = day + "-" + month + "-" + year.toString().slice(-2);
  return newdate;
}

module.exports = GoogleApi;
