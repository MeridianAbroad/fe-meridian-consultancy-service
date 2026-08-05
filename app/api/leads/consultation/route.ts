import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validations";
import { notifyLead, saveConsultationLead } from "@/lib/leads";

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
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  notifyLead("consultation", parsed.data).catch((error) =>
    console.error("[lead:consultation:email]", error)
  );

  return NextResponse.json({ ok: true });
}
