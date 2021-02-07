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

  /**
   * @swagger
   * /GetEligibility:
   *  post:
   *    description: Use to request eligibility for the given policy details.
   *  produces:
   *    - application/json
   *  parameters:
   *     - in: body
   *       name: user
   *       description: The user to create.
   *       schema:
   *         type: object
   *         required:
   *           - productname
   *         properties:
   *           productname:
   *             type: string
   *           rcd:
   *             type: string
   *           premium:
   *             type: string
   *           sa:
   *             type: string
   *           ppt:
   *             type: string
   *           pt:
   *             type: string
   *           mode:
   *             type: string
   *           surrendervalue:
   *             type: string
   *           accruedrb:
   *             type: string
   *           age:
   *             type: string
   *           dob:
   *             type: string
   *           calculationdate:
   *             type: string
   *           lastpremiumdate:
   *             type: string
   *           lastpremiumduedate:
   *             type: string
   *           email:
   *             type: string
   *  responses:
   *     '200':
   *        description: A successful response
   * 
   * 
   */
  app.post("/GetEligibility", [authJwt.verifyToken], enquiry.GetEligibilty);

  /**
   * @swagger
   * /GetPolicyDetail:
   *  get:
   *    description: Use to request policy details for given policy number and company.
   *    parameters:
   *     - in: query
   *       name: policynumber
   *       schema:
   *         type: integer
   *       description: Enter policynumber
   *     - in: query
   *       name: company
   *       schema:
   *         type: string
   *       description: Enter company
   *    responses:
   *      '200':
   *        description: A successful response
   * 
   * 
   */
  app.get("/GetPolicyDetail", [authJwt.verifyToken], enquiry.GetPolicyDetail);
  app.get("/getform", [authJwt.verifyToken], enquiry.findOne);
  //upload File for enquiry
  app.post("/UploadPolicyFile", [authJwt.verifyToken], enquiry.uploadPolicyFile);
}
