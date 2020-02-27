import React from "react";

const User = ({ avatar_url, login, html_url }) => {
  return (
    <div className="user">
      <figure className="user__figure">
        <img src={avatar_url} alt="" className="user__img" />
      </figure>
      <h1 className="user__login">{login}</h1>
      <a className="user__link" href={html_url} target="_blank">
        Visit profile
      </a>
    </div>
  );
};

export default User;
