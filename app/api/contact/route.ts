import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_KEY!
    );

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
    console.error(error);

    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}