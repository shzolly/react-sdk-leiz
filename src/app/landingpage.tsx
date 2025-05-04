/* eslint-disable react/no-unescaped-entities */
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/loading';
import useConstellation from '../hooks/useConstellation';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const LandingPage = () => {
  const [showPega, setShowPega] = useState('Info'); // Info, Pega, Confirmation
  const isPegaReady = useConstellation();

  useEffect(() => {
    if (isPegaReady) {
      (PCore.getMashupApi().openPage('pyWorklist', 'SL-TellUsMoreRef-UIPages') as any).then(() => {});
      setShowPega('Pega');
      console.log('LandingPage-IsPegaReady', isPegaReady);
    }
  }, [isPegaReady]);

  return (
    <>
      <Header />
      <div className='flex-grow dark:bg-gray-900'>
        <section className='w-full py-6 md:py-8'>
          <div className='container grid items-start justify-start gap-4 px-4 text-left md:px-6 lg:gap-6'>
            <div className='space-y-2'>
              <h2 className='text-4xl py-4 font-bold tracking-tighter  md:text-3xl'>Pega Landing Pages Demonstration</h2>
              <p className='max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed  dark:text-gray-400'>
                Pega Landing page is found in Channels -- Portals -- Landing Pages in App Studio.
              </p>
              <ol className='list-decimal'>
                <li>Select a Landing page name that requires to load. Ex. My Work.</li>
                <li>Select Preview as 'DX API', copy the value for the “name” tag.</li>
                <li>Use PCore in React SDK: PCore.getMashupApi().openPage('pyWorklist','Data-Portal');</li>
              </ol>
              <div className='flex my-8 flex-col items-center align-middle center'>
                <img src='assets/img/landingpage.png' className='w-full h-full border border-solid border-gray-900' alt='Pega Landing Page' />
              </div>
              <p className='max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed  dark:text-gray-400'>'My Work' Landing Page will be rendered.</p>
            </div>
          </div>
        </section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
            {isPegaReady ? <div id='pega-root' className={classNames('', { hidden: showPega !== 'Pega' })} /> : <Loading />}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
