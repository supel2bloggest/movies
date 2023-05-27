import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import { Key } from "react";
import { useTranslations } from "next-intl";
import movies from "@/mock/movies.json";

export default function Page() {
  const t = useTranslations("HOME");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="mb-9">
        <h1 id="page-title" className="text-xl">
          {t("title")}
        </h1>
      </section>
      <section className="grid grid-cols-3 gap-3">
        {movies.map((data, key) => {
          return (
            <Link key={key as Key} href={`/movies/${data.id}`}>
              <MovieCard
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
