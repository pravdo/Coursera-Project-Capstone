import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

const MUIdialog = ({hasUser}) => {
  return (
    <>
         <Dialog
           open={!hasUser}
           aria-labelledby="alert-dialog-title"
           aria-describedby="alert-dialog-description"
         >
           <DialogTitle id="alert-dialog-title">
             {"You should have account to order and reserve !"}
           </DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-description">
              You don't have an account for Little Lemon Restaurant ,
              I recommend to sign in for use this app.
             </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button autoFocus ><Link to='/login'>Sign in</Link></Button>
             <Button  >
             <Link to='/'>Home</Link>
             </Button>
           </DialogActions>
         </Dialog>   
    </>
  )
}

export default MUIdialog