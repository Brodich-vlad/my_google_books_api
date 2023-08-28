import './my_library.css';

import { useSelector } from 'react-redux';

import { createIdKey } from '../../methods';

import MyLibraryBook from '../my_library_book/my_library_book';

export default function MyLibrary() {
    // Отримуємо стан.
    const myLibrary = useSelector(state => state.myLibrary.myLibrary);

    // Функція відображення інфо. на сторінку.
    const showMyLibrary = (data) => {
        const arr = data.map((el,i) => {
            return (
                <li className='library_list_item' key={createIdKey(i)}>
                    <MyLibraryBook data={el}/>     
                </li>
            )
        })
        return arr;
    };
    
 
    return(
        <main className='my_library'>
           { 
                <ul className='library_list'>
                    {myLibrary.length === 0 ? 
                        <li className='library_list_item'>
                            <h2 className='my_library_title_second'>You have no saved books.</h2>
                        </li> :
                        showMyLibrary(myLibrary)
                    }
                </ul>
                
            }
        </main>
    )
}