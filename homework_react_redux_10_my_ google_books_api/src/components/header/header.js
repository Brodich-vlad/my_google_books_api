import './header.css';

import React from 'react';
import { Link, useMatch } from 'react-router-dom';

import Options from '../options';
import MainSesrch from '../main_search';
import Sort from '../sort';
import HeaderNav from '../header_nav';


export default function Header(){

    // Якщо не головна сторінка приховати опції. 
    const match = useMatch('/');

    return(
        <header className='header'>
   
            <div className='header_wrapper'>

                <nav className='header_nav'>
                    <Link to={'/'} className='header_logo'>VB <span>My Google Books API</span> </Link>

                    <HeaderNav/>
                </nav>
                { match && <div className='header_options'>
                
                    <MainSesrch/>
                    <div className='header_options_wrapper'>
                        <Options/>
                        <Sort />
                    </div>
                
                </div>}
            </div>

        </header>
    )
}