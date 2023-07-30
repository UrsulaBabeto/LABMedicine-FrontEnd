import * as React from "react";
import PropTypes from "prop-types";

import ApiService  from "../../../service/ApiService/ApiService";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function CardStatistic({ icon, title, value, table }) {
  const service = new ApiService(table);
  const [currValue, setCurrValue] = React.useState(value);

  React.useEffect(() => {
    const fnc = async () => {
      service.Get().then((res) => {
        setCurrValue(res.length);
      });
    };
  });
  return (
    <Box sx={{ minWidth: 300 }} style={{margin:"30px"}}>
      <Card variant="outlined">
        <CardContent >
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            {icon}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="h4" style={{textAlign:"center"}}  color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h5"  style={{textAlign:"center"}} component="div">
            {currValue}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
export default CardStatistic;

CardStatistic.propTypes = { 
  icon: PropTypes.any,
  title: PropTypes.string,
  value: PropTypes.string,
  table: PropTypes.string,
};
