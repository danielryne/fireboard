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

  
const firestationSeed = [
  {
    "name": "Station 1",
    "staffMin": 5, 
    "staffCount": 1,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
  },
  {
    "name": "Station 2",
    "staffMin": 5, 
    "staffCount": 2,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
  },
  {
    "name": "Station 3",
    "staffMin": 5, 
    "staffCount": 3,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
  },
  {
    "name": "Station 4",
    "staffMin": 5, 
    "staffCount": 4,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
  },
  {
    "name": "Station 5",
    "staffMin": 5, 
    "staffCount": 5,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
  },
  {
    "name": "Station 6",
    "staffMin": 5, 
    "staffCount": 6,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
  },
  {
    "name": "Station 7",
    "staffMin": 5, 
    "staffCount": 7,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
  },
  {
    "name": "Station 8",
    "staffMin": 5, 
    "staffCount": 8,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
  },
  {
    "name": "Station 9",
    "staffMin": 5, 
    "staffCount": 9,
    "currentStaff": ["Armadno", "Regina", "Rosie", "Ricardo", "Robert"]
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

