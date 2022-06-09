"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const correctwordslog_module_css_1 = __importDefault(require("./correctwordslog.module.css"));
function CorrectWordsLog(props) {
    const [wordsList, setWordsList] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        sortAscendingWords(props.correctWordsList);
    }, []);
    function sortAscendingWords(array) {
        setWordsList((wordsList) => [
            ...wordsList,
            props.correctWordsList[props.correctWordsList.length - 1],
        ]);
    }
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: correctwordslog_module_css_1.default.container }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: correctwordslog_module_css_1.default.scrollableDiv }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Found Words" }, void 0), wordsList] }), void 0) }), void 0));
}
exports.default = CorrectWordsLog;
