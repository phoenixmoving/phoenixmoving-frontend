interface LegalSectionHeaderProps {
  title: string;
}

export function LegalSectionHeader({ title }: LegalSectionHeaderProps) {
  return (
    <section className="bg-primary py-28">
      <div className="m-auto max-w-5xl p-4">
        <h1 className="text-primary-foreground text-4xl font-bold">{title}</h1>
      </div>
    </section>
  );
}
