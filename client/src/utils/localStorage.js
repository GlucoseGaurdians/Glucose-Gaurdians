export default {

    setTestsArr: function(arr) {
        localStorage.setItem("testsArr", JSON.stringify(arr))
    },

    getTestsArr: function() {
        return JSON.parse(localStorage.getItem("testsArr"))
    },

    setMedsArr: function(arr) {
        localStorage.setItem("medsArr", JSON.stringify(arr))
    },
    
    getMedsArr: function(arr) {
        return JSON.parse(localStorage.getItem("medsArr"))
    }
}