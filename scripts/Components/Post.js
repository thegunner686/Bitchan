import React from "react";

export default class Post extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="PostContainer">
        <div className="PostUsername">{this.props.data.username}</div>
        <div className="PostContent">{this.props.data.content}</div>
      </div>
    );
  }
}
