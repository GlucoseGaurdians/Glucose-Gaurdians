import React, { useContext, useState, useEffect } from 'react'

const ScreenStateContext = React.createContext()

export function GetScreenState() {
    return useContext(ScreenStateContext)
}

export default function ScreenSize({children}) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {

        function checkMobile() {
            if(window.innerWidth < '690') {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        checkMobile()

        window.addEventListener('resize', () => {
            checkMobile()
        })
    })

    return (
        <ScreenStateContext.Provider value={isMobile}>
            {children}
        </ScreenStateContext.Provider>
    )
}
