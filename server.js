const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Required for AuthO athentcation
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://fireboard.auth0.com/.well-known/jwks.json"
    }),
    audience: 'https://github.com/danielryne/fireboard',
    issuer: "https://fireboard.auth0.com/",
    algorithms: ['RS256']
});

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/firestations",
  {
    useMongoClient: true
  }
);
// Start the API server
app.listen(PORT, function() {
  console.log(`🔥 ==> API Server now listening on PORT ${PORT}!`);
});