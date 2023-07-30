import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: 800,
  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchComponent() {
  const classes = useStyles();

  const handleSearch= async()=>{
    try {
      let id;
      
        await service.Show().then((res) => {
        id = res.find((u) => u.id === id);
        !id ? setShowAlert(true) : console.log(res);
      });
    } catch (error) {
      console.error("erro");
    }
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="submit" className={classes.iconButton}  onClick={handleSearch} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}
