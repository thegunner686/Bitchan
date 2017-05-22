import React from "react";

import TextForm from "./TextForm";
import Messages from "./Messages";
import LobbyManager from "./LobbyManager";

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="Title">BitChan <LobbyManager/></div>
        <Messages/>
        <TextForm/>
      </div>
    );
  }
}
