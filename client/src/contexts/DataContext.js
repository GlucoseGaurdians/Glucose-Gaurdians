import React, {useContext, useState } from 'react'

const DataInfoContext = React.createContext()

export function useData() {
    return useContext(DataInfoContext)
}

export default function DataContext({children}) {

    const [bloodSugars, setBloodSugars] = useState({
        bloodSugar: [1,2]
    })

    function AddNewBloodSugar(bs) {
        
    }


    const values = {
        bloodSugars,

    }

    console.log('about to return from datacontext : ', values)

    return (
        
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}
