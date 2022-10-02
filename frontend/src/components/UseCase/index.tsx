import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { UseCaseProps } from '../../types';
import { UseCaseList } from '../UseCaseList';

export const UseCase = ({functions, setSelectCase}: UseCaseProps) => {
  return (
    <Box sx={{backgroundColor:"white",width:"15vw"}}>
      <Typography variant="h5">
        ユースケース
      </Typography>
      <UseCaseList functions={functions} setSelectCase={setSelectCase}/>
    </Box>
  )
}