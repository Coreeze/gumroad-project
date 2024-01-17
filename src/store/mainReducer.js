import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

/**
 * Main slice of the store to handle data used in multiple components
 */
const slice = createSlice({
  name: "main",
  /**
   * Initial state of the slice
   */
  initialState,
  /**
   * Reducers change the content of the store. No logic inside, their job is to pass new data.
   */
  reducers: {
    userDataUpdated: (main, action) => {
      main.userData = action.payload;
    },
    resetState: () => initialState,
  },
});

const { userDataUpdated, resetState } = slice.actions;

export default slice.reducer;

/**
 * Actions that update the store. In here we can add logic if needed.
 */
export const resetMainState = () => (dispatch, getState) => {
  dispatch(resetState());
};

export const updateUser = (newUser) => async (dispatch, getState) => {
  const currentUserInStore = getState().main.userData;

  if (newUser === currentUserInStore) return;

  dispatch({ type: userDataUpdated.type, payload: newUser });
};
