const { authJwt } = require("../middleware");

module.exports = app => {

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  const enquiry = require("../controllers/enquiry.controller.js");

  // Create a new Customer
  /**
   * @swagger
   * /GetEligibility:
   *  post:
   *    description: Use to request eligibility for the given policy details.
   *    responses:
   *      '200':
   *        description: A successful response
   * 
   * 
   */
  app.post("/GetEligibility", [authJwt.verifyToken], enquiry.GetEligibilty);

  app.get("/getform", [authJwt.verifyToken], enquiry.findOne);
  //upload File for enquiry
  app.post("/UploadPolicyFile", [authJwt.verifyToken], enquiry.uploadPolicyFile);
}
