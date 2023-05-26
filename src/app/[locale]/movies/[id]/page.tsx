import MovieCard from "@/components/MovieCard";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid md:grid-cols-2 gap-3">
        <div className="grid place-content-center items-center">
          <MovieCard
            image={`/images/avenger-${id}.jpeg`}
            title={"AVENGERS"}
            description={"MOVIES 1"}
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl">เนื้อหา</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="my-6"></div>
          <button className="p-3 hover:opacity-80 bg-red-500 w-28">จอง</button>
        </div>
      </section>
    </main>
  );
}
