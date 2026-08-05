import { NextResponse } from "next/server";
import { visaConsultationSchema } from "@/lib/validations";
import { notifyVisaLead, saveVisaLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = visaConsultationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await saveVisaLead(parsed.data);
  } catch (error) {
    console.error("[lead:visa]", error);
    return NextResponse.json(
      { ok: false, error: `DEBUG: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }

  notifyVisaLead(parsed.data).catch((error) => console.error("[lead:visa:email]", error));

  return NextResponse.json({ ok: true });
}
