import './item_book.css';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addBookMyLibraryAction } from "../../my_redux";

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


export default function ItemBook({data}){
    const { id, title, description, image, authors, categories, publisher, publishedDate, language } = data;
    // Отримуємо dispatch.
    const dispatch = useDispatch();
    // Отримуємо стан.
    const my_library = useSelector(state => state.myLibrary.myLibrary);
    // Локальний стан книги.
    const [open, setOpen] = useState(false);

    // Функція зміни локального стану книги.
    const clickOpen = () => {
        setOpen(open ? false : true);
    };

    // Функція додати книгу до своєї бібліотеки.
    const clickAddBookBtn = (el,id) =>{
        
        if (my_library.find((e) => e.id === id)) {
            alert('Така книга вже є')
        }
        else{
            dispatch(addBookMyLibraryAction(el))
            setOpen(false);
        }
    }


    return(
        <div>
            <div className={open ? "card-section _show" : "card-section"} onClick={
                clickOpen
            }>
                <div className="card" >
                    <div className="flip-card">
                        <div className="flip-card__container">
                            <div className="card-front">
                                <p className="card-front_text">
                                        {categories}
                                    </p>
                                <div className="card-front_img">

                                    <img  src={image} alt={title}/>

                                </div>

                                    <h2 className="card-front_title">
                                        {title}
                                    </h2>


                                    <p className="card-front_text">
                                        {authors}
                                    </p>

                            </div>
                            <div className="card-back">
                                
                                <img className="card-back_img" src={image} alt={title}/>

                        
                            </div>
                        </div>
                    </div>

                    <div className="inside-page">
                        <div className="inside-page__container">
                            <h3 className='inside-page_tiitle'> {title}</h3>   
                            <p className="inside-page__text">
                                {description}
                            </p>
                            <button className='inside-page__btn' 
                                type='button' 
                                onClick={
                                    ()=>{
                                        clickAddBookBtn(data, id)
                                    }
                                }>
                                    <LibraryAddIcon sx={{fontSize:'2.5rem'}} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className={open ? 
                "details-mobile _show" : 
                "details-mobile"} 
                onClick={
                    clickOpen
                }>
                <div className='details-mobile_info' 
                    onClick={(ev)=>{ev.stopPropagation()}}>
                    <div>
                        <h3 className='details-mobile_info_tiitle'> {title}</h3>   
                        {authors && <p className="details-mobile_info__text">
                            <span>Authors : </span>
                            {authors}
                        </p>}
                        <p className="details-mobile_info__text">
                            <span>Description : </span>
                            {description}
                        </p>

                        {publisher && <p className="details-mobile_info__text">
                            <span>Publisher : </span>
                            {publisher} {publishedDate}
                        </p>}

                        {language && <p className="details-mobile_info__text">
                            <span>language : </span>
                            {language}
                        </p>}
                    </div>

                    <button className='inside-page__btn' 
                        type='button' 
                        onClick={
                            ()=>{
                                clickAddBookBtn(data, id)
                            }
                        }>
                            <LibraryAddIcon sx={{fontSize:'2.5rem'}} />
                    </button>
                    <span 
                        className='btn-close' 
                        onClick={
                            clickOpen
                        } >
                        <CancelOutlinedIcon sx={{fontSize:'3rem'}} />
                    </span>
                </div>
            </div>
        </div>
    )
}