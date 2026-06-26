import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import {
  createDeck,
  listDecks,
} from "@/lib/decks";

import type { Deck } from "@/types/decks";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const decks = await listDecks(
        supabase,
        user.id,
    );

    return NextResponse.json(decks);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load decks." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const deck = (await request.json()) as Deck;

  try {
    const savedDeck = await createDeck(
      supabase,
      user.id,
      deck
    );

    return NextResponse.json(savedDeck, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create deck." },
      { status: 500 }
    );
  }
}