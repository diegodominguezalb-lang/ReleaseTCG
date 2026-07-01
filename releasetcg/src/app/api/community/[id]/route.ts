import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import { getCommunityDeck } from "@/lib/community";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  const supabase = await createClient();

  try {
    const deck = await getCommunityDeck(
      supabase,
      id
    );

    return NextResponse.json(deck);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Community deck not found.",
      },
      {
        status: 404,
      }
    );
  }
}