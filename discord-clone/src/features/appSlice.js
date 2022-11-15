import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId:null,
    chhannelName: null,
  },
  reducers: {
    setChannelId: (state,action) => {
      state.app += action.payload;
    },
  },
});
export const { setChannnelId } = appSlice.actions;

export const selectChannelTd = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
