import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ContractInfoProps } from '../../types';

export const ContractInfo = ({address, info}: ContractInfoProps) => {
  return (
    <Box sx={{backgroundColor:"#FAEBD7",height:"8vh"}}>
      <Typography variant="h6">
        コントラクト名: {info.name}
      </Typography>
      <Box sx={{display:"flex"}}>
        <Typography variant="h6" sx={{flexGrow: 10}}>
          アドレス: {info.address}
        </Typography>
        <Typography variant="h6" sx={{flexGrow: 1}}>
          コンパイラー: {info.compiler}
        </Typography>
      </Box>
    </Box>
  )
}