import { 
   FETCCH_BOOKS, 
   NEXT_PAGE, 
   PREV_PAGE, 
   ADD_BOOK_MY_LIBRARY, 
   СHANGE_CATEGORY,
   СHANGE_SEARCH_TERM,
   СHANGE_SORT,
   LOADER,
   DELETE_BOOK_MY_LIBRARY,
   TO_END_BOOK_LIST,
   TO_TOP_BOOK_LIST,
} from "../const_actions";

export const onOfLoaderAction = (payload) => {
   return { type:LOADER, payload }
}

export const changeSortAction = (payload) => {
   return { type:СHANGE_SORT, payload }
}

export const changeSearchAction = (payload) => {
   return { type:СHANGE_SEARCH_TERM, payload }
}

export const changeCtegoryAction = (payload) => {
   return { type:СHANGE_CATEGORY, payload }
}

export const fetchBooksAction = (payload) => {
    return { type:FETCCH_BOOKS, payload }
}

export const nextPageAction = () => {
   return { type:NEXT_PAGE } 
}

export const prevPageAction = () => {
   return { type:PREV_PAGE } 
}


export const addBookMyLibraryAction = (payload) => {
   return { type:ADD_BOOK_MY_LIBRARY, payload }
}

export const deleteBookMyLibraryAction = (payload) => {
   return { type:DELETE_BOOK_MY_LIBRARY, payload }
}


export const toEndListAction = (payload) => {
   return { type:TO_END_BOOK_LIST, payload }
}

export const toTopListrAction = (payload) => {
   return { type:TO_TOP_BOOK_LIST, payload }
}
