import { NextResponse } from "next/server";
import movies from "@/mock/movies.json";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const id = params.id;
  const movie = movies.find((data) => data.id === Number(id));

  return NextResponse.json(movie);
}
