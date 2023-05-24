import MovieCard from "@/components/MovieCard";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid grid-cols-3 gap-3">
        <MovieCard
          id={id}
          image={`/images/avenger-${id}.jpeg`}
          title={"AVENGERS"}
          description={"MOVIES 1"}
        />
      </section>
    </main>
  );
}
