import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [userCred, setUserCred] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem('auth-token') ? 'Bearer ' + sessionStorage.getItem('auth-token') : '',
                },
                body: JSON.stringify({
                    email,
                    password: userCred,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                sessionStorage.setItem('auth-token', data.authtoken);
                sessionStorage.setItem('name', data.userName);
                sessionStorage.setItem('email', data.userEmail);
                navigate('/app');
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cred" className="form-label">Credentials</label>
                    <input type="password" className="form-control" id="cred" value={userCred} onChange={(e) => setUserCred(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
