import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useDispatch, useSelector } from 'react-redux';
import { changeSortAction } from '../../my_redux';


export default function Sort() {
  const { paramUrl } = useSelector(state => state.fetchBooks)
  const dispatch = useDispatch()

  const handleChange = (ev) => {
    dispatch(changeSortAction(ev.target.value))
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 150}}>
      <InputLabel sx={{fontSize:16}} id="sort-select-label">Sort</InputLabel>
      <Select
        labelId="sort-select-label"
        value={paramUrl.sort}
        onChange={handleChange}
        autoWidth
        label="Sort"
        sx={{fontSize:18}}              
      >
        <MenuItem sx={{fontSize:15, pr:7}} value={'Relevance'}>Relevance</MenuItem>
        <MenuItem sx={{fontSize:15}} value={'Newest'}>Newest</MenuItem>
      </Select>
    </FormControl>
  );
}