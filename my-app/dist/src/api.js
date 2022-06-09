"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFoundWords = exports.setGameScore = exports.deleteToken = exports.setToken = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const tokenSlice = (0, toolkit_1.createSlice)({
    name: "token",
    initialState: {
        token: null,
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        deleteToken(state, action) {
            state.token = action.payload;
        },
    },
});
const scoreSlice = (0, toolkit_1.createSlice)({
    name: "score",
    initialState: {
        score: null,
    },
    reducers: {
        setGameScore(state, action) {
            state.score = action.payload;
        },
    },
});
const foundWordSlice = (0, toolkit_1.createSlice)({
    name: "found_words",
    initialState: {
        foundWords: null,
    },
    reducers: {
        setFoundWords(state, action) {
            state.foundWords = action.payload;
        },
    },
});
_a = tokenSlice.actions, exports.setToken = _a.setToken, exports.deleteToken = _a.deleteToken;
exports.setGameScore = scoreSlice.actions.setGameScore;
exports.setFoundWords = foundWordSlice.actions.setFoundWords;
// eslint-disable-next-line import/no-anonymous-default-export
const reducers = (0, toolkit_1.combineReducers)({
    token: tokenSlice.reducer,
    score: scoreSlice.reducer,
    words: foundWordSlice.reducer,
});
exports.default = reducers;
