import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ContractInfo } from '../ContractInfo';
import { UseCase } from '../UseCase';
import { SequenceGraph } from '../SequenceGraph';
import { Code } from '../Code';
import { getEtherscan } from '../../hooks/useEtherscan';
import { getFunctions } from '../../hooks/useEVM';
import { Info } from '../../types';

export const Analytics = () => {
  const [address, setAddress] = useState<string>('');
  const [info, setInfo] = useState<Info>({
    address: '',
    name: '',
    compiler: '',
  });
  const [code, setCode] = useState<string>('');
  const [functions, setFunctions] = useState<string[]>([]);
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  
  useEffect(() => {
    if(!query.get('address')) return;
    const address = query.get('address') as string;
    setAddress(address);
  }, []);

  useEffect(() => {
    init();
  }, [address]);

  const init = async () => {
    if (address === '') return;
    const res = await getEtherscan(address);
    const info = {
      address: address,
      name: res.ContractName,
      compiler: res.CompilerVersion,
    }
    setInfo(info);
    const code = res.SourceCode;
    setCode(code);
    const functions = await getFunctions(address);
    setFunctions(functions);
  }
  
  return (
    <Box>
      <ContractInfo address={address} info={info}/>
      <Box sx={{display:"flex",flexDirection:"row"}}>
        <UseCase address={address} functions={functions}/>
        <SequenceGraph address={address}/>
        <Code address={address} code={code}/>
      </Box>
    </Box>
  )
}