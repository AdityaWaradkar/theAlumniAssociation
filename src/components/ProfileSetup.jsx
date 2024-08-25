// src/components/WelcomeScreen.js
import React from 'react';

const ProfileSetup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100 font-sans">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800">Welcome to the Alumni Association!</h1>
        <p className="mt-4 text-lg">You have successfully signed up.</p>
      </div>
    </div>
  );
};

export default ProfileSetup;
