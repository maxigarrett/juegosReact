import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Memory } from "./components/Memory";
import { Pokemon } from "./components/Pokemon";
import { WordsForMinutes } from "./components/WordsForMinutes";

function App() {
  return (
    <Routes>
      <Route element={<Memory />} path="/juegosReact" />
      <Route
        element={<WordsForMinutes />}
        path="/juegosReact/wordsforminutes"
      />
      <Route element={<Pokemon />} path="/juegosReact/pokemon" />
    </Routes>
  );
}

export default App;
