const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/firestations",
  {
    useMongoClient: true
  }
);
  
const firestationSeed = [
  {
    "name": "Station 1",
    "staffMin": 5, 
  },
  {
    "name": "Station 2",
    "staffMin": 5, 
  },
  {
    "name": "Station 3",
    "staffMin": 5, 
  },
  {
    "name": "Station 4",
    "staffMin": 5, 
  },
  {
    "name": "Station 5",
    "staffMin": 5, 
  },
  {
    "name": "Station 6",
    "staffMin": 5, 
  },
  {
    "name": "Station 7",
    "staffMin": 5, 
  },
  {
    "name": "Station 8",
    "staffMin": 5, 
  },
  {
    "name": "Station 9",
    "staffMin": 5, 
  }
];

db.Firestation
  .remove({})
  .then(() => db.Firestation.collection.insertMany(firestationSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

