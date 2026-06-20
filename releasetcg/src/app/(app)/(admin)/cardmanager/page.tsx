import { getCards } from "./utils/getCards";
import { CardManager } from "./CardManager";

export default async function Page() {
    const cards = await getCards();

    return (
        <CardManager cards={cards} />
    );
}