import React, { useState } from 'react';
import UserForm from '../components/User/UserForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (data) => {
    if (data.username === 'user' && data.password === 'password') {
      navigate('/profile');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Login to Your Account</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <UserForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
