import { UseData } from '../contexts/DataContext'

// const data = UseData()

// adds a new blood sugar
// ? we are sending a test object 
export function addNewBloodSugar(test) {

    fetch('http://localhost:3001/api/bloodsugar',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(test)
    }).then((res)=> res.json()).then((theData) => {
        const { bloodSugars, setBloodSugars } = UseData()
        setBloodSugars([...bloodSugars, theData])
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

export function getBloodSugar(id) {
    fetch("http://localhost:3001/api/bloodsugar/"+id)
    .then(res => res.json())
    .then((data) => {
        const { setBloodSugars } = UseData()
        setBloodSugars(data)
    })
    .catch(err => console.log(err))
}

