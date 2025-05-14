import React from 'react';

export default function CreateAvatarModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">Create New Avatar</h2>
        <form className="flex flex-col space-y-3">
          <input className="border p-2 rounded" placeholder="First Name" />
          <input className="border p-2 rounded" placeholder="Last Name" />
          <input className="border p-2 rounded" placeholder="Email" />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Save
          </button>
          <button type="button" onClick={onClose} className="text-red-500 mt-2 hover:underline">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
