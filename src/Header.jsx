import React from "react";
import Input from "./Input";

export default function Header(props) {
  return (
    <div>
      <h1>IdeaBox</h1>
      <Input makeCard={props.makeCard} />
    </div>
  );
}
