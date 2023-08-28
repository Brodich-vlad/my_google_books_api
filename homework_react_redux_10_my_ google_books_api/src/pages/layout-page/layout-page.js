import  './layout-page.css';

import { Outlet, useMatch } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loader from '../../components/loader/loader';


export default function LayoutPage() {
    // Отримуємо стан.
    const { paramUrl, loader }= useSelector(state => state.fetchBooks);

   // Якщо myLibrary сторінка - змінити тему. 
   const match = useMatch('myLibrary');
 
    // Прокручуэмо сторінку в гору.
    const clickBtnTop = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return(
      
        <div className={`main_page ${match ? 'myLibrary':paramUrl.category}`}>

            <Header/>

            <h1 className='my_title'>{match ?'My Books':'Google Books'}</h1>

            <Outlet/>
           
            {<button onClick={clickBtnTop} className='btn_top'  type='button'><span>⇧</span></button>}

            <Footer/>
           {  loader && <Loader/> }
        </div>
    )
    
}