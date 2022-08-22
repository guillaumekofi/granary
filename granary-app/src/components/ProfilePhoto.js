import './ProfilePhoto.css';

const ProfilePhoto = ({ imgSrc }) => {
  return (
    <div>
      <div className="profile-photo">
        <img src={imgSrc} alt="user profile"/>
      </div>
    </div>
)};

export default ProfilePhoto;
