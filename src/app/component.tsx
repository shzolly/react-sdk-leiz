/* eslint-disable react/no-unescaped-entities */
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/loading';
import NjjNjmcCompLibOfferOption from '../components/custom-sdk/widget/NJJ_NJMCCompLib_OfferOption/index';
import { configProps } from '../components/custom-sdk/widget/NJJ_NJMCCompLib_OfferOption/mock';

const Commponnet = () => {
  const props = {
    // image: configProps.image,
    // caption: configProps.caption,
    // dialogTitle: configProps.dialogTitle,
    // dialogContent: configProps.dialogContent,
    getPConnect: (): any => {
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
        }
      };
    }
  };

  return (
    <>
      <Header />
      <div className='flex-grow dark:bg-gray-900'>
        <section className='w-full py-6 md:py-8'>
          <div className='container grid items-start justify-start gap-4 px-4 text-left md:px-6 lg:gap-6'>
            <div className='space-y-2'>
              <h2 className='text-4xl py-4 font-bold tracking-tighter  md:text-3xl'>Constellation DX Component use case Demonstration</h2>
              <p className='max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed  dark:text-gray-400'>
                Constellation DX Component is used in both React SDK and App Designer.
              </p>
              <ul className='list-decimal'>
                <li>Create a new Constellation DX Componnent by the DX Componnent Builder.</li>
                <li>Complete the Components in both 'custom-sdk' and 'custom-constellation' folders.</li>
                <li>The Components in 'custom-sdk' will be used in React SDK; the Components in 'custom-constellation' will be used in App Studio</li>
              </ul>
              <p className='max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed  dark:text-gray-400'>
                The example below shows the componnent referenced from{' '}
                <a href='https://mui.com/material-ui/react-dialog/' target='_blank' rel='noreferrer'>
                  Material UI Dialog
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
            <NjjNjmcCompLibOfferOption
              image='assets/img/case.svg'
              caption='Click above icon to open a draggable Dialog'
              dialogTitle='Instruction Title'
              dialogContent='This is a Material UI componnent referenced from https://mui.com/material-ui/react-dialog/. This is created as a DX Component Widget that can be used in Constellation Designer.'
              {...props}
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Commponnet;
