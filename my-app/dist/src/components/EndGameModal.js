"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const endmodal_module_css_1 = __importDefault(require("./endmodal.module.css"));
function EndGameModal(props) {
    const token = (0, react_redux_1.useSelector)((state) => state.info.token.token);
    const wordsList = (0, react_redux_1.useSelector)((state) => state.info.words.foundWords);
    console.log(wordsList);
    const [signedInModal, setSignedInModal] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (token) {
            setSignedInModal(true);
        }
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: endmodal_module_css_1.default.container }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: endmodal_module_css_1.default.headerContainer }, { children: (0, jsx_runtime_1.jsx)("h2", Object.assign({ className: endmodal_module_css_1.default.header }, { children: "End of Round!" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: endmodal_module_css_1.default.preTextContainer }, { children: !signedInModal ? ((0, jsx_runtime_1.jsxs)("pre", Object.assign({ className: endmodal_module_css_1.default.preText }, { children: ["Your final score is: ", props.score, ". If you want your scores to be saved, register for an account!"] }), void 0)) : ((0, jsx_runtime_1.jsxs)("pre", Object.assign({ className: endmodal_module_css_1.default.preText }, { children: ["Your final score is: ", props.score, ". Want to play again?"] }), void 0)) }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: endmodal_module_css_1.default.imgandWords }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: endmodal_module_css_1.default.image }, { children: (0, jsx_runtime_1.jsx)("img", { src: "https://img.freepik.com/free-vector/golden-ribbon-design_1102-2552.jpg?size=626&ext=jpg", alt: "not available", className: endmodal_module_css_1.default.imag }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: endmodal_module_css_1.default.wordsList }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ style: { marginLeft: "75px" } }, { children: "Words You Found" }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: endmodal_module_css_1.default.wordContainer }, { children: wordsList === null || wordsList === void 0 ? void 0 : wordsList.map((element) => {
                                    return (0, jsx_runtime_1.jsx)("p", Object.assign({ className: endmodal_module_css_1.default.words }, { children: element }), void 0);
                                }) }), void 0)] }), void 0)] }), void 0), !signedInModal ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: endmodal_module_css_1.default.btnContainer }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: endmodal_module_css_1.default.button, onClick: () => window.location.reload() }, { children: "Play Again" }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: endmodal_module_css_1.default.btnContainer }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/dashboard" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: endmodal_module_css_1.default.button }, { children: "Vendor Dashboard" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: endmodal_module_css_1.default.button, onClick: () => window.location.reload() }, { children: "Play Again" }), void 0)] }), void 0))] }), void 0));
}
exports.default = EndGameModal;
