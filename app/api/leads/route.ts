import { supabase } from "@/lib/supabase";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await supabase.from("leads").insert([
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      },
    ]);

    if (error) throw error;

    await sendEmail(data);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Leads API error:", error);

    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}