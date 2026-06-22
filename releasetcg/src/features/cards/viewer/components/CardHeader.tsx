type Props = {
  name: string;
};

export function CardHeader({
  name,
}: Props) {
  return (
    <h3 className="text-3xl font-bold">
      {name}
    </h3>
  );
}