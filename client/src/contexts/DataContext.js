import React, {useContext, useState, useEffect } from 'react'

const DataInfoContext = React.createContext()

export function UseData() {
    return useContext(DataInfoContext)
}

export default function DataContext({children}) {
    // set any data state you'd like and export it
    // const [testsArr, setTestsArr] = useState("was defaulted")
    // const [medsArr, setMedsArr] = useState([])
    // const [fname, setFname] = useState('')
    // const [lname, setLname] = useState('')




    // const values = {
    //     testsArr,
    //     setTestsArr,
    //     medsArr,
    //     setMedsArr,
    //     fname,
    //     setFname,
    //     lname,
    //     setLname

    // }



    return (
        <DataInfoContext.Provider value={values}>
            {children}
        </DataInfoContext.Provider>
    )
}

