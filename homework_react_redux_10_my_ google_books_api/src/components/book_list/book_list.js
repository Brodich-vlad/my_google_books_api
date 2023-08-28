import './book_list.css';

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";

import { 
    fetchBooks, 
    nextPageAction, 
    prevPageAction, 
    onOfLoaderAction, 
} from "../../my_redux";

import { createIdKey } from "../../methods";

import  ItemBook from "../item_book";

export default function BookList() {

    const dispatch = useDispatch();
    // Отримуємо стан.
    const {books, paramUrl }= useSelector(state => state.fetchBooks);

    // Робимо запит як що стан змінився.
    useEffect(() => {
        dispatch(fetchBooks(paramUrl))
        dispatch(onOfLoaderAction(true))
    },[paramUrl, dispatch])
   

    // Функція відображення інф. на сторінці.
    const showListItem = (data) => {
        if(!Array.isArray(data)){return}
        const arr = data.map((el, i) => {
        return(
            <Grid item xs="auto"  sm={2} md={4} key={createIdKey(i)}>
                <ItemBook data={el}/>
            </Grid>       
        )
        })
    return arr;
    };

    // Прокручуэмо сторінку в гору.
    const clickBtnTop = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    // Функції пагінації сторінок.
    const clickNextPage = () =>{
        if(books.length < 10){
        }
        else {
            dispatch(nextPageAction())
            clickBtnTop()
        }
    };

    const clickPrevPage = () =>{
        clickBtnTop()
        if(paramUrl.pageNum > 0){
            dispatch(prevPageAction())
        }else return;
    };

    return (
        <main className='main'>
                <div className="book_list">
                <Grid  sx={{}} container spacing={{ xs: 3, md: 4 }} columns={{ xs: 1, sm: 4, md: 12 }}
                justifyContent="center">

                        {showListItem(books)}
                    
                    </Grid>
                </div>
            <div className='wrapper_page_btns'>

                <button 
                    className={`btn_prev ${paramUrl.pageNum <= 0 && 
                        '_disabled'}`
                    }
                    onClick={ clickPrevPage }
                    type="button">
                        &#10094;... prev Page
                </button>
               
                <button className='btn_next' 
                    onClick={ clickNextPage } 
                    type="button">
                        next Page ... &#10095;
                </button> 
               
            </div>
         
      </main>
    )
}