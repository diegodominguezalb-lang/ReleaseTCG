import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Received body:", body);

    const { id, data } = body;

    console.log("id:", id);
    console.log("data:", data);

    const supabase = await createClient();

    const { data: updated, error } = await supabase
        .from("cards")
        .update({
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

            pool: data.pool,

            image_url: data.image_url || null,
        })
        .eq("id", id)
        .select();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!updated || updated.length === 0) {
        return NextResponse.json(
            { error: "No card was updated." },
            { status: 404 }
        );
    }

    console.log("Updated rows:", updated);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}