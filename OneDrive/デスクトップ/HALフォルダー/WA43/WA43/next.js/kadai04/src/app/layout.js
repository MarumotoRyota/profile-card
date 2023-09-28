import './globals.css'
import React from 'react'

const ProfileCard = ({ name, title, imageUrl }) => {
  return (
    <div className="profile-card">
     <img src={profile.imageUrl} alt={`${profile.name}'s profile`} className="profile-image" />
      <div className="profile-details">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
