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

  const {
    name,
    email,
    phone,
    city,
    status, // "Student" | "Professional" | "Other"
    institution,
    interests, // array of pillar names
    message,
    company,
    startedAt,
  } = body || {};

  if (looksLikeSpam({ company, startedAt })) {
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmptyString(name, 200)) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!isNonEmptyString(phone, 40)) {
    return NextResponse.json({ error: "Please enter a phone number." }, { status: 400 });
  }
  if (!isNonEmptyString(city, 200)) {
    return NextResponse.json({ error: "Please enter your city and state." }, { status: 400 });
  }
  if (!isNonEmptyString(status, 50)) {
    return NextResponse.json({ error: "Please select your status." }, { status: 400 });
  }
  if (!Array.isArray(interests) || interests.length === 0) {
    return NextResponse.json({ error: "Please select at least one area of interest." }, { status: 400 });
  }
  if (!isNonEmptyString(message, 5000)) {
    return NextResponse.json({ error: "Please tell us why you'd like to join." }, { status: 400 });
  }

  try {
    await appendRow("Join Applications", [
      new Date().toISOString(),
      name.trim(),
      email.trim(),
      phone.trim(),
      city.trim(),
      status.trim(),
      (institution || "").trim(),
      interests.join(", "),
      message.trim(),
      "New",
    ]);
  } catch (err) {
    console.error("Join application submission failed:", err);
    return NextResponse.json(
      { error: "We couldn't save your application right now. Please try again shortly, or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
