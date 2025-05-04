/* eslint-disable react/no-unescaped-entities */
import Header from './components/header';
import Footer from './components/footer';
import useConstellation from '../hooks/useConstellation';
import { useEffect, useState } from 'react';
import { IJourney } from '../types/types';
import Loading from './components/loading';

const Company = () => {
  const isPegaReady = useConstellation();
  const [journeys, setJourneys] = useState<IJourney[]>([]);

  console.log('IsPegaReady', isPegaReady);

  useEffect(() => {
    if (isPegaReady) {
      const company = 'SweetLife';
      const endpointUrl = `/api/SweetLifeService/v1/company/${company}`;
      console.log('endpointUrl', endpointUrl);
      const { invokeCustomRestApi } = PCore.getRestClient();
      invokeCustomRestApi(endpointUrl, {
        method: "POST",
        body: {},
        headers: {},
        withoutDefaultHeaders: false,
      }, 'companyjourney')
      .then((response) => {
        // handle the response
        console.log('invokeCustomRestApi response: ', response);
        setJourneys(response.data)
      })
      .catch((error) => {
        // handle the error
        console.log('invokeCustomRestApi error: ', error);
      });
    }
  }, [isPegaReady]);


  return (
    <>
      <Header />
      <div className='flex-grow dark:bg-gray-900'>
        <section className='w-full py-6 md:py-8'>
          <div className='container grid items-start justify-start gap-4 px-4 text-left md:px-6 lg:gap-6'>
            <div className='space-y-2'>
              <h2 className='text-4xl py-4 font-bold tracking-tighter  md:text-3xl'>Custom REST call by using PCore Demonstration</h2>
              <p className='max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed  dark:text-gray-400'>
                PCore.getRestClient.invokeCustomRestApi()
              </p>
              <ol className='list-decimal'>
                <li>Create a REST Service in Pega (regardless of Constellation).</li>
                <li>This SDK will utilize the current AuthType to authorize.</li>
                <li>The response list is rendered by Journey map when page is loaded.</li>
                <li>it can be also called by click event.</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
      {isPegaReady ? (
      <div className='flex-grow dark:bg-gray-900'>
        {journeys.map(journey => (
        <section key={journey.pyGUID} className='w-full py-12 md:py-16 '>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
              <div className='space-y-4'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 dark:bg-gray-700'>{journey.Label}</div>
                <h2 className='text-3xl font-bold tracking-tighter  md:text-5xl'>{journey.Title}</h2>
                <p className='max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed  dark:text-gray-400'>
                  {journey.Content}
                </p>
              </div>
              <img
                alt={journey.Title}
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                height={200}
                src={journey.ImageURL}
                width={300}
              />
            </div>
          </div>
        </section>
        ))}

        <section className='w-full py-12 md:py-16'>
          <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-6'>
            <div className='space-y-2'>
              <h2 className='text-4xl py-4 font-bold tracking-tighter  md:text-3xl'>More about us</h2>
              <p className='max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed  dark:text-gray-400'>
                With a focus on quality and innovation, Sweet Life Inc. has carved a niche in the premium sweets market, delighting customers with an
                exquisite range of chocolate bon bons. Our dedication to excellence is reflected in our three state-of-the-art factories across the
                globe where our signature treats are meticulously crafted. Employing a diverse team of 600 talented individuals, we take pride in our
                presence in 25 countries, bringing the taste of Sweet Life to connoisseurs worldwide!
              </p>
              <div className='flex my-8 flex-col items-center align-middle center'>
                <img src='assets/img/cupcake.svg' className='w-32 h-32' />
              </div>
              <p className='max-w-[600px] text-lg text-gray-500 md:text-xl/relaxed  dark:text-gray-400'>
                At Sweet Life Inc., we are committed to creating unforgettable experiences through our delectable confections. Our passion for
                crafting the perfect chocolate bon bons drives us to constantly innovate and push the boundaries of flavor and quality. Each bite of
                our sweets is a testament to our dedication to perfection and our unwavering commitment to customer satisfaction. As a company deeply
                rooted in tradition yet constantly evolving, we strive to maintain the highest standards of quality and ethical practices. From
                sourcing the finest ingredients to implementing sustainable production methods, we prioritize both the planet and the people we serve.
                With a rich history and a global presence, Sweet Life Inc. invites you to indulge in the sweet moments that define our brand and
                experience the timeless delight of our handcrafted chocolates.
              </p>
            </div>
          </div>
        </section>
        <div id='pega-root' />
      </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
};

export default Company;
