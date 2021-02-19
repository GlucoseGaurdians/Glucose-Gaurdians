import React from 'react'
import { uiConfig, auth } from './firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default function ThirdPartyBtns() {
    return (
        <div>
            <p>Or sign-in through:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> 
        </div>
    )
}
