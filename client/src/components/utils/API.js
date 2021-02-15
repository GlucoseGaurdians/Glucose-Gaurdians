import axios from "axios";

export default {
  // Gets all blood sugars
  getBloodSugars: function() {
    return axios.get("/api/bloodsugar");
  },
  // Gets the blood sugar with the given id
  getBloodSugar: function(id) {
    return axios.get("/api/blood_sugar/" + id);
  },
  
  // Saves a blood sugar to the database
  saveBloodSugar: function(bloodSugarData) {
    return axios.post("/api/bloodsugar/", bloodSugarData);
  }
};