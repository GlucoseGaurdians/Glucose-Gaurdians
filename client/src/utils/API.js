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
    return axios.post("/api/meds/", {
      id: id,
      med: med
    })
  },

  takeMedDose: function(id, medName, dose) {
    return axios.post("/api/meds/dose", {
      id: id,
      medName: medName,
      dose: dose
    })
  },

  removeMed: function(id, medName) {
    return axios.delete("api/med/", {
      id: id,
      med: medName
    })
  },
  
  // Saves a blood sugar to the database
  saveBloodSugar: function(bloodSugarData, id) {
    return axios.post("/api/bloodsugar/", {test: bloodSugarData, id: id});
  }
};