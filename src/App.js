import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import SearchBox from "./Components/Searchbox/SearchBox";
import Users from "./Components/Users/Users";

export default class App extends React.Component {
  state = {
    users: [],
    loading: false,
    searchUser: ""
  };

  handelClear = () => {
    this.setState({ users: [] });
  };

  hadnelSubmit = async value => {
    this.setState({ loading: true, searchUser: "" });
    const response = await fetch(
      `https://api.github.com/search/users?q=${value}`
    );
    const data = await response.json();
    this.setState({ loading: false, users: data.items });
  };

  render() {
    return (
      <div>
        <NavBar />
        <SearchBox
          hadnelSubmit={this.hadnelSubmit}
          handelClear={this.handelClear}
        />
        <Users users={this.state.users} isLoading={this.state.loading} />
      </div>
    );
  }
}

//https://api.github.com/users
