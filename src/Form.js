import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <form className="Form">
      <input
        type="search"
        placeholder="Enter a city"
        minlength="2"
        required
        class="search-form-input"
      />
      <input type="submit" value="Search" className="search-form-button" />
    </form>
  );
}
