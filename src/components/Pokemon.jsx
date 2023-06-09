import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Pokemon.module.css";
const POKEMOS_NAMES = [
  "bulvasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizar",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
];
const INDEX_ALEATORY_POKEMOM = Math.round(Math.random() * POKEMOS_NAMES.length);

const INITIAL_FORM = {
  search: "",
};

console.log(INDEX_ALEATORY_POKEMOM);
console.log(POKEMOS_NAMES[INDEX_ALEATORY_POKEMOM]);
export const Pokemon = () => {
  const [pokemonGuess, setpokemonGuess] = useState(INITIAL_FORM);
  const [indexPokemon, setIndexPokemon] = useState(INDEX_ALEATORY_POKEMOM);
  const [startGame, setStartGame] = useState(false);
  const [guess, setGuess] = useState(false);

  const playGame = () => {
    setStartGame(true);
  };
  const hadelSearchPokemons = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setpokemonGuess({ ...pokemonGuess, [name]: value });

    // console.log(pokemonGuess.search);
    if (pokemonGuess.search === POKEMOS_NAMES[indexPokemon]) {
      console.log("adivino");
      setGuess(true);
      alert("ADIVINO😁");

      setTimeout(() => {
        setIndexPokemon(Math.round(Math.random() * POKEMOS_NAMES.length));

        setpokemonGuess(INITIAL_FORM);

        setStartGame(false);
        setGuess(false);
      }, 1000);
    }
  };

  return (
    <>
      <section>
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
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            indexPokemon + 1
          }.png`}
          alt="pokemons"
          style={{
            width: "250px",
            filter: !guess ? "brightness(0) invert(2)" : "",
          }}
        />
        {!startGame ? (
          <div className={style.containerButtonPlay}>
            <button className={style.buttonPlay} onClick={playGame}>
              jugar
            </button>
          </div>
        ) : (
          <form onSubmit={hadelSearchPokemons}>
            <input
              className={style.inputPokemon}
              type="text"
              name="search"
              onChange={hadelSearchPokemons}
              value={pokemonGuess.search}
            />
            <button className={style.buttonPlay} type="submit">
              Adivinar
            </button>
          </form>
        )}
      </section>
    </>
  );
};
