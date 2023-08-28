import { createMyData } from "../../methods";
import { fetchBooksAction, onOfLoaderAction} from "../actionCreators";

const baseUrl = 'https://www.googleapis.com/books/v1/volumes';


export const fetchBooks = ({ searchTerm, category, sort, pageNum }) => {
    
    const max_Results = 30;
    const startIndex = max_Results * pageNum;

    const url = ` ${baseUrl}?q=${searchTerm}+subject:${category}&maxResults=${max_Results}&startIndex=${startIndex}&orderBy=${sort}`
    
    return function (dispatch) {
      fetch(url)
        .then((response) => {
          if(response.ok){
            return response.json();
          }
          
        })
        .then((data) => {
          if(data.items){
            dispatch(fetchBooksAction(createMyData(data.items)))
          }
          dispatch(onOfLoaderAction(false))
        });
    }
}