import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
  id: number;
}

export default function MovieCard({ image, title, description }: Props) {
  return (
    <div className="grid cursor-pointer hover:-translate-y-3 hover:opacity-80 transition-transform">
      <Image src={image} height={400} width={300} alt={title} />
      <label className="title">{title}</label>
      <div className="description">{description}</div>
    </div>
  );
}
