/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import NjjLeizComponentLibLeizWidgetA from './index';

import historyData from './mock';

const meta: Meta<typeof NjjLeizComponentLibLeizWidgetA> = {
  title: 'NjjLeizComponentLibLeizWidgetA',
  component: NjjLeizComponentLibLeizWidgetA,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof NjjLeizComponentLibLeizWidgetA>;

if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getConstants = () => {
  return {
    CASE_INFO: {
      CASE_INFO_ID: 'caseInfo.ID'
    }
  };
};

window.PCore.getLocaleUtils = () => {
  return {
    getLocaleValue: value => {
      return value;
    }
  };
};

window.PCore.getDataApiUtils = () => {
  return {
    getData: () => {
      return new Promise(resolve => {
        resolve(historyData);
      });
    }
  };
};

export const BaseNjjLeizComponentLibLeizWidgetA: Story = args => {
  const props = {
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
      <NjjLeizComponentLibLeizWidgetA {...props} {...args} />
    </>
  );
};

BaseNjjLeizComponentLibLeizWidgetA.args = {
  label: 'Case history'
};
