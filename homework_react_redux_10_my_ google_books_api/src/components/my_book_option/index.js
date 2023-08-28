import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LowPriorityOutlinedIcon from '@mui/icons-material/LowPriorityOutlined';
import SwitchAccessShortcutAddOutlinedIcon from '@mui/icons-material/SwitchAccessShortcutAddOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import MenuBookIcon from '@mui/icons-material/MenuBook';


export default function MyBookOption({ el, topList, endList, deleteBook }) {
   
  const [anchorEl, setAnchorEl] = useState(null);
    
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id={`${el.id}button`}
        aria-controls={open ? `${el.id}menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{fontFamily:'Inter',fontSize:'1.5rem',color:'#ffffff'}}
        onClick={handleClick}
      >
        <MenuBookIcon sx={{fontSize:'2.8rem'}}/>
        <TuneIcon sx={{fontSize:'2.8rem'}}/>
      </Button>
      <Menu
        id={`${el.id}menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `${el.id}button`,
        }}
      >
        <MenuItem
          sx={{fontFamily:'Inter'}}
          onClick={() => {
            handleClose()
            topList(el)
          }}>
          <SwitchAccessShortcutAddOutlinedIcon sx={{fontSize:'2.8rem'}}/>
         
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose()
            endList(el)
          }}>
          <LowPriorityOutlinedIcon sx={{fontSize:'2.8rem'}}/>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose()
            deleteBook(el)
          }}>
       
          <DeleteForeverIcon sx={{fontSize:'2.8rem'}}/>
        </MenuItem>
      </Menu>
    </>
  );
}