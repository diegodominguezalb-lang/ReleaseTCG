import CommunityDeckPage from "../components/CommunityDeckPage";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;

    return (
        <CommunityDeckPage
            deckId={id}
        />
    );
}