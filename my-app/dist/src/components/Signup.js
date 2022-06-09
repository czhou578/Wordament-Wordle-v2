"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const uuid_1 = require("uuid");
const api_1 = require("../api");
const Headerbar_1 = require("./Headerbar");
const Signup = () => {
    const [firstName, setFirstName] = (0, react_1.useState)("");
    const [lastName, setLastName] = (0, react_1.useState)("");
    const [userName, setUserName] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const setCredentials = (entry) => {
        console.log("set credentials");
        localStorage.setItem("user", JSON.stringify(entry));
    };
    const signupHandler = () => __awaiter(void 0, void 0, void 0, function* () {
        let newUser = {
            id: (0, uuid_1.v4)(),
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
        };
        axios_1.default.post("http://localhost:3001/users/new-user", newUser).then((data) => {
            dispatch((0, api_1.setToken)(data.data.accessToken));
            setCredentials({ Username: userName, Password: password });
            navigate("/dashboard");
            console.log("success");
        });
    });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Headerbar_1.Headerbar, {}, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { backgroundColor: "tan", height: "92vh" } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mb-3", style: { marginTop: "100px", width: "30%", marginLeft: "35%" } }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "formGroupExampleInput", className: "form-label" }, { children: "First Name" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", id: "formGroupExampleInput", placeholder: "First Name", onChange: (e) => setFirstName(e.target.value), name: "firstName" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mb-3", style: { marginTop: "20px", width: "30%", marginLeft: "35%" } }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "formGroupExampleInput", className: "form-label" }, { children: "Last Name" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", id: "formGroupExampleInput", placeholder: "Last Name", onChange: (e) => setLastName(e.target.value), name: "lastName" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mb-3", style: { marginTop: "20px", width: "30%", marginLeft: "35%" } }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "formGroupExampleInput", className: "form-label" }, { children: "Create Username" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", id: "formGroupExampleInput", placeholder: "New Username", onChange: (e) => setUserName(e.target.value), name: "userName" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "mb-3", style: { marginTop: "20px", width: "30%", marginLeft: "35%" } }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "formGroupExampleInput2", className: "form-label" }, { children: "Create Password" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", id: "formGroupExampleInput2", placeholder: "New Password", onChange: (e) => setPassword(e.target.value), name: "password" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn btn-primary d-grid gap-2 col-4 mx-auto", onClick: () => signupHandler() }, { children: "Signup" }), void 0)] }), void 0)] }, void 0));
};
exports.Signup = Signup;
