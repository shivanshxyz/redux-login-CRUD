import React from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  return (
    <div className="flex flex-col items-center mt-6">
      <AddUser />
      <UserList />
    </div>
  );
}
export default App;
