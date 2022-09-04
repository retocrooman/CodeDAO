import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const UseCaseList = (props: {functions: string[]}) => {
  const [func, setFunc] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<Number>(1);

  useEffect(() => {
    setFunc(props.functions);
  }, [props.functions]);

  const handleListItemClick = (event: any, index: Number) => {
    setSelectedIndex(index);
  };

  const listItems = func.map((func: string, i: Number) => 
    <ListItemButton
      key={i.toString()}
      selected={selectedIndex === i}
      onClick={(event) => handleListItemClick(event, i)}
    >
      <ListItemText primary={func} />
    </ListItemButton>
  );

  return (
    <Box sx={{ width: '100%'}}>
      <List component="nav" aria-label="main mailbox folders">
        {listItems}
      </List>
    </Box>
  );
}