import axios from "axios";

export default {

  userLookUp: function(id) {
    return axios.get("/api/user/"+id)
  },

  newUserCreate: function(id) {
    return axios.post("/api/user", {
      _id: id,
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

  removeMed: function(id, medicationName) {
    return axios.delete("api/meds/", {
      data: {
        id: id,
        med: medicationName

      }
    })
  },
  
  // Saves a blood sugar to the database
  saveBloodSugar: function(bloodSugarData, id) {
    return axios.post("/api/bloodsugar/", {test: bloodSugarData, id: id});
  }
};