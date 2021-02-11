import { UseData } from '../contexts/DataContext'

// const data = UseData()

// adds a new blood sugar
// ? we are sending a test object 
export function addNewBloodSugar(test) {

    fetch('/api/addtest',{
        method: "POST",
        body: test
    }).then((res) => {
        console.log(res)
    })

}

export function addNewMedication(med) {

    fetch('/api/addmed', {
        method: "POST",
        body: med
    }).then((res)=> {
        console.log(res)
    })
}


// thi will get alll the user's blood sugars in an object

export function getBloodSugar() {
    fetch('/api/gettests')
    .then((res) => {
        console.log(res)
        UseData().setBloodSugars(res)
    })
}

