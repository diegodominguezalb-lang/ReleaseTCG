import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  try {
    const { data } = await req.json();

    const supabase = await createClient();

    const { data: inserted, error } = await supabase
      .from("cards")
      .insert({
        name: data.name,
        power: data.power,
        bulk: data.bulk,

        color1: data.color1 || null,
        color2: data.color2 || null,
        color3: data.color3 || null,
        color4: data.color4 || null,

        trait: data.trait || null,

        effect1: data.effect1 || null,
        effect2: data.effect2 || null,

        flavor_text: data.flavor_text || null,
        description: data.description || null,

        artist: data.artist || null,
        expansion: data.expansion || null,

        pool: data.pool || "draft",

        image_url: data.image_url || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      id: inserted.id,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}