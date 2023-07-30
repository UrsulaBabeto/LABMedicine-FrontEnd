import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from "@mui/system";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertComponent() {
  const [open, setOpen] = React.useState(false);
  const teal = {
    100: "#b2dfdb",
    200: "#80cbc4",
    400: "#26a69a",
    500: "#00796b",
    600: "#00695c",
    900: "#004d40",
  };

  const StyledButton = styled(Button)(
    ({ theme }) => ` 
      margin:20px;
      border: 1px solid ${teal[600]};
      color:${teal[600]}
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 15px;
      border-radius: 4px;
      &:hover {
        border-color: ${teal[200]};
      }
      &:active {        
        box-shadow: 0 0 0 3px ${teal[100]};
 
      `
  );

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
        <StyledButton variant="outlined" onClick={handleClick}>
        Esqueceu sua senha  clique aqui
      </StyledButton>     
    
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Em construção!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
