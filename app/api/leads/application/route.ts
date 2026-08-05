import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/validations";
import { notifyApplicationLead, saveApplicationLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = applicationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await saveApplicationLead(parsed.data);
  } catch (error) {
    console.error("[lead:application]", error);
    return NextResponse.json(
      { ok: false, error: `DEBUG: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }

  notifyApplicationLead(parsed.data).catch((error) =>
    console.error("[lead:application:email]", error)
  );

  return NextResponse.json({ ok: true });
}
