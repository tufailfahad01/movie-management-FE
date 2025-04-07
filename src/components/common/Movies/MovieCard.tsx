import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MovieCardProps {
  title: string;
  publishYear: number;
  poster: string;
  id: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  publishYear,
  poster,
  id,
}) => {
  return (
    <Link
      href={"/movie/" + id}
      className="bg-[#092C39] max-w-[282px] max-h-[504px] !p-2 rounded-xl mx-auto sm:mx-0 relative"
    >
      <Image src={poster} alt={title} width={266} height={400} />
      <div className="!p-2">
        <h3>{title}</h3>
        <p className="text-sm">{publishYear}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
