import React, { useState } from "react";
const WORDS = [
  "abadas",
  "mar",
  "coliseo",
  "jujuy",
  "karaoke",
  "arroba",
  "cangrejo",
  "manufactura",
  "prepago",
  "caracortada",
  "telefono",
  "celular",
  "caracol",
  "uruguay",
  "argentina",
  "cojear",
  "arremeter",
];
export const WordsForMinutes = () => {
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  const [lettersCount, setLettersCounts] = useState(0);
  const [buffer, setBuffer] = useState("");

  const handelSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    if (word === buffer) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setLettersCounts((prevLetter) => prevLetter + buffer.length);
    }
    setBuffer("");
  };

  return (
    <>
      <h1>{word}</h1>
      <h2>lettersForMinutes:{lettersCount}</h2>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={buffer}
          onChange={(e) => setBuffer(e.target.value)}
        />
        <button type="submit">enviar</button>
      </form>
    </>
  );
};
