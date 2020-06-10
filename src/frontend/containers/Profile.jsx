/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import ShowProfile from '../components/ShowProfile';
import EditProfile from '../components/EditProfile';

const Profile = (props) => {
  const { edit } = props.match.params;

  return (
    <div className='Profile'>
      {edit === 'edit' ?
        (<EditProfile />) :
        (<ShowProfile />)}
    </div>
  );
};

export default connect(null, null)(Profile);
