import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { withConfiguration, Table } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from './PConnProps';

function PaperComponent(props: PaperProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  return (
    <Draggable nodeRef={nodeRef as React.RefObject<HTMLDivElement>} handle='#draggable-dialog-title' cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

// interface for props
interface NjjNjmcCompLibOfferOptionProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  image?: string;
  caption?: string;
  dialogTitle?: string;
  dialogContent?: string;
}

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function NjjNjmcCompLibOfferOption(props: NjjNjmcCompLibOfferOptionProps) {
  const { image = '', caption = '', dialogTitle = '', dialogContent = '', getPConnect } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='space-y-4'>
        <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
          <img src={image} width='64' height='64' onClick={handleClickOpen} />
        </div>
        <h2 className='mb-4 text-2xl font-semibold tracking-tight leading-none text-gray-900 dark:text-white'>{caption}</h2>
      </div>
      <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby='draggable-dialog-title'>
        <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default withConfiguration(NjjNjmcCompLibOfferOption);
