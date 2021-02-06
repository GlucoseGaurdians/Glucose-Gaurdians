import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {
    const history = useHistory()
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">Error</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w'100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
