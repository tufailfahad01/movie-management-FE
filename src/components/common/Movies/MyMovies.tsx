import React from "react";
import MovieCard from "./MovieCard";
import { useRouter } from "next/router";

const movies = [
  { imgUrl: "/images/movie.svg", id: 1, title: "Inception", releaseYear: 2010 },
  {
    imgUrl: "/images/movie.svg",
    id: 2,
    title: "Interstellar",
    releaseYear: 2014,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 3,
    title: "The Dark Knight",
    releaseYear: 2008,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 4,
    title: "Fight Club",
    releaseYear: 1999,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 5,
    title: "The Matrix",
    releaseYear: 1999,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 6,
    title: "Pulp Fiction",
    releaseYear: 1994,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 7,
    title: "The Godfather",
    releaseYear: 1972,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 8,
    title: "The Shawshank Redemption",
    releaseYear: 1994,
  },
  { imgUrl: "/images/movie.svg", id: 9, title: "Gladiator", releaseYear: 2000 },
  { imgUrl: "/images/movie.svg", id: 10, title: "Titanic", releaseYear: 1997 },
  {
    imgUrl: "/images/movie.svg",
    id: 11,
    title: "The Prestige",
    releaseYear: 2006,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 12,
    title: "Avengers: Endgame",
    releaseYear: 2019,
  },
  { imgUrl: "/images/movie.svg", id: 13, title: "Joker", releaseYear: 2019 },
  { imgUrl: "/images/movie.svg", id: 14, title: "Whiplash", releaseYear: 2014 },
  {
    imgUrl: "/images/movie.svg",
    id: 15,
    title: "Django Unchained",
    releaseYear: 2012,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 16,
    title: "The Lion King",
    releaseYear: 1994,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 17,
    title: "Forrest Gump",
    releaseYear: 1994,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 18,
    title: "The Social Network",
    releaseYear: 2010,
  },
  {
    imgUrl: "/images/movie.svg",
    id: 19,
    title: "Avengers: Infinity War",
    releaseYear: 2018,
  },
  { imgUrl: "/images/movie.svg", id: 20, title: "Parasite", releaseYear: 2019 },
];

const MyMovies = () => {
  const router = useRouter();
  return (
    <div className="w-[90%] mx-auto py-5 md:pt-10 md:pb-36">
      {/* Header */}
      <div className="flex justify-between mb-10 md:mb-16">
        <h1 className="text-2xl md:text-4xl font-medium flex items-center gap-2">
          My movies{" "}
          <button
            className="cursor-pointer"
            onClick={() => router.push("/create-movie")}
          >
            <img
              src="/images/Group 24.svg"
              width={"26.27px"}
              height={"26.27px"}
            />
          </button>
        </h1>
        <button className="flex items-center gap-2">
          Logout
          <img src="/images/Group.svg" width={"18px"} height={"18px"} />
        </button>
      </div>
      {/* Movies List */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8 md:mb-16">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            releaseYear={movie.releaseYear}
            imgUrl={movie.imgUrl}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="text-center">
        <a href="/" className="py-2 px-3 mx-1 font-semibold rounded-sm">
          Prev
        </a>
        <a
          href="/"
          className="py-2 px-3 mx-1 font-semibold rounded-sm bg-[#2BD17E]"
        >
          1
        </a>{" "}
        {/* active */}
        <a href="/" className="py-2 px-3 mx-1 font-semibold rounded-sm">
          2
        </a>
        <a href="/" className="py-2 px-3 mx-1 font-semibold rounded-sm">
          Next
        </a>
      </div>
    </div>
  );
};

export default MyMovies;
