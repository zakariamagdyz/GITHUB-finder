import React from "react";
import User from "../User/User";
import Spinner from "../../assets/spinner.gif";

const Users = ({ users, isLoading }) => {
  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={Spinner} alt="" />;
      </div>
    );
  } else {
    return (
      <div className="users container">
        {users.map(({ id, ...other }) => (
          <User key={id} {...other} />
        ))}
      </div>
    );
  }
};

export default Users;
