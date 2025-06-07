import React from 'react';
import { users } from './users'; 
import './UserProfile.css'; 

const UserProfile = () => {
  // test user
  const user = users[0];

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
      </div>
    </div>
  );
};

export default UserProfile;
