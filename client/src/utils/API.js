import axios from "axios";

export default {
  // Gets all books
  getStaff: function() {
    return axios.get("/api/staff");
  },
  // Gets the book with the given id
  
//!! Duplicate call getStaff!!

  //getStaff: function(id) {
    //return axios.get("/api/staff/" + id);
  //},

  // Deletes the book with the given id
  deleteStaff: function(id) {
    return axios.delete("/api/staff/" + id);
  },
  // Saves a book to the database
  saveStaff: function(bookData) {
    return axios.post("/api/staff", bookData);
  }
};

// !! obvious !! //