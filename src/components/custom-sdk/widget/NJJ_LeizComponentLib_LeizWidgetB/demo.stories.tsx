import type { Meta, StoryObj } from '@storybook/react';

import NjjLeizComponentLibLeizWidgetB from './index';
import { historyData } from './mock';

const meta: Meta<typeof NjjLeizComponentLibLeizWidgetB> = {
  title: 'NjjLeizComponentLibLeizWidgetB',
  component: NjjLeizComponentLibLeizWidgetB,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof NjjLeizComponentLibLeizWidgetB>;

export const BaseNjjLeizComponentLibLeizWidgetB: Story = args => {
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

  return <NjjLeizComponentLibLeizWidgetB {...props} {...args} />;
};

BaseNjjLeizComponentLibLeizWidgetB.args = {};
