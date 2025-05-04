/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import NjjLeizComponentLibLeizButtonB from './index';
import { configProps } from './mock';

const meta: Meta<typeof NjjLeizComponentLibLeizButtonB> = {
  title: 'NjjLeizComponentLibLeizButtonB',
  component: NjjLeizComponentLibLeizButtonB,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof NjjLeizComponentLibLeizButtonB>;

if (!window.PCore) {
  window.PCore = {};
}

const statelistData = {
  data: [
    {
      pyLabel: 'Massachusetts',
      pyStateCode: 'MA'
    },
    {
      pyLabel: 'Rhode Island',
      pyStateCode: 'RI'
    },
    {
      pyLabel: 'Connecticut',
      pyStateCode: 'CT'
    }
  ]
};

window.PCore.getDataPageUtils = () => {
  return {
    getDataAsync: () => {
      return new Promise(resolve => {
        resolve(statelistData);
      });
    }
  };
};

export const BaseNjjLeizComponentLibLeizButtonB: Story = args => {
  const props = {
    countryCode: configProps.countryCode,
    getPConnect: () => {
      return {
        getValue: value => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: value => {
          return value;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {
              /* nothing */
            },
            triggerFieldChange: () => {
              /* nothing */
            }
          };
        },
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  return (
    <>
      <NjjLeizComponentLibLeizButtonB {...props} {...args} />
    </>
  );
};

BaseNjjLeizComponentLibLeizButtonB.args = {
  countryCode: configProps.countryCode
};
