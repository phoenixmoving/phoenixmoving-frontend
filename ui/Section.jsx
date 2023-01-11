import clsx from 'clsx';
import Container from '@/ui/Container';

const Section = ({ className, children, ...props }) => {
  return (
    <section
      className={clsx('py-20 sm:py-24 relative overflow-hidden', className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
