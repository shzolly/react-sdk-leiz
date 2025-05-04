import { useEffect, useState } from 'react';
import { Tooltip, IconButton, Link } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getComponentFromMap } from '@pega/react-sdk-components/lib/bridge/helpers/sdk_component_map';
import { PConnFieldProps } from '@pega/react-sdk-components/lib/types/PConnProps';
import StyledNjjLeizComponentLibLeizButtonBWrapper from './styles';

// IMPORTANT
// import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LanguageIcon from '@material-ui/icons/Language';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

interface NjjLeizComponentLibLeizButtonBProps extends PConnFieldProps {
  // If any, enter additional props that only exist on this componentName
  countryCode: string;
}

export const textFormatter = (value: string, validUrl: string) => {
  return <Link href={validUrl}>{value}</Link>;
};

// props passed in combination of props from property panel (config.json) and run time props from Constellation
export default function NjjLeizComponentLibLeizButtonB(props: NjjLeizComponentLibLeizButtonBProps) {
  // Get emitted components from map (so we can get any override that may exist)
  const TextContent = getComponentFromMap('TextContent');

  const { value, displayMode, countryCode = 'USA', getPConnect, testId } = props;
  const [stateList, setStateList] = useState<any[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [validUrl, setValidUrl] = useState('about:blank');
  const PConnect = getPConnect();

  // toggle showing table and getting table data
  function showHideTable() {
    setShowTable(prevShowTable => !prevShowTable);
  }

  // check if url is valid (simple)
  function validateUrl(href: string) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      href
    );
  }

  // Testing to see if value entered is valid url, if not can't use it.
  // Reason for this code is that you can NOT pass to Link component
  // a bad url, or it will error out.
  // For example: Since the value is the property field,
  // it could be entered from another component and thus as it is
  // entered (typed in), it won't be valid until it is all entered.
  // NOTE: can't have a blank value for the url as the Link element will error out
  // in App studio preview
  useEffect(() => {
    if (validateUrl(value as string)) {
      setValidUrl(value as string);
    } else {
      setValidUrl('about:blank');
    }
  }, [value]);

  // going to get data for worklist to put into a table
  // data comes from calling a PCore function to get
  // get data from a data page and a PConnect function
  // to get getContextName
  useEffect(() => {
    const dataViewName = 'D_pyStateList';
    const context = PConnect.getContextName();
    const params = { pyCountry: countryCode };

    // only retrieve table data if table is shown
    if (showTable) {
      PCore.getDataPageUtils()
        .getDataAsync(dataViewName, context, params, null, null)
        // @ts-ignore
        .then((response: any) => {
          // table requires an index or will get setExtraStackFrame error
          setStateList(
            response.data.map((entry: any, index: number) => {
              // mapping the data into the column names
              // MUST have an id/index or will get a setExtraStackFrame error
              // put a key in the table
              return {
                stateName: entry.pyLabel,
                stateCode: entry.pyStateCode,
                id: index
              };
            })
          );
        })
        .catch((error: any) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }, [PConnect, countryCode, showTable]);

  // when DISPLAY_ONLY, in this example we will just show the URL.
  if (displayMode === 'DISPLAY_ONLY') {
    const displayComp = textFormatter(validUrl, validUrl);
    return <StyledNjjLeizComponentLibLeizButtonBWrapper> {displayComp} </StyledNjjLeizComponentLibLeizButtonBWrapper>;
  }

  const localLabel = ''
    .concat(PConnect.getLocalizedValue('State list for', '', ''))
    .concat(PConnect.getLocalizedValue(` ${countryCode}`, '', ''))
    .concat(' ');

  return (
    <StyledNjjLeizComponentLibLeizButtonBWrapper>
      <div style={{ display: 'flex' }} data-testid={testId}>
        <ArrowForwardIcon />
        <TextContent displayAs='body' content={localLabel} />
        <Tooltip title={PConnect.getLocalizedValue('Click to show/hide state list', '', '')}>
          <IconButton onClick={showHideTable} style={{ padding: '0 0.25rem' }}>
            <FormatListNumberedIcon />
          </IconButton>
        </Tooltip>
        {
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <a href={validUrl} style={{ padding: '0 0.25rem' }}>
            <LanguageIcon />
          </a>
        }
      </div>
      {showTable && (
        <TableContainer component={Paper}>
          <Table aria-label="{PConnect.getLocalizedValue('State list', '', '')}">
            <TableHead>
              <TableRow>
                <TableCell>{PConnect.getLocalizedValue('State name', '', '')}</TableCell>
                <TableCell>{PConnect.getLocalizedValue('State code', '', '')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stateList.map(row => (
                <TableRow key={row.stateName}>
                  <TableCell component='th' scope='row'>
                    {row.stateName}
                  </TableCell>
                  <TableCell>{row.stateCode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </StyledNjjLeizComponentLibLeizButtonBWrapper>
  );
}
