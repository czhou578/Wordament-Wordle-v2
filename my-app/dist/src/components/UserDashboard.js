"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDashboard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const Headerbar_1 = require("./Headerbar");
const UserDashboard = () => {
    const [userName, setUserName] = (0, react_1.useState)("");
    const [highestScore, setHighestScore] = (0, react_1.useState)(null);
    const [lowestScore, setLowestScore] = (0, react_1.useState)(null);
    const [averageScore, setAverageScore] = (0, react_1.useState)(null);
    const token = (0, react_redux_1.useSelector)((state) => state.info.token.token);
    function parseJwt(token) {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(atob(base64)
            .split("")
            .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(""));
        return JSON.parse(jsonPayload);
    }
    (0, react_1.useEffect)(() => {
        if (token) {
            console.log(parseJwt(token));
            setUserName(parseJwt(token).name);
            const highScoreRequest = (0, axios_1.default)({
                method: "post",
                url: "http://localhost:3001/scores/highest-score",
                data: { userName: parseJwt(token).name },
            });
            const lowestScoreRequest = (0, axios_1.default)({
                method: "post",
                url: "http://localhost:3001/scores/lowest-score",
                data: { userName: parseJwt(token).name },
            });
            const avgScoreRequest = (0, axios_1.default)({
                method: "post",
                url: "http://localhost:3001/scores/average-score",
                data: { userName: parseJwt(token).name },
            });
            Promise.all([highScoreRequest, lowestScoreRequest, avgScoreRequest]).then((data) => {
                let highScore = JSON.parse(JSON.stringify(data[0].data))["MAX(Score)"];
                let lowScore = JSON.parse(JSON.stringify(data[1].data))["MIN(Score)"];
                let avgScore = JSON.parse(JSON.stringify(data[2].data))["AVG(Score)"];
                console.log(highScore);
                setHighestScore(highScore);
                setLowestScore(lowScore);
                setAverageScore(avgScore);
            });
        }
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Headerbar_1.Headerbar, { userName: userName }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { height: "92vh", backgroundColor: "black" } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card text-center", style: { width: "50%", marginTop: "200px", marginLeft: "25%" } }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-header" }, { children: ["Dashboard For ", (0, jsx_runtime_1.jsx)("b", { children: userName }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "card-title" }, { children: "Game Performance Trends" }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "card-text" }, { children: "Here are the highlights of your playing history." }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { display: "flex" } }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card", style: {
                                        width: "18rem",
                                        marginLeft: "10px",
                                        marginBottom: "10px",
                                    } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "card-title" }, { children: "Highest Score" }), void 0), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "card-text" }, { children: ["Your highest score was ", (0, jsx_runtime_1.jsx)("b", { children: highestScore }, void 0)] }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card", style: {
                                        width: "18rem",
                                        marginLeft: "10px",
                                        marginBottom: "10px",
                                    } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "card-title" }, { children: "Lowest Score" }), void 0), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "card-text" }, { children: ["Your lowest score was ", (0, jsx_runtime_1.jsx)("b", { children: lowestScore }, void 0)] }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card", style: {
                                        width: "18rem",
                                        marginLeft: "10px",
                                        marginBottom: "10px",
                                    } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ className: "card-title" }, { children: "Average Score" }), void 0), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "card-text", style: { marginLeft: "-20px" } }, { children: ["Your average score was ", (0, jsx_runtime_1.jsx)("b", { children: averageScore }, void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card-footer text-muted" }, { children: "Last played: 2 days ago" }), void 0)] }), void 0) }), void 0)] }, void 0));
};
exports.UserDashboard = UserDashboard;
