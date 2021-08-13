import { createStore } from "redux";
import { locationsReducer } from "./locations-store/reducer";

// const initialState = {
//   locationsList: [
//     { name: 'Tel Aviv', id: '1', isSelected: true },
//     { name: 'Jerusalem', id: '2', isSelected: false },
//     { name: 'Haifa', id: '3', isSelected: false },
//     { name: 'New York', id: '4', isSelected: false },
//     { name: 'London', id: '5', isSelected: false },
//   ],
// };

export const store = createStore(locationsReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch