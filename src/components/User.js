import React, { useState } from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { updateUser, deleteUser } from '../redux/actions';

const User = ({ id, email, updateUser, deleteUser }) => {
  const [mail, setUser] = useState('');

  const handleChange = event => setUser(event.target.value);

  const updateItem = () => {
    updateUser({ id, email: mail });
    setUser('');
  };
  const deleteItem = () => deleteUser({ id });
  return (
    <div class="text-lg px-3 py-3">
      <input
        className="inline-block border border-gray-300 mr-6 rounded px-2 py-1"
        onChange={handleChange}
        placeholder={email}
        value={mail}
      />
      <Button click={updateItem} size="sm" textColor="white" bgColor="yellow-500">
        Update
      </Button>
      <Button click={deleteItem} size="sm" textColor="white" bgColor="red-500">
        Delete
      </Button>
    </div>
  );
};

export default connect(null, { updateUser, deleteUser })(User);
