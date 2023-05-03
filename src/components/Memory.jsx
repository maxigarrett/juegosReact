import React, { useEffect, useState } from "react";
import style from "./Memory.module.css";
const IMAGES = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-plain.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/vuejs-original-wordmark.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export const Memory = () => {
  const [guessed, setGuessed] = useState([]);
  const [selected, setselected] = useState([]);

  const [win, setWin] = useState(false);

  /* NO FUNCIONA DE ESTA MANERA AVERIGUAR PORQUE creo que es porque slice devulve un array y estoy 
    comparando dos array en ves del string por eso me tira false
   selected[0].split("|").slice(-1) === selected[1].split("|").slice(-1)
   
   forma de solucionarlo es:

   1-selected[0].split("|")[1] === selected[1].split("|")[1]

   2- JSON.stringify(selected[0].split("|").slice(-1)) === JSON.stringify(selected[1].split("|").slice(-1))  
  */

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        console.log("son iguales");
        setGuessed((guessed) => guessed.concat(selected));
      }

      //if I dont guess it, it wont be erased too fast
      setTimeout(() => {
        setselected([]);
      }, 1000);
    }
  }, [selected]);

  // console.log('selected',selected);
  // console.log("guesed", guessed);

  useEffect(() => {
    if (IMAGES.length === guessed.length) {
      alert("you won");
      setTimeout(() => {
        setWin(false);
        setGuessed([]);
      }, 1500);
    }
  }, [guessed]);

  return (
    <div>
      <h2>Memory</h2>
      {/* <Memory /> */}
      <ul className={style.ul}>
        {IMAGES.map((img, index) => {
          const [, url] = img.split("|");
          return (
            <li
              onClick={() =>
                selected.length < 2 &&
                setselected((beforeImg) => beforeImg.concat(img))
              }
              className={style.li}
              key={index}
            >
              {selected.includes(img) || guessed.includes(img) ? (
                <img src={url} />
              ) : (
                <img src="https://icongr.am/fontawesome/search.svg?size=128&color=currentColor" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
