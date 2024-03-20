import React, { useState } from "react";

export default function Header() {
  let [city, setCity] = React.useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <header>
        <form class="search-form" id="search-form">
          <input
            type="text"
            placeholder="Enter a City.."
            onChange={updateCity}
            required
            id="search-form-input"
            class="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
    </div>
  );
}
