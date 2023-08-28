import {
    ADD_BOOK_MY_LIBRARY,
    DELETE_BOOK_MY_LIBRARY,
    TO_END_BOOK_LIST,
    TO_TOP_BOOK_LIST,
} from '../const_actions';

const defaultState = {
    myLibrary:[],
}

// Функція перевіряє чи є збережені данні в localStorage як що немає повертає дефолтні налаштування. MyLibraryState

export const defaultLocalState = (state, key) => {
    const localState = JSON.parse(localStorage.getItem(key));
    // Повертаємо стан.
    return localState ? localState : state;
}


export function myLibraryReducer(state = defaultLocalState(defaultState, 'MyLibraryState'), action){
    
    switch (action.type) {
        case ADD_BOOK_MY_LIBRARY:
            localStorage.setItem('MyLibraryState', JSON.stringify({...state, myLibrary:[...state.myLibrary, action.payload]}))
            return {...state, myLibrary:[...state.myLibrary, action.payload]}

        case DELETE_BOOK_MY_LIBRARY:
            localStorage.setItem('MyLibraryState', JSON.stringify({...state, myLibrary:state.myLibrary.filter(el=>el.id !== action.payload.id)}))

            return {...state, myLibrary:state.myLibrary.filter(el=>el.id !== action.payload.id)}
        
        case TO_END_BOOK_LIST:
            localStorage.setItem('MyLibraryState', JSON.stringify({...state, myLibrary:[...state.myLibrary.filter(el=>el.id !== action.payload.id),action.payload]}))

            return { ...state, myLibrary: [...state.myLibrary.filter(el => el.id !== action.payload.id), action.payload] }
        
        case TO_TOP_BOOK_LIST:
            localStorage.setItem('MyLibraryState', JSON.stringify({...state, myLibrary:[action.payload, ...state.myLibrary.filter(el=>el.id !== action.payload.id)]}))

            return {...state, myLibrary:[action.payload, ...state.myLibrary.filter(el=>el.id !== action.payload.id)]}

        default:
            return state   
    }
}