import React, { useEffect, useRef, useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

export const SearchForm = () => {
  const [address, setAddress] = useState<string>('');
  
  const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAddress(value);
  }
  const onClick = () => {
    window.location.assign('/Analytics/?address=' + address);
  }

  return (
    <>
    <Box sx={{backgroundColor:"white",borderRadius:1}}>
      <TextField 
        placeholder="0xから始まるアドレス"
        variant="outlined"
        value={address}
        onChange={onChange}
        sx={{width: "300px"}}
      />
    </Box>
    <IconButton color="secondary" onClick={onClick}>
      <SearchIcon sx={{height:"40px",width:"40px",color:"white"}}/>
    </IconButton>
    </>
  )
}