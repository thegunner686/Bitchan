import React from "react";

import * as firebase from "firebase";

import * as ClientJS from "clientjs";

export default class TextForm extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var that = this;
    document.addEventListener("keydown", (event) => {
      if(event.keyCode == 13) {
        that.createPost();
      }
    });
  }


  createPost() {
    var input = document.getElementById("input-content");
    var post = {
      username: localStorage.getItem("username"),
      content: input.value,
    };

    firebase.database().ref("posts").push().set({
      username: post.username,
      content: post.content,
    });

    input.value = "";
  }

  render() {
    return (
      <div className="TextFormContainer">
        <input type="text" id="input-content"/>
      </div>
    );
  }
}
