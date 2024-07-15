"use client"
import React from 'react';
import ReactDOM from 'react-dom';
import AddHackathon from '@/component/organisateur/AddHackathon';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AddHackathon />
    </div>
  );
};

export default Page;
