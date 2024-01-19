import React from "react";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3 className="text-center font-medium">Add User</h3>
        <input
          placeholder="Name"
          name="name"
          className="m-2 p-2 border-2 rounded-lg border-indigo-300"
        />
        <input
          placeholder="Email"
          name="email"
          className="m-2 p-2 border-2 rounded-lg border-indigo-300"
        />
        <button
          onSubmit={handleOnSubmit}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
