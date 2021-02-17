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

  addNewMed: function(id, med) {
    return axios.post("/api/meds/new", {
      id: id,
      med: med
    })
  },

  takeMedDose: function(id, dose) {
    return axios.post("/api/meds/dose", {
      id: id,
      dose: dose
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