import axios from "axios";

let db
const request = window.indexedDB.open("pendingTransactions", 1)

request.onerror = (e) => console.log("offline transactions unavailable")

request.onsuccess = (e) => {
  console.log("opened db successfuly")
  db = request.result

}

request.onupgradeneeded = (e) => {
  db = request.result

  db.createObjectStore("pendingTransactions", { autoIncrement: true})
}

const API = {
  
  saveTransaction: function(trans) {

    console.log(trans)
    const transaction = db.transaction(["pendingTransactions"], "readwrite")

    transaction.oncomplete = (e) => {
      console.log("transaction save completed")
    }

    const objStore = transaction.objectStore("pendingTransactions")
    
    objStore.add(trans)
  },

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
  saveBloodSugar: function(payload) {
    return axios.post("/api/bloodsugar/", payload);
  }
};

export default API



function checkPendingTransactions() {
  console.log("checking for unsent transactions")

  const transaction = db.transaction(["pendingTransactions"], "readwrite")
  const objStore = transaction.objectStore("pendingTransactions")

  const pendingTransactionsArr = objStore.getAll()

  pendingTransactionsArr.onsuccess = () => {
    console.log(pendingTransactionsArr.result)
    if(pendingTransactionsArr.result) {
      pendingTransactionsArr.result.forEach(trans => {
        console.log(trans)  
        API[trans.apiName](trans.payload)
      })
    }
  }

}

window.addEventListener('online', checkPendingTransactions)


