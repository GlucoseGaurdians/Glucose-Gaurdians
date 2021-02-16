import axios from "axios";

export default {

  userLookUp: function(id) {
    return axios.get("/api/user/"+id)
  },

  newUserCreate: function(id, email) {
    return axios.post("/api/user", {
      _id: id,
      email: email
    })
  },

  // Gets all blood sugars
  getBloodSugars: function() {
    return axios.get("/api/bloodsugar");
  },
  // Gets the blood sugar with the given id
  getBloodSugar: function(id) {
    return axios.get("/api/blood_sugar/" + id);
  },
  
  // Saves a blood sugar to the database
  saveBloodSugar: function(bloodSugarData, id) {
    return axios.post("/api/bloodsugar/", {test: bloodSugarData, id: id});
  }
};