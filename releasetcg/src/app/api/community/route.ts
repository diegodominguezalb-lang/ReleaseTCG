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

export async function GET() {
  const supabase = await createClient();

  try {
    const decks = await listCommunityDecks(
      supabase
    );

    return NextResponse.json(decks);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error:
          "Failed to load community decks.",
      },
      {
        status: 500,
      }
    );
  }
}