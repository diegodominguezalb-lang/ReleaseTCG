import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import {
  updateDeck,
  deleteDeck,
  getDeck,
} from "@/lib/decks";

import type { Deck } from "@/types/decks";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

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
    const updated = await updateDeck(
      supabase,
      user.id,
      id,
      deck
    );

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update deck." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

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
    await deleteDeck(
        supabase,
        user.id, 
        id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete deck." },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

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

  try {
    const deck = await getDeck(
      supabase,
      user.id,
      id
    );

    return NextResponse.json(deck);
  } catch {
    return NextResponse.json(
      { error: "Deck not found." },
      { status: 404 }
    );
  }
}