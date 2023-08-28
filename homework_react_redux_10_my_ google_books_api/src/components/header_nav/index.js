import * as React from 'react';
import { useEffect,  useState } from 'react';
import { useMatch, useNavigate } from 'react-router';

import { Tabs,Tab } from '@mui/material';

export default function HeaderNav() {
    // Навігація.
    const navigate = useNavigate();
    // Якщо  головна сторінка .  
    const match = useMatch('/');
    // Стан поточної сторінки.
    const [value, setValue] = useState(0);

    // Слідкуємо яка сторінка.
    useEffect(() => {
        if (match) {
          setValue(0)  
        }
        else setValue(1) 
        
    },[match])

    // Функція навігації.
    const location = (id) => {
        if (id === '/'&& !match) {
            navigate(id);
        }
        else if (id  === 'myLibrary' && match) {
            navigate(id);
        }
    }
    
    return (
      <div>
        <Tabs value={value}  centered >

            <Tab 
                onClick={()=>{location('/')}} 
                sx={{fontSize:'1.4rem',fontFamily:'Inter'}} 
                label="Home"/>
                
            <Tab 
                onClick={()=>{location('myLibrary')}} 
                sx={{ml:2,fontSize:'1.4rem',fontFamily:'Inter'}} 
                label="my library" />

        </Tabs>
    </div>       
  );
}