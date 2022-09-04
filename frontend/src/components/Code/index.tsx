import React, {useEffect, useState, ReactPropTypes} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CodeProps } from '../../types';
import { deleteComment } from '../../utils/deleteComment';
import { deleteInterface } from '../../utils/deleteInterface';
import { takeOutEvents } from '../../utils/takeOutEvent';
import { takeOutFunctions } from '../../utils/takeOutFunction';

export const Code = ({address, code}: CodeProps) => {
  const [selectCode, setSelectCode] = useState<string>('');
  const [events, setEvents] = useState<{[name:string]: string}>({});
  const [functions, setFunctions] = useState<{[name:string]: string}>({});
  const [modifiers, setModifiers] = useState<{[name:string]: string}>({});
  const [storage, setStorage] = useState<{[name:string]: string}>({});

  useEffect(() => {
    changeCode(code);
  }, [code]);

  const changeCode = async (code:string) => {
    const deleteCommentCode = await deleteComment(code);
    const fixCode = await deleteInterface(deleteCommentCode);
    const events = await takeOutEvents(fixCode);
    const functions = await takeOutFunctions(fixCode);
    setSelectCode(functions['balanceOf']);
    setEvents(events);
  }

  return (
    <Box sx={{backgroundColor:"#F0FFFF",height:"80vh",minWidth:"30vw",maxWidth:"50vw",overflow:"auto" }}>
      <Typography variant="h5">
        コード
      </Typography>
      <pre>
        <code>
          {selectCode}
        </code>
      </pre>
    </Box>
  )
}