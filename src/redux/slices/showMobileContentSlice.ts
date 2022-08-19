import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ShowMobileContentInitialState {
  showMobileContent: boolean;
}
const initialState: ShowMobileContentInitialState = {
  showMobileContent: false,
};
export const showMobileContentSlice = createSlice({
  name: "activeNote",
  initialState,
  reducers: {
    setShowMobileContent(
      state: ShowMobileContentInitialState,
      action: PayloadAction<boolean>
    ) {
      state.showMobileContent = action.payload;
    },
  },
});

export const { setShowMobileContent } = showMobileContentSlice.actions;
export default showMobileContentSlice.reducer;
