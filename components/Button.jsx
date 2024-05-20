import Link from 'next/link';
import { IoChevronForward } from 'react-icons/io5';

const Button = ({ type, href, children }) => {
  return (
    <Link
      href={href}
      className={`py-4 sm:px-16 flex sm:inline-flex justify-center items-center rounded-[100px] outline-none font-[400] uppercase no-underline transition-all duration-300 ${
        type === 'dark'
          ? 'border-[1px] border-dark bg-dark text-light hover:bg-transparent hover:text-dark'
          : 'border-[1px] border-secondary bg-secondary text-dark hover:border-light hover:bg-transparent hover:text-light'
      }`}>
      {children}
      <IoChevronForward className='ml-2' />
    </Link>
  );

  switch (type) {
    case 'dark':

    case 'secondary':
      return (
        <Link href={href} className={`${styles.button} ${styles.secondary}`}>
          {children}
          <IoChevronForward className={`${styles.icon}`} />
        </Link>
      );
  }
};

export default Button;
