export default {

    setTestsArr: function(arr) {
        localStorage.setItem("testsArr", JSON.stringify(arr))
    },

    getTestsArr: function() {
        return JSON.parse(localStorage.getItem("testsArr"))
    },

    
}