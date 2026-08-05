import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";
import { notifyLead, saveNewsletterLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await saveNewsletterLead(parsed.data);
  } catch (error) {
    console.error("[lead:newsletter]", error);
    return NextResponse.json(
      { ok: false, error: `DEBUG: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }

  notifyLead("newsletter", parsed.data).catch((error) =>
    console.error("[lead:newsletter:email]", error)
  );

  return NextResponse.json({ ok: true });
}
