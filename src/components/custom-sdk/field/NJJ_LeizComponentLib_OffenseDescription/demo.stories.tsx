import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import NjjLeizComponentLibOffenseDescription from './index';
import { configProps, fieldMetadata } from './mock';

const meta: Meta<typeof NjjLeizComponentLibOffenseDescription> = {
  title: 'NjjLeizComponentLibOffenseDescription',
  component: NjjLeizComponentLibOffenseDescription,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof NjjLeizComponentLibOffenseDescription>;

export const BaseNjjLeizComponentLibOffenseDescription: Story = args => {
  const [value, setValue] = useState(configProps.value);

  const props = {
    value,
    placeholder: configProps.placeholder,
    fieldMetadata,
    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: (propName, theValue) => {
              setValue(theValue);
            }
          };
        },
        getStateProps: () => {
          return { value: '.name' };
        }
      };
    },
    onChange: event => {
      setValue(event.target.value);
    },
    onBlur: () => {
      return configProps.value;
    }
  };

  return <NjjLeizComponentLibOffenseDescription {...props} {...args} />;
};

BaseNjjLeizComponentLibOffenseDescription.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  displayMode: configProps.displayMode,
  validatemessage: configProps.validatemessage
};
