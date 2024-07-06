import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Submission Successful!</h1>
      <p>Thank you for submitting your details.</p>
      <div className="details">
        <div className="detail-item">
          <label>First Name:</label> {state.firstName}
        </div>
        <div className="detail-item">
          <label>Last Name:</label> {state.lastName}
        </div>
        <div className="detail-item">
          <label>Username:</label> {state.username}
        </div>
        <div className="detail-item">
          <label>Email:</label> {state.email}
        </div>
        <div className="detail-item">
          <label>Phone Number:</label> {state.phoneNo}
        </div>
        <div className="detail-item">
          <label>Country:</label> {state.country}
        </div>
        <div className="detail-item">
          <label>City:</label> {state.city}
        </div>
        <div className="detail-item">
          <label>PAN Number:</label> {state.panNo}
        </div>
        <div className="detail-item">
          <label>Aadhar Number:</label> {state.aadharNo}
        </div>
      </div>
      <button onClick={handleGoBack}>Go Back</button>
      <footer>All details are confidential and secure.</footer>
    </div>
  );
};

export default Success;