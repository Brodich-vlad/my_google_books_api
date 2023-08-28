import './my_library_book.css';

import { useState } from 'react';

import {
    deleteBookMyLibraryAction,
    toEndListAction,
    toTopListrAction
} from '../../my_redux';

import { useDispatch } from 'react-redux';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import MyBookOption from '../my_book_option';


export default function MyLibraryBook({data}){
    const{ title, description, image, authors, categories, publisher, publishedDate, language } = data;

    const dispatch = useDispatch()
    const endList = (e) => {
            dispatch(toEndListAction(e))
        }
    const topList = (e) => {
        dispatch(toTopListrAction(e))
    }
    // Видалити книгу зі списку.
    const clickDeleteBtn = (e)=>{
        dispatch(deleteBookMyLibraryAction(e))
    };

    // Стан віконця детальна  інфо.
    const[descript, setDescript] = useState(false);

    const clickDescriptBtn = ()=>{
        setDescript(descript ? false : true)
    }



    return(
        <>
            <div className='item_img'>
                <img src={image} alt={title}/>
            </div>
            <div className='item_info'>
                <div className='item_wrapper_info'>

                    {categories &&
                        <p className='item_info_text text_1'>
                            <span>Category: </span>{categories}
                        </p>
                    }

                    <h3 className='item_info_title'>{title}</h3>

                    {authors &&
                        <p className='item_info_text text_2'>
                            <span>Authors: </span>{authors}
                        </p>
                    }
                    

                    {publisher &&
                        <p className='item_info_text text_3'>
                            <span>Publisher: </span> {publisher}
                        </p>
                    }
                    <p className='item_info_text text_4'>{publishedDate}</p>
                    <p className='item_info_text text_5'><span>Language: </span>{language}</p>
                </div>
                <button 
                    className='descript_btn'
                    onClick={clickDescriptBtn} 
                    type='button'>
                     <span>description</span> <AutoStoriesIcon sx={{fontSize:'2.5rem'}}/>
                </button>

                <div className='book_option'>
                    <MyBookOption
                        el={data}
                        deleteBook={clickDeleteBtn}
                        topList={topList}
                        endList={endList}
                    />
                </div>
                
            </div>
            <div 
            className={`item_info_wrapper_descript ${descript &&'_show'}`}
            onClick={clickDescriptBtn}>
                <div className='item_info_descript'>
                    <h3 className='item_info_descript_title'>{title}</h3>
                    <p className='item_info_descript_text'>{description}</p>
                </div>
            </div>  
        </>
    )
}