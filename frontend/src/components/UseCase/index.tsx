import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { UseCaseProps } from '../../types';
import { UseCaseList } from '../UseCaseList';

export const UseCase = ({address, functions}: UseCaseProps) => {
  return (
    <Box sx={{backgroundColor:"#FFF0F5",minWidth:"10vw",maxWidth:"20vw",overflow:"auto" }}>
      <Typography variant="h5">
        ユースケース
      </Typography>
      <UseCaseList functions={functions}/>
    </Box>
  )
}