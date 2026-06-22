import { getCardImageUrl } from "@/lib/images/getCardImageUrl";

type Props = {
  name: string;
  image_url: string;
};

export function CardImage({
  name,
  image_url,
}: Props) {
  const src = image_url?.trim()
    ? getCardImageUrl(image_url)
    : "/placeholder.png";

  return (
    <div className="flex justify-center">
      <img
        src={src}
        alt={name}
        className="w-full max-w-[340px] rounded-xl shadow-xl object-contain"
      />
    </div>
  );
}