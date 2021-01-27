import React, { Component } from "react";

class Control extends Component {
  render() {
    console.log("Control render");
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          >
            Create
          </a>
        </li>
        <li>
          <a
            href="/edit"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("edit");
            }.bind(this)}
          >
            Edit
          </a>
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("delete");
            }.bind(this)}
          ></input>
        </li>
      </ul>
    );
  }
}
export default Control;
