import React, {useContext, useState } from 'react'

const DataContext = React.createContext()

export function useData() {
    return useContext(DataContext)
}

export default function DataContext({children}) {

    const [bloodSugars, setBloodSugars] = useState()

    function AddNewBloodSugar(bs) {
        
    }


    const values = {
        bloodSugars,

    }
    return (
        
            <DataContext.Provider value={values}>
                {children}
            </DataContext.Provider>
    )
}
