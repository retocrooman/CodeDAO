import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {SearchForm} from '../SearchForm'

export const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={{height: "60px"}}>
        <Toolbar>
          <Typography variant="h3" sx={{flexGrow: 1}}>
            CodeDAO
          </Typography>
          <Typography component="a" href="/CodeDAO" variant="h5" sx={{color:"yellow",flexGrow:1}}>
            Home
          </Typography>
          <Typography component="a" href="https://github.com/retocrooman/CodeDAO" variant="h5" sx={{color:"yellow",flexGrow:20}}>
            Github
          </Typography>
          <SearchForm/>
        </Toolbar>
      </AppBar>
    </Box>
    )
}