import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ContractInfo } from '../ContractInfo';
import { UseCase } from '../UseCase';
import { SequenceGraph } from '../SequenceGraph';
import { Code } from '../Code';
import { FlowChart } from '../FlowChart';
import { getEtherscan } from '../../hooks/useEtherscan';
import { getFunctions } from '../../hooks/useEVM';
import { Info } from '../../types';

export const Analytics = () => {
  const [address, setAddress] = useState<string>('');
  const [info, setInfo] = useState<Info>({
    address: '',
    name: '',
    license: '',
    proxy: '',
  });
  const [code, setCode] = useState<string>('');
  const [functions, setFunctions] = useState<string[]>([]);
  const [selectCase, setSelectCase] = useState<string>('');
  const [selectCode, setSelectCode] = useState<string>('');
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

  const setSelectCaseFunction = (caseName: string): void => {
    setSelectCase(caseName)
  }

  const setSelectCodeFunction = (codeName: string): void => {
    setSelectCode(codeName);
  }

  const init = async () => {
    if (address === '') return;
    const res = await getEtherscan(address);
    const info = {
      address: address,
      name: res.ContractName,
      license: res.LicenseType,
      proxy: res.Proxy,
    }
    setInfo(info);
    const code = res.SourceCode;
    setCode(code);
    const functions = await getFunctions(address);
    setFunctions(functions);
  }
  
  return (
    <Box>
      <Box sx={{bgcolor:"whitesmoke",padding:"10px",pb:"0px"}}>
        <ContractInfo address={address} info={info}/>
      </Box>
      <Box sx={{height: "81vh", display:"flex",flexDirection:"row",bgcolor:"whitesmoke",padding:"10px"}}>
        <UseCase functions={functions} setSelectCase={setSelectCaseFunction}/>
        <FlowChart code={code} selectCase={selectCase} setSelectCode={setSelectCodeFunction}/>
        <Box sx={{display:"flex",flexDirection:"column",bgcolor:"whitesmoke",height: "81vh",width:"47vw"}}>
          <Code selectCode={selectCode}/>
          <SequenceGraph code={code} selectCase={selectCase} setSelectCode={setSelectCodeFunction}/>
        </Box>
      </Box>
    </Box>
  )
}