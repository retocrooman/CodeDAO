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
    window.location.assign('CodeDAO/?address=' + address);
  }

  return (
    <>
    <Box sx={{backgroundColor:"white",borderRadius:1}}>
      <TextField 
        placeholder="0xから始まるアドレス"
        variant="outlined"
        value={address}
        onChange={onChange}
        size="small"
        sx={{width: "400px"}}
      />
    </Box>
    <IconButton color="secondary" onClick={onClick}>
      <SearchIcon sx={{height:"30px",width:"30px",color:"white"}}/>
    </IconButton>
    </>
  )
}