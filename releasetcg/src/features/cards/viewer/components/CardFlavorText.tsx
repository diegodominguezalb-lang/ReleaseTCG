type Props = {
  flavor_text: string;
};

export function CardFlavorText({
  flavor_text,
}: Props) {
  if (!flavor_text) {
    return null;
  }

  return (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold">
        Flavor Text
      </h3>

      <blockquote className=" italic text-muted-foreground">
        {flavor_text}
      </blockquote>
    </section>
  );
}