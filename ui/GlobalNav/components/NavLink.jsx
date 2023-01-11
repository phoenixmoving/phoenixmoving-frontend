import clsx from 'clsx';

export default function NavLink({ label, href, invert }) {
  return (
    <a
      key={label}
      href={href}
      className={clsx('font-medium relative -my-2 -mx-3 rounded-lg px-3 py-2', {
        'text-gray-900 hover:bg-palette-background': invert,
        'text-white hover:bg-palette-background/20': !invert,
      })}
    >
      {label}
    </a>
  );
}
