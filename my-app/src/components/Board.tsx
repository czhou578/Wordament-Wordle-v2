import { MutableRefObject, useEffect, useRef } from "react";
import styles from "./board.module.css";
import words from './words.json'

interface Props {
  setScore: (active: number) => void
}

export default function Board(props: Props) {
  const boardRef = useRef() as MutableRefObject<HTMLInputElement>
  const wordSquareRef = useRef() as MutableRefObject<HTMLInputElement>
  const containerRef = useRef() as MutableRefObject<HTMLInputElement> 

  var squaresUsed = 0;
  var mousedown: boolean;
  var selectedLetters = new Array(16);
  var vowelString = "aeiou".toUpperCase();
  var consonantString = "bcdfghjklmnpqrstvwxyz".toUpperCase();

  useEffect(() => { //generate letters once
    letterGenerator()
  }, [])

  useEffect(() => {
    console.log('use effect that runnssss');
    containerRef.current.onmouseleave = leftBoard;
    boardRef.current.onmouseup = touchedBoard
    mouseControlSquares()
  }, [])

  function leftBoard() {
    for (let i = 0; i < squaresUsed; i++) {
      selectedLetters[i].style.backgroundColor = "lightgreen";
    } 
    squaresUsed = 0;
    mousedown = false;
  }  

  function touchedBoard() {
    for (let i = 0; i < squaresUsed; i++) {
      selectedLetters[i].style.backgroundColor = "lightgreen";
    }
    squaresUsed = 0;
    mousedown = false;
  }

  function allGreen() { //utility function
    for (let j = 0; j < squaresUsed; j++) {
      selectedLetters[j].style.backgroundColor = "lightgreen";
    }
  }

  function resultWordString() {
    var resultStr = "";
    for (let i = 0; i < squaresUsed; i++) {
      resultStr += selectedLetters[i].innerHTML;
    }
    console.log(resultStr);
    return resultStr;
  }  

  function mouseControlSquares() {
    var score = 0;
    var setScoreFunc = props.setScore;
    var square = document.getElementsByClassName(styles.wordsquare) as HTMLCollectionOf<HTMLElement>
    var correctWords = new Set();
    // console.log(words.words);


    for (let i = 0; i < square.length; i++) {
  
      square[i].addEventListener("mousedown", function(e) {
      console.log('mousedown');

        mousedown = true;
        e.preventDefault();
        square[i].style.backgroundColor = "orange";
        selectedLetters[0] = square[i];
        squaresUsed++;
        
      });
    
      square[i].addEventListener("mouseover", function(e) {
        if (mousedown == true) {
          square[i].style.backgroundColor = "orange";
          if ((e.target! as Element).nodeName == "DIV") {
            selectedLetters[squaresUsed] = e.target;
            squaresUsed++;
          }
        }
      });
      
      square[i].addEventListener("mouseup", function(e) {
        mousedown = false;
        
        if ((e.target! as Element).className != "board" && (e.target! as Element).nodeName != "DIV") {
          console.log('00000000000000000');
          for (let i = 0; i < squaresUsed; i++) {
            selectedLetters[i].style.backgroundColor = "lightgreen";
          } 
        }

        if (correctWords.has(resultWordString())) {
          console.log('111111111111111');
          allGreen();

        } else if (words.words.includes(resultWordString().toLowerCase()) && !correctWords.has(resultWordString().toLowerCase())) { //fix later
          console.log('222222222222');
          correctWords.add(resultWordString());
    
          if (squaresUsed == 1) {
            squaresUsed = 0;
            selectedLetters[0].style.backgroundColor = "lightgreen";
          }
    
          for (let i = 0; i < squaresUsed; i++) { //process the words here
    
            if (vowelString.includes(selectedLetters[i].innerHTML)) {
              score += 3;
            } else if (consonantString.includes(selectedLetters[i].innerHTML)) {
              score += 6;
            }
            setScoreFunc(score)
            selectedLetters[i].style.backgroundColor = "lightgreen";
          } 
    
        } else if (!words.words.includes(selectedLetters.join().toLowerCase())) {
          console.log('3333333333333333333333333');
          allGreen();
        }

        console.log(correctWords)

      });
      selectedLetters = [];
    }    
  }

  
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
    <div className={styles.container} ref={containerRef}>
      <div className={styles.board} ref={boardRef}>
        <div className={styles.wordsquare} ref={wordSquareRef}>A</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>B</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>V</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>D</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>E</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>A</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>K</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>L</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>P</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>O</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>W</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>E</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>R</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>E</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>A</div>
        <div className={styles.wordsquare} ref={wordSquareRef}>N</div>
      </div>
    </div>
  );
}
