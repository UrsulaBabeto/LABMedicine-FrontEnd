import * as React from "react";
import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import IconButton from "@mui/material/IconButton";
import SearchComponent from "../SearchComponent/SearchComponent";

function ListaProntuarioCompoment() {
  return (
    <>
      <div>
        <h3>Utilize a barra de pesquisa para buscar</h3>
        <SearchComponent />
      </div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <Link>
                <IconButton aria-label="redirect">
                  <DoubleArrowIcon />
                </IconButton>
              </Link>
            }
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListaProntuarioCompoment;
