"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSetup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const api_1 = require("../api");
const app_module_css_1 = __importDefault(require("../app.module.css"));
const Board_1 = __importDefault(require("../components/Board"));
const Clock_1 = __importDefault(require("../components/Clock"));
const EndGameModal_1 = __importDefault(require("../components/EndGameModal"));
const Headerbar_1 = require("../components/Headerbar");
const ScoreBoard_1 = __importDefault(require("../components/ScoreBoard"));
const StartingModal_1 = require("../components/StartingModal");
const GameSetup = () => {
    const [showBoard, setShowBoard] = (0, react_1.useState)(false);
    const [timesUp, setTimesUp] = (0, react_1.useState)(false);
    const [score, setScore] = (0, react_1.useState)(0);
    const [userName, setUserName] = (0, react_1.useState)("");
    const isMounted = (0, react_1.useRef)(false);
    const dispatch = (0, react_redux_1.useDispatch)();
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
            setUserName(parseJwt(token).name);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        console.log("asdfasdfafd");
        if (isMounted.current) {
            let userName;
            if (token) {
                userName = parseJwt(token);
            }
            else {
                return;
            }
            console.log(userName);
            let payload = {
                score: score,
                userName: userName.name,
            };
            dispatch((0, api_1.setGameScore)(score));
            (0, axios_1.default)({
                method: "post",
                url: "http://localhost:3001/scores/new-score",
                data: {
                    payload,
                },
            }).then(() => {
                console.log("success");
            });
        }
        else {
            isMounted.current = true;
        }
    }, [timesUp]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: app_module_css_1.default.appContainer }, { children: [userName !== "" ? (0, jsx_runtime_1.jsx)(Headerbar_1.Headerbar, { userName: userName }, void 0) : (0, jsx_runtime_1.jsx)(Headerbar_1.Headerbar, {}, void 0), (0, jsx_runtime_1.jsx)("div", { children: !showBoard ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(StartingModal_1.StartingModal, { showBoard: showBoard, showBoardHandler: setShowBoard }, void 0), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { position: "bottom-right", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true }, void 0)] }, void 0)) : timesUp ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(EndGameModal_1.default, { score: score, setTimesUp: setTimesUp }, void 0) }, void 0)) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { marginTop: "20px" } }, { children: [(0, jsx_runtime_1.jsx)(Clock_1.default, { setTimesUp: setTimesUp, timesUp: timesUp }, void 0), (0, jsx_runtime_1.jsx)(Board_1.default, { setScore: setScore, timesUp: timesUp, setTimesUp: setTimesUp }, void 0), (0, jsx_runtime_1.jsx)(ScoreBoard_1.default, { score: score }, void 0)] }), void 0)) }, void 0)] }), void 0));
};
exports.GameSetup = GameSetup;
