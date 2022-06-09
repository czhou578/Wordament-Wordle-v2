"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const GameSetup_1 = require("./components/GameSetup");
const Login_1 = require("./components/Login");
const Signup_1 = require("./components/Signup");
const UserDashboard_1 = require("./components/UserDashboard");
function App() {
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(GameSetup_1.GameSetup, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(Signup_1.Signup, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login_1.Login, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/dashboard", element: (0, jsx_runtime_1.jsx)(UserDashboard_1.UserDashboard, {}, void 0) }, void 0)] }, void 0));
}
exports.default = App;
