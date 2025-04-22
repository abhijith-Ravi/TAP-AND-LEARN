import { NextResponse } from "next/server";
import { login } from "../../../../firebase/authfunctions";

export async function POST(request) {
  const { email, password } = await request.json();
  const result = await login(email, password);

  if (result.error) {
    return NextResponse.json({ success: false, message: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true, user: result.user }, { status: 200 });
}
