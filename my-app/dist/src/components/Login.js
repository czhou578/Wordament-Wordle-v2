"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const api_1 = require("../api");
const Headerbar_1 = require("./Headerbar");
const Login = () => {
    const [userName, setUserName] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const loginHandler = () => {
        let loginRequestObj = {
            userName: userName,
            password: password,
        };
        (0, axios_1.default)({
            method: "post",
            url: "http://localhost:3001/users/loggedin",
            data: {
                loginRequestObj,
            },
        }).then(function (data) {
            dispatch((0, api_1.setToken)(data.data.accessToken));
            navigate("/dashboard");
            console.log("success");
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Headerbar_1.Headerbar, {}, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { backgroundColor: "tan", height: "92vh" } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mb-3", style: { marginTop: "100px", width: "30%", marginLeft: "35%" } }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "formGroupExampleInput", className: "form-label" }, { children: "Enter Username" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", id: "formGroupExampleInput", placeholder: "Enter Username", onChange: (e) => setUserName(e.target.value) }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mb-3", style: { marginTop: "20px", width: "30%", marginLeft: "35%" } }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "formGroupExampleInput2", className: "form-label" }, { children: "Enter Password" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", id: "formGroupExampleInput2", placeholder: "Enter Password", onChange: (e) => setPassword(e.target.value) }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn btn-primary d-grid gap-2 col-4 mx-auto", onClick: () => loginHandler() }, { children: "Login" }), void 0)] }), void 0)] }, void 0));
};
exports.Login = Login;
