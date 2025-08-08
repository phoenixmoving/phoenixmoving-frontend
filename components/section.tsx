import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("relative overflow-hidden py-20 sm:py-24", className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
