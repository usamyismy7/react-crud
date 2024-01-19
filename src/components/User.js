import React, { useState } from "react";

const User = ({ id, email, name, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id, { name: updatedName, email: updatedEmail });
    setIsEditing(false);
  };

  return (
    <div className="flex justify-around my-4 border-2 mx-14 border-indigo-200 p-2">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="border-2 border-indigo-200 p-1 rounded"
          />
          <input
            type="text"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            className="border-2 border-indigo-200 p-1 rounded"
          />
        </div>
      ) : (
        <>
          <span className="text-indigo-500 font-bold">{name}</span>
          <span className="text-indigo-500 font-bold">{email}</span>
        </>
      )}
      <span>
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          delete
        </button>
      </span>
    </div>
  );
};

export default User;
