import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { Key } from "react";

const list = [
  {
    id: 1,
    title: "AVENGERS",
    description: "MOVIES 1",
    image: "/images/avenger-1.jpeg",
  },
  {
    id: 2,
    title: "AVENGERS AGE OF ULTRON",
    description: "MOVIES 2",
    image: "/images/avenger-2.jpeg",
  },
  {
    id: 3,
    title: "AVENGERS INFINITY WARS",
    description: "MOVIES 3",
    image: "/images/avenger-3.jpeg",
  },
  {
    id: 4,
    title: "AVENGERS END GAME",
    description: "MOVIES 4",
    image: "/images/avenger-4.jpeg",
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="mb-9">
        <h1 id="page-title" className="text-xl">
          แตะเพื่อเลือกหนังที่ท่านต้องการจอง
        </h1>
      </section>
      <section className="grid grid-cols-3 gap-3">
        {list.map((data, key) => {
          return (
            <Link key={key as Key} href={`/movies/${data.id}`}>
              <MovieCard
                id={data.id}
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
