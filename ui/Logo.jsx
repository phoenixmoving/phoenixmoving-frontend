// import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

const Logo = ({ invert = true, width = 150, height = 150 }) => {
  return (
    <a href="/" title="Phoenix Moving">
      <span className="sr-only">Phoenix Moving Boston</span>
      <Image
        src={invert ? '/logos/logo.png' : '/logos/logo-white.png'}
        alt="Phoenix Moving Logo"
        width={width}
        height={height}
        priority
        // className="h-8 w-auto sm:h-10"
        className={clsx('transition-all ease-in-out duration-500 w-full', {
          'h-8 lg:h-10': invert,
          'h-10 lg:h-12': !invert,
        })}
        title="Phoenix Moving Boston"
      />
    </a>
  );
};

export default Logo;

{
  /* <img
  className={clsx('transition-all ease-in-out duration-300', {
    'h-8 lg:h-10': active,
    'h-10 lg:h-12': !active,
  })}
  src={active ? '/logos/logo.png' : '/logos/logo-white.png'}
  alt="phoenix moving logo"
/>; */
}
