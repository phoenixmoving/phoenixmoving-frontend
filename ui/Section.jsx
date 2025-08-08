import clsx from "clsx";
import Container from "@/ui/Container";

const Section = ({ className, children, ...props }) => {
  return (
    <section
      className={clsx("relative overflow-hidden py-20 sm:py-24", className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
