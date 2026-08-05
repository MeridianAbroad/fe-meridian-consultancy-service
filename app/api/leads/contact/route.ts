import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { notifyContactLead, saveContactLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await saveContactLead(parsed.data);
  } catch (error) {
    console.error("[lead:contact]", error);
    return NextResponse.json(
      { ok: false, error: `DEBUG: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }

  notifyContactLead(parsed.data).catch((error) => console.error("[lead:contact:email]", error));

  return NextResponse.json({ ok: true });
}
