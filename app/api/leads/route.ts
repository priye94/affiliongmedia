import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Save lead to Supabase
    const { error } = await supabase.from("leads").insert([
      {
        name: body.name,
        phone: body.phone,
        email: body.email,
        message: body.message,
      },
    ]);

    if (error) {
      throw error;
    }

    // 2. Send Email notification
    await sendEmail(body);

    // 3. WhatsApp alert link (manual click automation)
    const message = `📢 New Lead Alert:
Name: ${body.name}
Phone: ${body.phone}
Email: ${body.email}
Message: ${body.message}`;

    const whatsappURL = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;

    console.log("WhatsApp Alert Link:", whatsappURL);

    return Response.json({
      success: true,
      whatsappURL,
    });
  } catch (error) {
    console.error("API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to save lead",
      },
      { status: 500 }
    );
  }
}