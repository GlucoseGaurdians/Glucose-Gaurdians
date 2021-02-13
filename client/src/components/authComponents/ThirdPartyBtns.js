import React from 'react'
import { uiConfig, auth } from './firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default function ThirdPartyBtns() {
    return (
        <div>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> 
        </div>
    )
}
