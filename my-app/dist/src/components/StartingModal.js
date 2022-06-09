"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartingModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const startingModal_module_css_1 = __importDefault(require("./startingModal.module.css"));
const StartingModal = (props) => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: startingModal_module_css_1.default.container }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: startingModal_module_css_1.default.content }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: startingModal_module_css_1.default.header }, { children: (0, jsx_runtime_1.jsx)("h2", { children: "Welcome to Wordament!" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: startingModal_module_css_1.default.descrip_contain }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: startingModal_module_css_1.default.ul }, { children: [(0, jsx_runtime_1.jsx)("li", { children: "Click and drag across the board to select words" }, void 0), (0, jsx_runtime_1.jsx)("li", { children: "Each word selected will count for points, shown in the scoreboard." }, void 0), (0, jsx_runtime_1.jsx)("li", { children: "Find as many words as you can before the time expires!" }, void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: startingModal_module_css_1.default.button_contain }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: startingModal_module_css_1.default.button, onClick: () => props.showBoardHandler(true) }, { children: "Play" }), void 0) }), void 0)] }), void 0) }), void 0));
};
exports.StartingModal = StartingModal;
