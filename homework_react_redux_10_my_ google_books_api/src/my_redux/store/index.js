import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import {fetchBooksReducer, myLibraryReducer } from '../reducers';

const rootReducer = combineReducers({
    fetchBooks:fetchBooksReducer,
    myLibrary: myLibraryReducer,
})


export  const store = legacy_createStore(rootReducer, applyMiddleware(thunk))