import { useDispatch, useSelector } from 'react-redux';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { changeCtegoryAction } from '../../my_redux';

export default function Options() {
  const { paramUrl } = useSelector(state => state.fetchBooks)
  const dispatch = useDispatch()

  const handleChange = (ev) => {
    dispatch(changeCtegoryAction(ev.target.value))
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150}}>
      <InputLabel sx={{fontSize:18}} id="category-select-label">Category</InputLabel>
      <Select
        labelId="category-select-label"
        color='info'
        value={paramUrl.category}
        onChange={handleChange}
        autoWidth
          label="Category"
          sx={{fontSize:18}}      
                
      >
        <MenuItem sx={{fontSize:15, pl:14,}} value="">
          <em>All</em>
        </MenuItem>
        <MenuItem sx={{fontSize:15}} value={'Art'}>Art</MenuItem>
        <MenuItem sx={{fontSize:15}} value={'Biography'}>Biography</MenuItem>
        <MenuItem sx={{fontSize:15}} value={'History'}>History</MenuItem>
        <MenuItem sx={{ fontSize: 15 }} value={'Computers'}>Computers</MenuItem>
        <MenuItem sx={{fontSize:15}} value={'cooking'}>Cooking</MenuItem>
        <MenuItem sx={{fontSize:15}} value={'Medical'}>Medical</MenuItem>
        <MenuItem sx={{fontSize:15}} value={'Poetry'}>Poetry</MenuItem>
        <MenuItem sx={{fontSize:15}} value={'Travel'}>Travel</MenuItem>
      </Select>
    </FormControl>
  );
}