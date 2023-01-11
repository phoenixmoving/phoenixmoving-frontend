import clsx from 'clsx';

const SectionHeader = ({
  titleClassName,
  subtitleClassName,
  title,
  subtitle,
  start,
}) => {
  return (
    <div className={start ? 'mb-8' : 'mx-auto max-w-3xl text-center mb-[50px]'}>
      <h2
        className={clsx(
          'text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900',
          titleClassName
        )}
      >
        {title}
      </h2>
      <p
        className={clsx(
          'mt-2  sm:text-lg -tracking-[0.003em] text-gray-900',
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
