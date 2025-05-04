import { InputAdornment, TextField } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { getComponentFromMap } from '@pega/react-sdk-components/lib/bridge/helpers/sdk_component_map';
import { PConnFieldProps } from '@pega/react-sdk-components/lib/types/PConnProps';
import StyledNjjLeizComponentLibDefendantEmailWrapper from './styles';

interface NjjLeizComponentLibDefendantEmailProps extends PConnFieldProps {
  // If any, enter additional props that only exist on this componentName
}

// Duplicated runtime code from React SDK

// props passed in combination of props from property panel (config.json) and run time props from Constellation
export default function NjjLeizComponentLibDefendantEmail(props: NjjLeizComponentLibDefendantEmailProps) {
  // Get emitted components from map (so we can get any override that may exist)
  const TextInput = getComponentFromMap('TextInput');
  const FieldValueList = getComponentFromMap('FieldValueList');

  const {
    label,
    required,
    disabled,
    value = '',
    validatemessage,
    status,
    onChange,
    onBlur,
    readOnly,
    testId,
    helperText,
    displayMode,
    hideLabel,
    placeholder
  } = props;
  const helperTextToDisplay = validatemessage || helperText;

  if (displayMode === 'LABELS_LEFT') {
    return <FieldValueList name={hideLabel ? '' : label} value={value} />;
  }

  if (displayMode === 'STACKED_LARGE_VAL') {
    return <FieldValueList name={hideLabel ? '' : label} value={value} variant='stacked' />;
  }

  if (readOnly) {
    return <TextInput {...props} />;
  }

  let testProp = {};

  testProp = {
    'data-test-id': testId
  };

  return (
    <StyledNjjLeizComponentLibDefendantEmailWrapper>
      <TextField
        fullWidth
        variant='outlined'
        helperText={helperTextToDisplay}
        placeholder={placeholder ?? ''}
        size='small'
        required={required}
        disabled={disabled}
        onChange={onChange}
        onBlur={!readOnly ? onBlur : undefined}
        error={status === 'error'}
        label={label}
        value={value}
        type='email'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <MailOutlineIcon />
            </InputAdornment>
          ),
          inputProps: { ...testProp }
        }}
      />
    </StyledNjjLeizComponentLibDefendantEmailWrapper>
  );
}
