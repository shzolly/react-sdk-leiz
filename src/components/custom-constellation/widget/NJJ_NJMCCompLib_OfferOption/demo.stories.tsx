/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import NjjNjmcCompLibOfferOption from './index';

import configProps from './mock';

const meta: Meta<typeof NjjNjmcCompLibOfferOption> = {
  title: 'NjjNjmcCompLibOfferOption',
  component: NjjNjmcCompLibOfferOption,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof NjjNjmcCompLibOfferOption>;

export const BaseNjjNjmcCompLibOfferOption: Story = args => {
  const props = {
    ...configProps,
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
      <NjjNjmcCompLibOfferOption {...props} {...args} />
    </>
  );
};

BaseNjjNjmcCompLibOfferOption.args = {
  caption: configProps.caption,
  dialogTitle: configProps.dialogTitle,
  dialogContent: configProps.dialogContent
};
