import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validations";
import { notifyConsultationLead, saveConsultationLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = consultationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await saveConsultationLead(parsed.data);
  } catch (error) {
    console.error("[lead:consultation]", error);
    return NextResponse.json(
      { ok: false, error: `DEBUG: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }

  notifyConsultationLead(parsed.data).catch((error) =>
    console.error("[lead:consultation:email]", error)
  );

  return NextResponse.json({ ok: true });
}
