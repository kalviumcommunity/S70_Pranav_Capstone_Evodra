import React, { useState } from 'react';
import Button from '../common/Button';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="username" className="block text-lg font-semibold">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-lg font-semibold">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
