const graphqlHTTP = require('express-graphql');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// const {
//   graphql,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString
// } = require('graphql');

// //OLD GRAPHQL CODE//
// var MyGraphQLSchema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'User',
//     fields: {
//       email: {
//         type: GraphQLString,
//         resolve: () => {
//           return 'email';
//         }
//       },
//       password: {
//         type: GraphQLString,
//         resolve: () => {
//           return 'password';
//         }
//       }
//     }
//   })
// });

//OLD GRAPHQL CODE//


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/graphql', graphqlHTTP({
//   schema: MyGraphQLSchema,
//   graphiql: true
// }));
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});