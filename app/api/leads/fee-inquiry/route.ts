import { NextResponse } from "next/server";
import { feeInquirySchema } from "@/lib/validations";
import { notifyLead, saveLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = feeInquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    await saveLead("fee_inquiry", parsed.data);
  } catch (error) {
    console.error("[lead:fee-inquiry]", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  notifyLead("fee_inquiry", parsed.data).catch((error) =>
    console.error("[lead:fee-inquiry:email]", error)
  );

  return NextResponse.json({ ok: true });
}
