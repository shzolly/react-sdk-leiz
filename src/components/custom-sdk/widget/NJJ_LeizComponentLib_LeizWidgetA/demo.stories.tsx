import type { Meta, StoryObj } from '@storybook/react';

import NjjLeizComponentLibLeizWidgetA from './index';
import { historyData } from './mock';

const meta: Meta<typeof NjjLeizComponentLibLeizWidgetA> = {
  title: 'NjjLeizComponentLibLeizWidgetA',
  component: NjjLeizComponentLibLeizWidgetA,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof NjjLeizComponentLibLeizWidgetA>;

export const BaseNjjLeizComponentLibLeizWidgetA: Story = args => {
  window.PCore = {
    ...window.PCore,
    getDataApiUtils: (): any => {
      return {
        getData: (): any => {
          return new Promise(resolve => {
            resolve(historyData);
          });
        }
      };
    },
    getConstants: (): any => {
      return {
        CASE_INFO: {
          CASE_INFO_ID: 'caseInfo.ID'
        }
      };
    }
  };

  const props = {
    label: 'Case history',

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

  return <NjjLeizComponentLibLeizWidgetA {...props} {...args} />;
};

BaseNjjLeizComponentLibLeizWidgetA.args = {};
