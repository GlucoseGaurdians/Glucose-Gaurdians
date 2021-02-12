import React, {useContext, useState, useEffect } from 'react'
// import API from '../utils/API'

const DataInfoContext = React.createContext()

export function UseData() {
    return useContext(DataInfoContext)
}

export default function DataContext({children}) {
    const [bloodSugars, setBloodSugars] = useState([])


    const values = {
        bloodSugars,
        setBloodSugars

    }

    return (
        <DataInfoContext.Provider value={values}>
            {children}
        </DataInfoContext.Provider>
    )
}

