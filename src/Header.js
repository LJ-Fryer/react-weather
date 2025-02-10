import React from "react";

import "./Header.css";
import Form from "./Form";
import Time from "./Time";

export default function Header() {
  return (
    <div className="Header">
      <Time />
      <Form />
    </div>
  );
}
