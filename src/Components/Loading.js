import React from "react";
import loading from "./Fidget-spinner.gif";
import load from "./Ajax-loader.gif";

export default function Loading() {
  return (
    <div className="text-center">
      <img src={load} alt="Loading" />
    </div>
  );
}
