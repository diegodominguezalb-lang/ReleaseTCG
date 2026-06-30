import CommunityDeckPage from "./components/CommunityDeckPage";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({
  params,
}: Props) {
  const { id } = await params;

  return (
    <CommunityDeckPage
      deckId={id}
    />
  );
}