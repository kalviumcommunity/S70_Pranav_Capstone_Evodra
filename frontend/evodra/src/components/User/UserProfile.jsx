// src/components/User/UserProfile.jsx
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="text-gray-700 space-y-4">
      <div>
        <span className="font-semibold">Name:</span> {user.name}
      </div>
      <div>
        <span className="font-semibold">Email:</span> {user.email}
      </div>
      <div>
        <span className="font-semibold">Username:</span> {user.username}
      </div>
    </div>
  );
};

export default UserProfile;
