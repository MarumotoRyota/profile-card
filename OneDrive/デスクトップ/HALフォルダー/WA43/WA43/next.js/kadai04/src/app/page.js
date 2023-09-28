import React from 'react';
import ProfileCard from '../components/ProfileCard';
import profileData from '../data/profile.json'; // プロフィール情報を含むJSONファイルのパスを指定

const Profile = () => {
  const profileInfo = {
    name: 'John Doe',
    title: 'Software Engineer',
    imageUrl: 'public/images/1.jpg', // 画像のパスを追加してください
  };

  return (
    <div>
      <h1>My Profile</h1>
      <ProfileCard profile={profileData} />
    </div>
  );
};

export default Profile;