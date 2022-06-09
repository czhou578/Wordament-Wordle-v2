"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headerbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const api_1 = require("../api");
const headerbar_module_css_1 = __importDefault(require("./headerbar.module.css"));
const Headerbar = ({ userName }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: headerbar_module_css_1.default.header }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#default", className: headerbar_module_css_1.default.logo }, { children: "Wordament" }), void 0) }), void 0), userName ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header-right" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/signup" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: headerbar_module_css_1.default.signup }, { children: "Signup" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/dashboard" }, { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ className: headerbar_module_css_1.default.active }, { children: ["Hi ", userName, "!"] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: headerbar_module_css_1.default.logout, onClick: () => dispatch((0, api_1.deleteToken)("")) }, { children: "Logout" }), void 0) }), void 0)] }), void 0)) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: headerbar_module_css_1.default["header-right"] }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/signup" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ className: headerbar_module_css_1.default.active, href: "#signup" }, { children: "Signup" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/login" }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "#login" }, { children: "Login" }), void 0) }), void 0)] }), void 0))] }), void 0));
};
exports.Headerbar = Headerbar;
