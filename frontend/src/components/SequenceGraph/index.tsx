import {createRef, useEffect, useState} from 'react';
import { Typography, Box } from '@mui/material';
import { SequenceGraphProps } from '../../types';
import mermaid from 'mermaid';
import mermaidAPI from 'mermaid/mermaidAPI';
import { deleteComment } from '../../utils/deleteComment';
import { takeOutEvents, takeOutFunctions, takeOutModifier, takeOutStorage } from '../../utils/takeOutFromCode';
import { makeChart } from '../../utils/makeChart';

export const SequenceGraph = ({code, selectCase, setSelectCode}: SequenceGraphProps) => {
  const [events, setEvents] = useState<{[name:string]: string}>({});
  const [functions, setFunctions] = useState<{[name:string]: string}>({});
  const [modifiers, setModifiers] = useState<{[name:string]: string}>({});
  const [storage, setStorage] = useState<{[name:string]: string}>({});
  const [all, setAll] = useState<{[name:string]: string}>({});
  const [array, setArray] = useState<{[name:string]: string[]}>({});
  const [chart, setChart] = useState<string>('');
  const myRef = createRef<HTMLDivElement>();

  useEffect(() => {
    handleCode(code);
  }, [code]);

  useEffect(() => {
    changeChart();
  }, [functions, modifiers, storage, selectCase]);

  useEffect(() => {
    handleMermaid();
  }, [chart]);

  const handleCode = async (code:string) => {
    code = await deleteComment(code);
    const events = await takeOutEvents(code);
    const functions = await takeOutFunctions(code);
    const modifiers = await takeOutModifier(code);
    const storage = await takeOutStorage(code);
    const all: {[name:string]: string} = {}
    Object.assign(all, events, functions, modifiers, storage);
    const array: {[name:string]: string[]} = {};
    Object.keys(all).forEach(async function(key1){
      const list: string[] = [];
      let keyCode: string = await deleteString(all[key1]);
      Object.keys(all).forEach(function(key2){
        if (key1 === key2) return;
        if (keyCode.indexOf(' '+key2+' ') !== -1) list.push(key2);
        if (keyCode.indexOf(' '+key2+'(') !== -1) list.push(key2);
        if (keyCode.indexOf(' '+key2+')') !== -1) list.push(key2);
        if (keyCode.indexOf(' '+key2+'[') !== -1) list.push(key2);
        if (keyCode.indexOf(' '+key2+';') !== -1) list.push(key2);
        if (keyCode.indexOf(' '+key2+',') !== -1) list.push(key2);
        if (keyCode.indexOf(')'+key2+',') !== -1) list.push(key2);
        if (keyCode.indexOf('('+key2+',') !== -1) list.push(key2);
        if (keyCode.indexOf('['+key2+']') !== -1) list.push(key2);
      });
      array[key1] = list;
    });
    console.log(array);
    setFunctions(functions);
    setEvents(events);
    setModifiers(modifiers);
    setStorage(storage);
    setAll(all);
    setArray(array);
  } 

  const changeChart = async () =>{
    const chartNew = `
    sequenceDiagram
    _mint ->> totalSupply: change
    _mint ->> balance: change`
    setChart(chartNew);
  }

  const handleMermaid = () => {
    const node = myRef.current;
    if (!node) return;
    node.removeAttribute('data-processed');
    var config = {
      startOnLoad:true,
      sequence:{
        width:100,
        height:40,
        useMaxWidth:false,
      },
      securityLevel:'loose' as mermaidAPI.SecurityLevel,
    };
    mermaid.initialize(config);
    (window as any).callback = function (e: any) {
      setSelectCode(all[e]);
    }
    mermaid.contentLoaded();
    mermaid.init(node);
  }

  return (
    <Box component="span" sx={{backgroundColor:"white",height:"45vh",mt:"10px"}}>
      <Typography variant="h5">
        シーケンス
      </Typography>
      <Box sx={{overflow:"auto"}}>
      {	chart &&
        <div ref={myRef} className="mermaid">
            { chart }
        </div>
      }
      </Box>
    </Box>
  )
}

const takeOutFunction = (func: string) => {
  const i = func.indexOf('(');
  return func.slice(0, i);
}

const deleteString = async (code: string) => {
  while(code.indexOf('\"') !== -1) {
    const start = code.indexOf('\"');
    let end = code.indexOf('\"', start+1)+1;
    if (end === 0) return code;
    if (code.length <= end)  end = end-1;
    code = code.slice(0, start) + code.slice(end);
  }
  while(code.indexOf('\'') !== -1) {
    const start = code.indexOf('\'');
    let end = code.indexOf('\'', start+1)+1;
    if (end === 0) return code;
    if (code.length <= end) end = end-1;
    code = code.slice(0, start) + code.slice(end);
  }
  return code;
}