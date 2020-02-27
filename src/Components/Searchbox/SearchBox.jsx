import React, { Component } from "react";

export class SearchBox extends Component {
  state = {
    text: "",
    error: false
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text.trim()) {
      this.props.hadnelSubmit(this.state.text);
      this.setState({ error: false, text: "" });
    } else {
      this.setState({ error: true });
      this.props.handelClear();
      setTimeout(() => {
        this.setState({ error: false });
      }, 2000);
    }
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { handelClear } = this.props;
    return (
      <div className="container">
        <div className="searchbox">
          <form onSubmit={this.onSubmit} className="searchbox__form">
            <input
              className="searchbox__input"
              type="text"
              name="text"
              onChange={this.onChange}
              value={this.state.text}
            />
            <button className="searchbox__btn ">Search</button>
          </form>
          <button onClick={handelClear} className="searchbox__btn clear ">
            Clear
          </button>
          {this.state.error && (
            <p className="error">please enter valid value to get results</p>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBox;
