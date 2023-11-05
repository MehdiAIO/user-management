import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: 1,
      name: "mehdi ait ouzdi",
      email: "elmahdi.aitouzdi@gmail.com",
      country: "Morocco",
    },
  ],
  reducers: {
    setUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        name: action.payload.name,
        email: action.payload.email,
        country: action.payload.country,
      };
      state.push(newUser);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const user = state.find((user) => user.id === action.payload.id);
      if (user) {
        user.id = action.payload.id;
        user.name = action.payload.name;
        user.email = action.payload.email;
        user.country = action.payload.country;
      }
    },
  },
});

export const { setUser, deleteUser, updateUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
