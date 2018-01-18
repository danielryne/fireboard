const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const firefighterSeed = [
  {
    "name": "Red One",
    "status": "Active",
    "station": "1"
  },
  {
    "name": "Red Two",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Red Three",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Red Four",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Red Five",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Red Six",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Red Seven",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Red Eight",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Red Nine",
    "status": "Active",
    "station": "1"
  },
    {    
    "name": "Red Ten",
    "status": "Active",
    "station": "1"
  },
    {    
    "name": "Blue One",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Blue Two",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Blue Three",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Blue Four",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Blue Five",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Blue Six",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Blue Seven",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Blue Eight",
    "status": "Active",
    "station": "1"
  },
  {    
    "name": "Blue Nine",
    "status": "Active",
    "station": "1"
  },
    {    
    "name": "Blue Ten",
    "status": "Active",
    "station": "1"
  }
];

db.Firefighter
  .remove({})
  .then(() => db.Firefighter.collection.insertMany(firefighterSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
