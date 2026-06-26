export async function deleteDeck(
  id: string
): Promise<void> {
  const response = await fetch(`/api/decks/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete deck.");
  }
}