import React, {useContext, useState, useEffect } from 'react'

const DataInfoContext = React.createContext()

export function UseData() {
    return useContext(DataInfoContext)
}

export default function DataContext({children}) {
    // set any data state you'd like and export it
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

