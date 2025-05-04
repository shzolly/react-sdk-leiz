import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { PConnFieldProps } from '@pega/react-sdk-components/lib/types/PConnProps';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' }
];

interface NjjLeizComponentLibLeizButtonAProps extends PConnFieldProps {
  // If any, enter additional props that only exist on this componentName
  countryCode: string;
}

// props passed in combination of props from property panel (config.json) and run time props from Constellation
export default function NjjLeizComponentLibLeizButtonA(props: NjjLeizComponentLibLeizButtonAProps) {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel='SpeedDial basic example' sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
        {actions.map(action => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
}
