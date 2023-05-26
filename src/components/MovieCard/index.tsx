import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function MovieCard({ image, title, description }: Props) {
  return (
    <div className="grid cursor-pointer hover:-translate-y-3 hover:opacity-80 transition-transform">
      <Image
        src={image}
        height={700}
        width={400}
        priority={true}
        alt={title}
      />
      <label className="title">{title}</label>
      <div className="description">{description}</div>
    </div>
  );
}
