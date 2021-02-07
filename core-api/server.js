const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');
const swaggerConfig = require("./app/config/swagger.config");
const app = express();
//require multer for the file uploads
//var multer = require('multer');
// set the directory for the uploads to the uploaded to
//var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
//var upload = multer({ dest: DIR }).single('photo');

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,x-access-token");

  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "GET, POST")
    return res.status(200).json({});
  }
  next();
});

//require("./app/routes/customer.routes.js")(app);
require("./app/routes/enquiry.routes.js")(app);
require("./app/routes/user.routes.js")(app);

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

const swaggerDocs = swaggerJsDoc(swaggerConfig.swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { "showExplorer": true }));

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
