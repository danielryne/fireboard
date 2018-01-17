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
    name: "Johnny Danger",
    working: "Yes",
    notes:
      "Never walks away from danger",
    date: new Date(Date.now())
  },
  {
    name: "Lord of the Flies",
    working: "Yes",
    notes:
      "The name says it all",
    date: new Date(Date.now())
  },
  {
    name: "The Catcher in the Rye",
    working: "Yes",
    notes:
      "Better not take his Rye",
    date: new Date(Date.now())
  },
  {
    name: "The Punch Escrow",
    working: "No",
    notes:
      "Punched so hard he lost his arm, out for 2 weeks",
    date: new Date(Date.now())
  },
  {
    name: "Harry Potter",
    working: "No",
    notes:
      "Out looking for the Sorcerer's Stone",
    date: new Date(Date.now())
  },
  {
    name: "Coraline",
    working: "Yes",
    notes:
      "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life, but she can handle this and work a solid 8 too",
    date: new Date(Date.now())
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
