import React from 'react';
import User from './User';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ emails: state.emails });

const UserList = ({ emails }) => {
  return (
    <div className="mt-4">
      {emails.map(email => (
        <User key={email.id} id={email.id} email={email.email} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(UserList);
