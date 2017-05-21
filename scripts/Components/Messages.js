import React from "react";

import Post from "./Post";

import * as firebase from "firebase";

export default class Messages extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    var that = this;
    firebase.database().ref("posts").on("child_added", (data) => {
      var container = document.getElementsByClassName("MessagesContainer")[0];
      container.scrollTop = container.scrollHeight;
      var p = that.state.posts;
      console.log(data.val());
      p.push(data.val());
      that.setState({
        posts: p,
      });
    }, (error) => {
      console.log(error.code);
    });
  }

  render() {
    return (
      <div className="MessagesContainer">
        {
          this.state.posts.map((p) => {
            return (<Post key={Math.floor(Math.random() * Math.PI * 10000000 / Math.random() * 10)} data={p} />);
          })
        }
      </div>
    );
  }
}
