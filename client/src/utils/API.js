import axios from "axios";

export default {
  // Gets all firefighters
  getFirefighters: function() {
    return axios.get("/api/firefighters");
  },
  // Gets the firefighter with the given id
  getFirefighter: function(id) {
    return axios.get("/api/firefighters/" + id);
  },
  // Deletes the firefighter with the given id
  deleteFirefighter: function(id) {
    return axios.delete("/api/firefighters/" + id);
  },
  // Saves a firefighter to the database
  saveFirefighter: function(firefighterData) {
    return axios.post("/api/firefighters", firefighterData);
  }
};
