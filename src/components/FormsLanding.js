import React from 'react';
import { Link } from 'react-router-dom';
import './FormsLanding.css';

const FormsLanding = () => {
  return (
    <div className="forms-landing">
      <div className="forms-container">
        <div className="forms-header">
          <h1>HACKACCINO 4.0</h1>
          <p>Select Your Category</p>
        </div>

        <div className="forms-grid">
          <Link to="/sponsor" className="form-card sponsor-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h2>Sponsors</h2>
            <p>Become a sponsor and support innovation</p>
          </Link>

          <Link to="/community-partner" className="form-card community-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h2>Community Partner</h2>
            <p>Partner with us to reach 1500+ students</p>
          </Link>

          <Link to="/judge" className="form-card judge-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <h2>Judges</h2>
            <p>Join as a judge and evaluate innovation</p>
          </Link>
        </div>

        <div className="forms-footer">
          <p>Computer Society of India, Bennett University</p>
        </div>
      </div>
    </div>
  );
};

export default FormsLanding;
