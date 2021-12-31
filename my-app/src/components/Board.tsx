import { MutableRefObject, useEffect, useRef } from "react";
import styles from "./board.module.css";

export default function Board() {
  const boardRef = useRef() as MutableRefObject<HTMLInputElement>
  
  useEffect(() => {
    letterGenerator()
  }, [])
  
  function letterGenerator() { //generate the letters
    let letterSquares = boardRef.current.getElementsByTagName('div'); //div elements
    let arrayOfGenLetters = Array.prototype.slice.call(letterSquares); //array of div elements
    let vowelString = "aeiou".toUpperCase();
    let consonantString = "bcdfghjklmnpqrstvwxyz".toUpperCase();
    
    const vowelDivInt = new Set(); //unique set representing divs
    
    while (vowelDivInt.size != 8) { //determines which number div will receive vowel value
      vowelDivInt.add(Math.floor(Math.random() * 16));
    }
    
    for (let i = 0; i < arrayOfGenLetters.length; i++) {
      let result = '';
      for (let j = 0; j < vowelDivInt.size; j++) {
        if (vowelDivInt.has(i)) {
          result = vowelString.charAt(Math.floor(Math.random() * 5)).toString();
          arrayOfGenLetters[i].innerHTML = result;
          
        } else {
          result = consonantString.charAt(Math.floor(Math.random() * 20)).toString();
          arrayOfGenLetters[i].innerHTML = result;        
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.board} ref={boardRef}>
        <div className={styles.wordsquare}>A</div>
        <div className={styles.wordsquare}>B</div>
        <div className={styles.wordsquare}>V</div>
        <div className={styles.wordsquare}>D</div>
        <div className={styles.wordsquare}>E</div>
        <div className={styles.wordsquare}>A</div>
        <div className={styles.wordsquare}>K</div>
        <div className={styles.wordsquare}>L</div>
        <div className={styles.wordsquare}>P</div>
        <div className={styles.wordsquare}>O</div>
        <div className={styles.wordsquare}>W</div>
        <div className={styles.wordsquare}>E</div>
        <div className={styles.wordsquare}>R</div>
        <div className={styles.wordsquare}>E</div>
        <div className={styles.wordsquare}>A</div>
        <div className={styles.wordsquare}>N</div>
      </div>
    </div>
  );
}
