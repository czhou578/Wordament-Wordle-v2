import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Credentials {
  Username: string;
  Password: string;
}

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: null as string | null,
  },
  reducers: {
    setToken(state: any, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    deleteToken(state: any, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    score: null as number | null,
  },
  reducers: {
    setGameScore(state: any, action: PayloadAction<number>) {
      state.score = action.payload;
    },
  },
});

const foundWordSlice = createSlice({
  name: "found_words",
  initialState: {
    foundWords: null as string[] | null,
  },
  reducers: {
    setFoundWords(state: any, action: PayloadAction<string[]>) {
      state.foundWords = action.payload;
    },
  },
});

const wordleSlice = createSlice({
  name: "wordle_word",
  initialState: {
    correctGuess: null as string | null,
  },
  reducers: {
    setCorrectGuess(state: any, action: PayloadAction<string>) {
      state.correctGuess = action.payload
    }
  }
})

export const { setToken, deleteToken } = tokenSlice.actions;
export const { setGameScore } = scoreSlice.actions;
export const { setFoundWords } = foundWordSlice.actions;
export const { setCorrectGuess } = wordleSlice.actions;

// eslint-disable-next-line import/no-anonymous-default-export
const reducers = combineReducers({
  token: tokenSlice.reducer,
  score: scoreSlice.reducer,
  words: foundWordSlice.reducer,
  wordle: wordleSlice.reducer
});

export default reducers;
