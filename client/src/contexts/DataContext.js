import React, {useContext, useState, useEffect } from 'react'

const DataInfoContext = React.createContext()

export function UseData() {
    return useContext(DataInfoContext)
}

export default function DataContext({children}) {
    const [bloodSugars, setBloodSugars] = useState(false)



    const values = {
        bloodSugars,

    }

    return (
        <DataInfoContext.Provider value={bloodSugars}>
            {children}
        </DataInfoContext.Provider>
    )
}
