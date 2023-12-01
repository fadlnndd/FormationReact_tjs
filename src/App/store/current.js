import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';

const initialState = emptyMeme

const current = createSlice({
  name: 'current',
  initialState,
  reducers: {
    clear: (state, action) => {
        delete state.id;
        Object.assign(state,emptyMeme);
    },
    update: (state, action) => {
        Object.assign(state, action.payload);
    },
}
});

export const {clear, update} = current.actions

export default current.reducer