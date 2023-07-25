import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(30),
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
      let idPatient;
        await service.Show().then((res) => {
        idPatient = res.find((u) => u.id === id);
        !idPatient ? setShowAlert(true) : console.log(idPatient);
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
