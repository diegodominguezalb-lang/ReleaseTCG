type Props = {
  title: string;
  author: string;
  description: string;
};

export default function CommunityGuide({
  title,
  author,
  description,
}: Props) {
  return (
    <div className="h-full rounded-xl border bg-card p-6 flex flex-col">
      <div className="space-y-2 border-b pb-4">
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="text-sm text-muted-foreground">
          by {author}
        </p>
      </div>

      <div className="mt-6 whitespace-pre-wrap leading-7">
        {description}
      </div>
    </div>
  );
}