import { NextResponse } from "next/server";
import { appendRow } from "@/lib/googleSheets";
import { isValidEmail, isNonEmptyString, looksLikeSpam } from "@/lib/validate";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, company, startedAt } = body || {};

  if (looksLikeSpam({ company, startedAt })) {
    // Respond as if it worked so bots don't learn anything from the response.
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmptyString(name, 200)) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!isNonEmptyString(subject, 300)) {
    return NextResponse.json({ error: "Please enter a subject." }, { status: 400 });
  }
  if (!isNonEmptyString(message, 5000)) {
    return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  }

  try {
    await appendRow("Contact Submissions", [
      new Date().toISOString(),
      name.trim(),
      email.trim(),
      subject.trim(),
      message.trim(),
      "New",
    ]);
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json(
      { error: "We couldn't save your message right now. Please try again shortly, or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
