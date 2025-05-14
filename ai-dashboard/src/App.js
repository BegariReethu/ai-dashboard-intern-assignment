// src/App.js
import React, { useEffect, useState } from 'react';
import AvatarCard from './components/AvatarCard';
import CreateAvatarModal from './components/CreateAvatarModal';

export default function App() {
  const [avatars, setAvatars] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(data => setAvatars(data.data))
      .catch(err => console.error('Error fetching avatars:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700">Welcome to the AI Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Hello, User 👋</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.id} avatar={avatar} />
        ))}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
      >
        + Create New Avatar
      </button>

      {showModal && <CreateAvatarModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

