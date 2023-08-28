import { 
    FETCCH_BOOKS, 
    NEXT_PAGE, 
    PREV_PAGE, 
    СHANGE_CATEGORY, 
    СHANGE_SEARCH_TERM,
    СHANGE_SORT,
    LOADER,
}  from '../const_actions';

const defaultState = {
    books: [],
    paramUrl: {
        pageNum: 0,
        searchTerm: 'search',
        category: '',
        sort: 'Newest',
    },
    loader:false,
}
// Relevance Актуальність Newest Найновіший

export  function fetchBooksReducer(state = defaultState, action) {

    switch (action.type) {
        case LOADER:
            return {...state, loader:action.payload}

        case СHANGE_SORT:
            return {...state, paramUrl:{...state.paramUrl, pageNum: 0,searchTerm:'search',sort:action.payload} }

        case СHANGE_SEARCH_TERM:
            return {...state, paramUrl:{...state.paramUrl, pageNum: 0,searchTerm:action.payload} }

        case СHANGE_CATEGORY:
            return {...state, paramUrl:{...state.paramUrl, pageNum: 0,searchTerm:'search', category:action.payload} }

        case NEXT_PAGE:
            return {...state, paramUrl:{...state.paramUrl, pageNum: state.paramUrl.pageNum + 1 } }

        case PREV_PAGE:
            return {
                ...state,
                paramUrl: {
                    ...state.paramUrl,
                    pageNum:
                        state.paramUrl.pageNum > 0 ?
                            state.paramUrl.pageNum - 1 :
                            0
                }
            }
        
        
        case FETCCH_BOOKS:
            return {...state ,  books :[...action.payload]}


        default:
            return state
    }
    
}