import React, { Component } from "react";
import loading from "./Fidget-spinner.gif";
import load from "./Ajax-loader.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load} alt="Loading" />
      </div>
    );
  }
}
