import { deleteMovie } from "@/pages/api/moviesApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <div className="bg-[#092C39] max-w-[282px] max-h-[504px] !p-2 rounded-xl mx-auto sm:mx-0 relative transform transition-all duration-300 ease-in-out hover:scale-102">
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          src={poster}
          alt={title}
          width={266}
          height={400}
          className="rounded-xl min-h-full"
        />
      </div>
      <div className="!p-2">
        <h3>{title}</h3>
        <p className="text-sm">{publishYear}</p>
      </div>
      <div className="absolute top-6 right-6 flex flex-col gap-4">
        <button
          className="cursor-pointer"
          onClick={() => router.push("/movie/" + id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
          </svg>
        </button>
        <button
          className="cursor-pointer"
          onClick={() => {
            deleteMovie(id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
