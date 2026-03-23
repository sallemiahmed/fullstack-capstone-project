import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const [gifts, setGifts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGifts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/gifts`);
                const data = await response.json();
                setGifts(data);
            } catch (e) {
                console.error('Error fetching gifts:', e);
            }
        };
        fetchGifts();
    }, []);

    return (
        <div className="container mt-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-primary" href="/">GiftLink</a>
                    <div>
                        <button className="btn btn-outline-primary me-2" onClick={() => navigate('/app/login')}>Login</button>
                        <button className="btn btn-primary" onClick={() => navigate('/app/register')}>Register</button>
                    </div>
                </div>
            </nav>
            <h2>Available Gifts</h2>
            <div className="row">
                {gifts.map((gift, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{gift.name}</h5>
                                <p className="card-text">{gift.description}</p>
                                <p className="text-muted">Category: {gift.category}</p>
                                <p className="text-muted">Condition: {gift.condition}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;
