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
 },
 updateFirefighter: function(fireFighterId, firefighterData) {
 	return axios.put("/api/firefighters/" + fireFighterId, firefighterData);
 }, 
 getFirestations: function() {
   return axios.get("/api/firestations");
 },
 getFirestation: function(id) {
   return axios.get("/api/firestations/" + id);
 },
 deleteFirestation: function(id) {
   return axios.delete("/api/firestations/" + id);
 },
 saveFirestation: function(firestationData) {
   return axios.post("/api/firestations", firestationData);
 },
 updateFirestation: function(id, staffName) {
 	return axios.put("/api/firestations" + id); 
 }
};