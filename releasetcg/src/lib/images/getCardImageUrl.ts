const SUPABASE_PROJECT_URL =
  "https://nelejiwidolomftgrcjt.supabase.co";

const BUCKET = "CardImages";

export function getCardImageUrl(fileName: string | null) {
  if (!fileName) return "/placeholder.png";

  return `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${BUCKET}/${fileName}`;
}