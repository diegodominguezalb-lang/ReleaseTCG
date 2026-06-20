type CardSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function CardSection({
  title,
  children,
}: CardSectionProps) {
  return (
    <section className="rounded-xl border p-6 space-y-4">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      {children}
    </section>
  );
}