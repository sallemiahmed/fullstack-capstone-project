import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="display-3 fw-bold text-primary mb-4">GiftLink</h1>
                <p className="lead mb-4">
                    Connect with others to give and receive household items for free.
                    Recycle, reuse, and reduce waste in your community.
                </p>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate('/app')}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
