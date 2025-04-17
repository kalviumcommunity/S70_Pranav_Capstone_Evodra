// src/pages/Register.jsx
import React from 'react';
import UserForm from '../components/User/UserForm';

const Register = () => {
  const handleRegister = (data) => {
    console.log('User Registered:', data);
    // Add logic for user registration (e.g., API call)
  };

  return (
    <div className="register-page">
      <h2>Create a New Account</h2>
      <UserForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
