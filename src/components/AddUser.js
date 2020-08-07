import React, { useState } from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';

const AddUser = ({ addUser }) => {
  const [email, setUser] = useState('');

  const handleChange = event => setUser(event.target.value);

  const add = () => {
    addUser({ email: email });
    setUser('');
  };

  return (
    <div>
      <input
        className="border border-gray-300 rounded px-6 py-1 mr-2"
        type="text"
        placeholder="Enter your email."
        onChange={handleChange}
        value={email}
      />
      <Button click={add} size="sm" textColor="white" bgColor="blue-500">
        Add
      </Button>
    </div>
  );
};

export default connect(null, { addUser })(AddUser);
