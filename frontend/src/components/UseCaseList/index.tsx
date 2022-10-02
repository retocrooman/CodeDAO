import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const UseCaseList = (props: {functions: string[], setSelectCase: (caseName: string) => void}) => {
  const [func, setFunc] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  useEffect(() => {
    setFunc(props.functions);
    props.setSelectCase(props.functions[0]);
  }, [props.functions]);

  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
    props.setSelectCase(func[index]);
  };

  const listItems = func.map((func: string, i: number) => 
    <ListItemButton
      key={i.toString()}
      selected={selectedIndex === i}
      onClick={(event) => handleListItemClick(event, i)}
    >
      <ListItemText primary={takeOutFunction(func)} />
    </ListItemButton>
  );

  return (
    <Box sx={{ width: '100%',overflow:"auto"}}>
      <List component="nav" aria-label="main mailbox folders">
        {listItems}
      </List>
    </Box>
  );
}

const takeOutFunction = (func: string) => {
  const i = func.indexOf('(');
  return func.slice(0, i);
}