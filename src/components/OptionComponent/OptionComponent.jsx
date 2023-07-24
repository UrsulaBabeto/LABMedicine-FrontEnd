
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

 function OptionComponent({ name, value, value1, value2, value3, id }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel >{name}</InputLabel>
        <Select          

        
          label={name}
          onChange={handleChange}
        >
          <MenuItem id={id} value={value}>{value}</MenuItem>
          <MenuItem id={id} value={value1}>{value1}</MenuItem>
          <MenuItem id={id} value={value2}>{value2}</MenuItem>
          <MenuItem id={id} value={value3}>{value3}</MenuItem>
        
        </Select>
      </FormControl>
    </Box>
  );
}
export default OptionComponent;