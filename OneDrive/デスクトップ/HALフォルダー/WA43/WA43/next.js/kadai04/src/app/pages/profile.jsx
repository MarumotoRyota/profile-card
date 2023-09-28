// pages/profile.js
import React from 'react';
import ProfileCard from '../../components/ProfileCard';

const Profile = () => {
  const profileInfo = {
    name: 'John Doe',
    title: 'Software Engineer',
    imageUrl: 'public/images/1.jpg', // 画像のパスを追加してください
  };

  return (
    <div>
      <h1>My Profile</h1>
      <ProfileCard {...profileInfo} />
    </div>
  );
};

export default Profile;
