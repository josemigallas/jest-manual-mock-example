import React, { Component } from "react";
import { functionThatUsesT } from "./utils";

export class Comp extends Component {
  render() {
    return <div>{functionThatUsesT("Hey!")}</div>;
  }
}

export default Comp;
