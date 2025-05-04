const Footer = () => {
  return (
    <footer className='p-4 mb-auto bg-white md:p-8 lg:p-10 dark:bg-gray-800'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <a href='/' className='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'>
          ESSENTIAL LINKS
        </a>
        <p className='my-6 text-gray-500 dark:text-gray-400'>Icons for ADS, ENSURING JUSTICE, Interpreter, etc.</p>
        <ul className='flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white'>
          <li>
            <a href='/' className='mr-4 hover:underline md:mr-6'>
              Home
            </a>
          </li>
          <li>
            <a href='/company' className='mr-4 hover:underline md:mr-6 '>
              For Judges
            </a>
          </li>
          <li>
            <a href='/products' className='mr-4 hover:underline md:mr-6'>
              Interpreting Services
            </a>
          </li>
          <li>
            <a href='/support' className='mr-4 hover:underline md:mr-6 '>
              Alert Sign-up
            </a>
          </li>
          <li>
            <a href='/' className='mr-4 hover:underline md:mr-6'>
              Accessibility
            </a>
          </li>
          <li>
            <a href='/' className='mr-4 hover:underline md:mr-6'>
              Staff Logins
            </a>
          </li>
          <li>
            <a href='/' className='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='/contact' className='mr-4 hover:underline md:mr-6'>
              Contact Us
            </a>
          </li>
        </ul>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2025 Made by{' '}
          <a href='https://github.com/AOC-ITO/NJMC-Pega' className='hover:underline'>
            Lei Zhong
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
