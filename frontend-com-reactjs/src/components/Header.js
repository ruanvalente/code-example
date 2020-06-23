import React from "react";

import gato from "../assets/gato.gif";

export default function Header({ title, children }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        {children}
      </header>
      <img src={gato} alt="Gatinho fofinho" />
    </>
  );
}
