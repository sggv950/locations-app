import thunk from 'redux-thunk';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./reducer";
let socket = io('http://localhost:5000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const store = createStore(reducer, applyMiddleware(socketIoMiddleware, thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch