import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabase.from("requests").insert([
      {
        message: body.message,
      },
    ]);

    if (error) {
      throw error;
    }

    return Response.json({
      success: true,
      message: "Request stored successfully",
    });
  } catch (error) {
    console.error("Request API error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to store request",
      },
      { status: 500 }
    );
  }
}