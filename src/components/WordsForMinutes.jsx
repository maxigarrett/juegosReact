import React, { useEffect, useState } from "react";
import style from "./WordsForMinutes.module.css";
import { Link } from "react-router-dom";
const WORDS = [
  "electroencefalografo",
  "arteriosclerosis",
  "idiosincrasia",
  "transustanciacion",
  "clavicembalo",
  "paralelepipedo",
  "delicuescencia",
  "desoxirribonucleico",
  "abadas",
  "transustanciacion",
  "coliseo",
  "ovoviviparo",
  "karaoke",
  "arroba",
  "cangrejo",
  "manufactura",
  "prepago",
  "Hipopotomonstrosesquipedaliofobia",
  "telefono",
  "celular",
  "caracol",
  "uruguay",
  "argentina",
  "cojear",
];

const initialBuffer = {
  buffer: "",
};
export const WordsForMinutes = () => {
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  const [lettersCount, setLettersCounts] = useState(0);
  const [buffer, setBuffer] = useState(initialBuffer);
  const [time, setTime] = useState(0);
  const [guess, setGuess] = useState("");

  //PARA USARLO CON EL INPUT DE ENVIAR
  const handelSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setBuffer({ ...buffer, [name]: value });
    if (word === value) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setLettersCounts((prevLetter) => prevLetter + value);
    }
    setBuffer("");
  };

  //SE EJECUTA MIENTRAS TECLEAMOS
  const handelSerch = (event) => {
    const { name, value } = event.target;
    setBuffer({ ...buffer, [name]: value });
    console.log(name, value);
    if (word === value) {
      setGuess("✔");
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setLettersCounts((prevLetter) => prevLetter + value.length);
      setBuffer(initialBuffer);
    } else {
      setGuess("✖");
    }
  };

  //we start game for just 60 seconds
  const startGame = () => {
    setTime(60);
    setLettersCounts(0);
  };

  //we start to decrement the 60 sec to 0 sec fot finished the game
  useEffect(() => {
    if (time === 0) return;

    setTimeout(() => {
      setTime((preValu) => preValu - 1);
    }, 1000);
  }, [time]);

  return (
    <main>
      <div className={style.linksRoutes}>
        <Link className={style.link} to="juegosReact/">
          Memory
        </Link>
        <Link className={style.link} to="juegosReact/pokemon">
          Pokemon
        </Link>
        <Link className={style.link} to="juegosReact/wordsforminutes">
          Wpm
        </Link>
      </div>

      <h1>{word}</h1>
      <span>Time: {time}</span>
      <h2>letters quantity: {lettersCount}</h2>
      {time === 0 ? (
        <button className={style.buttonStart} onClick={startGame}>
          start
        </button>
      ) : (
        <form onSubmit={handelSubmit}>
          <input
            className={style.input}
            type="text"
            name="buffer"
            onChange={handelSerch}
            value={buffer.buffer}
            // onChange={(e) => setBuffer(e.target.value)}
          />
          <button className={style.buttonStart} type="submit">
            comprobar
          </button>
          {guess}
        </form>
      )}
    </main>
  );
};
