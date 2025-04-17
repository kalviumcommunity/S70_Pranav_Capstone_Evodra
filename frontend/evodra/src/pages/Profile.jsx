// src/pages/Profile.jsx
import React from 'react';
import UserProfile from '../components/User/UserProfile';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Your Profile
        </h1>
        <UserProfile user={user} />
      </div>
    </div>
  );
};

export default Profile;
