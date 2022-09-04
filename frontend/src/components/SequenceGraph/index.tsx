import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { SequenceGraphProps } from '../../types';
import Mermaid from '../Mermaid';
import chart from '../Chart';

export const SequenceGraph = ({address}: SequenceGraphProps) => {
  return (
    <Box component="span" sx={{backgroundColor:"#F5F5DC",minWidth:"30vw",maxWidth:"50vw",flexGrow:"10",overflow:"auto"}}>
      <Mermaid chart={chart}/>
    </Box>
  )
}