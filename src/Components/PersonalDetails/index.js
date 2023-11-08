import React from 'react';
import './index.css';

const PersonalDetails = () => {
  return (
    <div className="personal-info-con">
      <h1 className="card-head">Personal info</h1>
      <p className="card-des">
        Please provide your name, email address, and phone number
      </p>
      <form className="form">
        <div className="form-item">
          <label
            htmlFor="name"
            className="label">
            Name
          </label>
          <input
            id="name"
            type="input"
            className="input_type"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="form-item">
          <label
            htmlFor="name"
            className="label">
            Email Address
          </label>
          <input
            id="name"
            type="input"
            className="input_type"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="form-item">
          <label
            htmlFor="name"
            className="label">
            Phone Number
          </label>
          <input
            id="name"
            type="input"
            className="input_type"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
