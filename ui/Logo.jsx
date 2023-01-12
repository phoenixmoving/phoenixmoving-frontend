import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ invert = true, width = 150, height = 150 }) => {
  return (
    <Link
      href="/"
      title="Phoenix Moving"
      className="focus:outline-none focus-visible:outline-none outline-none"
    >
      <span className="sr-only">Phoenix Moving Boston</span>
      <Image
        className="transition-all ease-in-out duration-300"
        src={invert ? '/logos/logo.png' : '/logos/logo-white.png'}
        alt="Phoenix Moving Logo"
        width={invert ? 130 : width}
        height={invert ? 130 : height}
        priority
        title="Phoenix Moving Boston"
      />
      {/* <img
        className={clsx('transition-all ease-in-out duration-500', {
          'h-8 lg:h-10': invert,
          'h-10 lg:h-12': !invert,
        })}
        src={invert ? '/logos/logo.png' : '/logos/logo-white.png'}
        alt="phoenix moving logo"
      /> */}
    </Link>
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
