import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";

import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => console.log(error));
  }, [projects]);

  function handleAddProject() {
    api
      .post("projects", {
        title: `Novo projeto ${Date.now()}`,
        owner: "Lorena Torres",
      })
      .then((response) => {
        setProjects([...projects, response.data]);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}
