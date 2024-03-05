import { createSlice } from "@reduxjs/toolkit";
import { fetchCards, addCard, deleteCard } from "./operation";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCards.pending, handlePending)
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCards.rejected, handleRejected)
      .addCase(addCard.pending, handlePending)
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addCard.rejected, handleRejected)

      .addCase(deleteCard.pending, handlePending)
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteCard.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
