import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "react";
import useReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});

// // import { configureStore } from "@reduxjs/toolkit"
// import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "react";
// // import userReducer from "./feature/userSlice";

// const store = configureStore({
//     reducer: {
//         user: useReducer,
//     },
// })

// export default store;

// import { configureStore } from "@reduxjs/toolkit"
// import useReducer from "./feature/userSlice";

// // const store = configureStore({
// const store = configureStore({
//     reducer: {
//         user: useReducer,
//     },
// })

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import useReducer from "../features/userSlice";

// export default configureStore({
//     reducer: {
//         user: useReducer,
//     },
// })

// export default store

// export default configureStore({
//   reducer: {
//     user: useReducer,
//   },
// });
