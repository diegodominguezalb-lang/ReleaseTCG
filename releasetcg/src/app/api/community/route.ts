import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import { createCommunityDeck, listCommunityDecks } from "@/lib/community";

export async function POST(
  request: Request
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const {
    deck,
    title,
    description,
  } = await request.json();

  try {
    const communityDeck =
      await createCommunityDeck(
        supabase,
        user.id,
        deck,
        title,
        description
      );

    return NextResponse.json(
      communityDeck
    );
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error:
          "Failed to publish deck.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const supabase = await createClient();

  const { searchParams } = new URL(request.url);

  const search = searchParams.get("search") ?? "";
  const filter = (searchParams.get("filter") ?? "newest") as
    | "newest"
    | "popular"
    | "mine";

  const decks = await listCommunityDecks({
    supabase,
    search,
    filter,
  });

  return NextResponse.json(decks);
}