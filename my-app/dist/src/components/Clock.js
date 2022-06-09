"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const clock_module_css_1 = __importDefault(require("./clock.module.css"));
function Clock(props) {
    const timerElement = (0, react_1.useRef)();
    const starting = 2;
    let time = starting * 60; //seconds
    // let time: number = starting * 3; //seconds
    (0, react_1.useEffect)(() => {
        console.log("time: " + time);
        console.log("timesup: " + props.timesUp);
        setInterval(() => {
            if (time === -1) {
                props.setTimesUp(true);
                return () => clearInterval();
            }
            console.log("continue");
            update();
        }, 1000);
    }, [time]);
    function update() {
        //update the clock
        console.log("clock");
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds === 0) {
            timerElement.current.innerHTML = `${minutes}:${0}${0}`;
        }
        else if (seconds < 10 && seconds > 0) {
            timerElement.current.innerHTML = `${minutes}:${0}${seconds}`;
        }
        else if (seconds >= 10 && seconds > 0) {
            timerElement.current.innerHTML = `${minutes}:${seconds}`;
            seconds = seconds < 10 ? "10" + seconds : seconds;
        }
        time--;
    }
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: clock_module_css_1.default.clockContainer }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: clock_module_css_1.default["time-clock"] }, { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ className: clock_module_css_1.default["clock-header"] }, { children: "Game Time Remaining" }), void 0), (0, jsx_runtime_1.jsxs)("h2", Object.assign({ className: clock_module_css_1.default.timer, ref: timerElement }, { children: ["2:00", " "] }), void 0)] }), void 0) }), void 0));
}
exports.default = Clock;
