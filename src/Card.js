import React from "react";


const GitCard = (props) => {

  const {username, userBio, userAvatar, userLocation, repositories, followers, following} = props.userData;

  return (
    <div className="card">
      <div className="card-top">
        <div className="git-user-metadata">
          <img
            id="git-avatar"
            src={userAvatar}
          alt="User-Avatar"
          />
          <h1 id="git-username"> {username}</h1>
          <p id="git-user-bio">{userBio}</p>
          <h3 id="git-user-country">{userLocation}</h3>
        </div>

      <div className="user-profile-data">
    <h1>Repository <span className="repo-count numbers">{repositories}</span></h1>
    <h1>Followers <span className="repo-count numbers">{followers}</span></h1>
    <h1>Following <span className="repo-count numbers">{following}</span></h1>

        </div>
  
  <p id="footer">GitCard Using ReactJs Designed by <a href="https://find-fahad.web.app/" target="_blank"> Fahad Aleem </a></p>

      </div>
    </div>
  );
};

export default GitCard;
