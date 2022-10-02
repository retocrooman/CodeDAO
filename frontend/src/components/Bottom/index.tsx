import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const Bottom = () => {
  return (
    <Box>
      <AppBar position="static" sx={{height: "7vh"}}>
        <Toolbar>
          <Typography variant="h5" sx={{flexGrow: 10}}>
            CodeDAO
          </Typography>
          <Typography component="a" href="https://github.com/retocrooman/CodeDAO" variant="h5" sx={{color:"white",flexGrow:1}}>
            Github
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
}