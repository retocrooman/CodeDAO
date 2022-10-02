import React, {useEffect, useState, ReactPropTypes} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CodeProps } from '../../types';
import hljs from 'highlight.js/lib/core';
import hljsDefineSolidity from 'highlightjs-solidity';
import 'highlight.js/styles/atom-one-light.css';
import './Code.css';

hljsDefineSolidity(hljs);
hljs.initHighlightingOnLoad();

export const Code = ({selectCode}: CodeProps) => {
  useEffect(() => {
    hljs.initHighlighting();
  });

  return (
    <Box sx={{backgroundColor:"white",height:"35vh",overflow:"auto"}}>
      <Typography variant="h5">
        コード
      </Typography>
      <Box sx={{overflow:"auto"}}>
      <pre className="Pre">
        <code className='solidity'>
          {selectCode}
        </code>
      </pre>
      </Box>
    </Box>
  )
}