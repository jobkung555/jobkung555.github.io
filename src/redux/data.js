import { createAction,createReducer,createSlice } from "@reduxjs/toolkit"

import { loadState,saveState } from './localStorage'

export const MOODS = {
    SAD: "sad",
    SHOCKED: "shocked",
    HAPPY: "happy",
    BLISSFUL: "blissful",
    LOVESTRUCK: "Lovestruck",
    EXCITED: "excited",
    KO: "ko"
}

const data = [
    {"name":"A","value":9},
    {"name":"B","value":0},
    {"name":"C","value":0},
    {"name":"D","value":0},
    {"name":"E","value":0}
]

const INITIAL_STATE = { value: MOODS.HAPPY };

export const updateCatMood = createAction("UPDATE_MOOD")

export const moodSlice = createSlice({
    name: "mood",
    initialState: INITIAL_STATE,
    reducers: {
        updateCatMood: (state, action)=>{
            state.value = action.payload
        }
    }
})

const INITIAL_STATE_STORE = { store: {} };

export const updateStore = createAction("UPDATE_STORE")

export const storeSlice = createSlice({
    name: "store!!",
    initialState: INITIAL_STATE_STORE,
    reducers: {
        updateStore: (state, action)=>{
        }
    }
})