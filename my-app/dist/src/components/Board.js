"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-loop-func */
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const api_1 = require("../api");
const board_module_css_1 = __importDefault(require("./board.module.css"));
const words_json_1 = __importDefault(require("./words.json"));
function Board(props) {
    const boardRef = (0, react_1.useRef)();
    const wordSquareRef = (0, react_1.useRef)();
    const containerRef = (0, react_1.useRef)();
    const isMounted = (0, react_1.useRef)(false);
    const [correctWordsList, setCorrectWordsList] = (0, react_1.useState)([]);
    const dispatch = (0, react_redux_1.useDispatch)();
    let squaresUsed = 0;
    let mousedown;
    let selectedLetters = new Array(16);
    let vowelString = "aeiou".toUpperCase();
    let consonantString = "bcdfghjklmnpqrstvwxyz".toUpperCase();
    (0, react_1.useEffect)(() => {
        if (isMounted.current) {
            console.log("before dispatched");
            console.log("dispatched");
        }
        else {
            isMounted.current = true;
        }
    }, [props.timesUp]);
    (0, react_1.useEffect)(() => {
        //generate letters once
        letterGenerator();
    }, []);
    (0, react_1.useEffect)(() => {
        containerRef.current.onmouseleave = leftBoard;
        boardRef.current.onmouseup = touchedBoard;
        mouseControlSquares();
    }, []);
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
    function allGreen() {
        //utility function
        for (let j = 0; j < squaresUsed; j++) {
            selectedLetters[j].style.backgroundColor = "lightgreen";
        }
    }
    function resultWordString() {
        var resultStr = "";
        if (squaresUsed === 1)
            return "";
        for (let i = 0; i < squaresUsed; i++) {
            resultStr += selectedLetters[i].innerHTML;
        }
        return resultStr;
    }
    function mouseControlSquares() {
        var score = 0;
        var setScoreFunc = props.setScore;
        var square = document.getElementsByClassName(board_module_css_1.default.wordsquare);
        var correctWords = new Set();
        for (let i = 0; i < square.length; i++) {
            square[i].addEventListener("mousedown", function (e) {
                mousedown = true;
                e.preventDefault();
                square[i].style.backgroundColor = "orange";
                selectedLetters[0] = square[i];
                squaresUsed++;
            });
            square[i].addEventListener("mouseover", function (e) {
                if (mousedown === true) {
                    square[i].style.backgroundColor = "orange";
                    if (e.target.nodeName === "DIV") {
                        selectedLetters[squaresUsed] = e.target;
                        squaresUsed++;
                    }
                }
            });
            square[i].addEventListener("mouseup", function (e) {
                mousedown = false;
                if (e.target.className !== "board" &&
                    e.target.nodeName !== "DIV") {
                    for (let i = 0; i < squaresUsed; i++) {
                        selectedLetters[i].style.backgroundColor = "lightgreen";
                    }
                }
                if (correctWords.has(resultWordString())) {
                    allGreen();
                }
                else if (words_json_1.default.words.includes(resultWordString().toLowerCase()) &&
                    !correctWords.has(resultWordString().toLowerCase())) {
                    //fix later
                    correctWords.add(resultWordString());
                    let newArray = Array.from(correctWords);
                    setCorrectWordsList(newArray);
                    dispatch((0, api_1.setFoundWords)(newArray));
                    if (squaresUsed === 1) {
                        squaresUsed = 0;
                        selectedLetters[0].style.backgroundColor = "lightgreen";
                    }
                    for (let i = 0; i < squaresUsed; i++) {
                        //process the words here
                        if (vowelString.includes(selectedLetters[i].innerHTML)) {
                            score += 3;
                        }
                        else if (consonantString.includes(selectedLetters[i].innerHTML)) {
                            score += 6;
                        }
                        setScoreFunc(score);
                        selectedLetters[i].style.backgroundColor = "lightgreen";
                    }
                }
                else if (!words_json_1.default.words.includes(selectedLetters.join().toLowerCase())) {
                    allGreen();
                }
            });
            selectedLetters = [];
        }
    }
    function letterGenerator() {
        //generate the letters
        let letterSquares = boardRef.current.getElementsByTagName("div"); //div elements
        let arrayOfGenLetters = Array.prototype.slice.call(letterSquares); //array of div elements
        let vowelString = "aeiou".toUpperCase();
        let consonantString = "bcdfghjklmnpqrstvwxyz".toUpperCase();
        const vowelDivInt = new Set(); //unique set representing divs
        while (vowelDivInt.size !== 8) {
            //determines which number div will receive vowel value
            vowelDivInt.add(Math.floor(Math.random() * 16));
        }
        for (let i = 0; i < arrayOfGenLetters.length; i++) {
            let result = "";
            for (let j = 0; j < vowelDivInt.size; j++) {
                if (vowelDivInt.has(i)) {
                    result = vowelString.charAt(Math.floor(Math.random() * 5)).toString();
                    arrayOfGenLetters[i].innerHTML = result;
                }
                else {
                    result = consonantString
                        .charAt(Math.floor(Math.random() * 20))
                        .toString();
                    arrayOfGenLetters[i].innerHTML = result;
                }
            }
        }
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: board_module_css_1.default.container, ref: containerRef }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: board_module_css_1.default.board, ref: boardRef }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "A" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "B" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "V" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "D" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "E" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "A" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "K" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "L" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "P" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "O" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "W" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "E" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "R" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "E" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "A" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordsquare, ref: wordSquareRef }, { children: "N" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.logContainer }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: board_module_css_1.default.test }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Found Words" }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: board_module_css_1.default.wordList }, { children: correctWordsList
                                .slice(0)
                                .reverse()
                                .map((element, index) => {
                                return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("h4", Object.assign({ className: board_module_css_1.default.word }, { children: element }), void 0) }, index));
                            }) }), void 0)] }), void 0) }), void 0)] }), void 0));
}
exports.default = Board;
