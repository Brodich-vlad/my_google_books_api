import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { styled, alpha } from '@mui/material/styles';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { changeSearchAction } from '../../my_redux';


export default function MainSesrch() {
    const dispatch = useDispatch();

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        color:'#ffffff',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },

        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 1),
        color:'#ffffff',
        right:'0',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        fontWeight:'600',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:'5'
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 5, 1, 1),
            width: '100%',
        },
    }));

    const[inputValue, setInputValue] = useState('')

    const changeInput = (event) => {
        event.preventDefault()
        setInputValue(event.target.value)
        console.log(event.target.value)
    }

    const clickSearch = (ev) =>{
        dispatch(changeSearchAction(ev))
        setInputValue('')
    }

    return (
        <>
            <Search sx={{fontSize:'2rem'}}>
                <SearchIconWrapper>
                    <IconButton type="button" sx={{ p: '1px' }} aria-label="filled-search" onClick={()=>{clickSearch (inputValue)}}>
                        <SearchIcon  sx={{fontSize:'2.5rem',color:'#ffffff'}}/>
                    </IconButton>
                </SearchIconWrapper>
                <StyledInputBase
                    autoFocus ={true}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search'}}
                    sx={{ fontSize: '1.8rem' }} 
                    type='search'
                    value={inputValue}
                    onChange={changeInput}
                />
            </Search>
        </>
    )
}