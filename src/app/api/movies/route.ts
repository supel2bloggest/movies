import { NextResponse } from "next/server";
import movies from "@/mock/movies.json";

export async function GET(request: Request) {
  return NextResponse.json(movies);
}
