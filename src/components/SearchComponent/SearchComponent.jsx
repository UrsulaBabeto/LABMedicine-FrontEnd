import React from "react";
import ApiService from "../../service/ApiService/ApiService";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
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

  const service = new ApiService();
  const [data, setData] = React.useState([]);


    const fetchData = async () => {
      const data = await service.Show().then((res) => {
        id = res.find((u) => u.id === id);
        setData(data);
      });
    };
  

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search "
        inputProps={{ "aria-label": "search " }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        onClick={fetchData}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
