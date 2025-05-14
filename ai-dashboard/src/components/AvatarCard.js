import React from 'react';

export default function AvatarCard({ avatar }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-center transition hover:shadow-lg">
      <img src={avatar.avatar} alt={avatar.first_name} className="w-24 h-24 rounded-full mx-auto mb-2" />
      <h2 className="text-xl font-semibold">{avatar.first_name} {avatar.last_name}</h2>
      <p className="text-gray-500">{avatar.email}</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition">
        Edit
      </button>
    </div>
  );
}
