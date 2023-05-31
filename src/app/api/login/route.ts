import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  if (data.username === "admin" && data.password === "admin") {
    return NextResponse.json({
      id: 9999,
      username: "admin",
    });
  }

  return NextResponse.json(null);
}
