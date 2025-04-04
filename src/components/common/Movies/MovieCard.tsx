import React from "react";

interface MovieCardProps {
  title: string;
  releaseYear: number;
  imgUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  releaseYear,
  imgUrl,
}) => {
  return (
    <div className="bg-[#092C39] max-w-[282px] max-h-[504px] !p-2 rounded-xl mx-auto">
      <img src={imgUrl} className="!mb-2" />
      <div className="!p-2">
        <h3>{title}</h3>
        <p className="text-sm">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
