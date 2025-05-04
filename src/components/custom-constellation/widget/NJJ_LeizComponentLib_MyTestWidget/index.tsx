import { useState, useEffect } from 'react';
import { Table, Text, withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from './PConnProps';

import StyledNjjLeizComponentLibMyTestWidgetWrapper from './styles';

import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' }
];

// interface for props
interface NjjLeizComponentLibMyTestWidgetProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
function NjjLeizComponentLibMyTestWidget(props: NjjLeizComponentLibMyTestWidgetProps) {
  const { getPConnect, label } = props;
  const pConn = getPConnect();
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const caseProp: string = PCore.getConstants().CASE_INFO.CASE_INFO_ID;
  const caseID = pConn.getValue(caseProp, '');
  const context = pConn.getContextName();

  const columns = [
    { renderer: 'date', label: pConn.getLocalizedValue('Date', '', '') },
    { renderer: 'description', label: pConn.getLocalizedValue('Description', '', '') },
    { renderer: 'user', label: pConn.getLocalizedValue('Performed by', '', '') }
  ];

  useEffect(() => {
    // @ts-ignore
    const payload = { dataViewParameters: [{ CaseInstanceKey: caseID }] };
    PCore.getDataApiUtils()
      // @ts-ignore
      .getData('D_pyWorkHistory', payload, context)
      // @ts-ignore
      .then(response => {
        setIsLoading(false);
        if (response.data.data !== null) {
          setHistory(
            response.data.data.map((entry: any, index: number) => {
              return {
                date: new Date(entry.pxTimeCreated).toLocaleString(),
                description: <Text style={{ wordBreak: 'break-word' }}>{entry.pyMessageKey}</Text>,
                user: entry.pyPerformer,
                id: index
              };
            })
          );
        } else {
          setHistory([]);
        }
      })
      .catch(() => {
        setHistory([]);
        setIsLoading(false);
      });
  }, [caseID, context]);
  return (
    <StyledNjjLeizComponentLibMyTestWidgetWrapper>
      <Table
        title={pConn.getLocalizedValue(label, '', '')}
        columns={columns}
        data={history}
        loading={isLoading}
        loadingMessage={pConn.getLocalizedValue('Loading case history', '', '')}
      />
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial ariaLabel='SpeedDial basic example' sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
          {actions.map(action => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
          ))}
        </SpeedDial>
      </Box>
    </StyledNjjLeizComponentLibMyTestWidgetWrapper>
  );
}

export default withConfiguration(NjjLeizComponentLibMyTestWidget);
