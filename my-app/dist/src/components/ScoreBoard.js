"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const scoreboard_module_css_1 = __importDefault(require("./scoreboard.module.css"));
function ScoreBoard(props) {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: scoreboard_module_css_1.default.container }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: scoreboard_module_css_1.default.scoreContainer }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: scoreboard_module_css_1.default.scoreHeader }, { children: "Score" }), void 0), (0, jsx_runtime_1.jsx)("h3", Object.assign({ className: scoreboard_module_css_1.default.headers }, { children: props.score }), void 0)] }), void 0) }), void 0));
}
exports.default = ScoreBoard;
