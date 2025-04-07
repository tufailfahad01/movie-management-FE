import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useRouter } from "next/router";
import Image from "next/image";
import CustomPagination from "@/components/core/CustomPagination/CustomPagination";
import EmptyState from "./EmptyState";
import { Movie } from "@/types/type";
import { fetchAllMovies } from "@/pages/api/moviesApi";
import LoadingState from "./LoadingState";
import { toast } from "react-toastify";

const MyMovies = () => {
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [page, setPage] = useState(0);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token"));
  }, [accessToken]);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await fetchAllMovies();
      setMovies(response);
      setLoading(false);
    };

    loadMovies();
  }, []);

  const router = useRouter();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {!accessToken ? (
        <></>
      ) : loading ? (
        <LoadingState />
      ) : movies?.length > 0 ? (
        <div className="w-[90%] mx-auto py-5 md:pt-10 md:pb-36">
          {/* Header */}
          <div className="md:w-[96%] flex justify-between mb-10 md:mb-16">
            <h1 className="text-2xl md:text-4xl font-semibold flex items-center gap-2">
              My movies{" "}
              <button
                className="cursor-pointer"
                onClick={() => router.push("/create-movie")}
              >
                <Image
                  alt="add-movie"
                  src={"/images/Group 24.svg"}
                  width={26}
                  height={26}
                />
              </button>
            </h1>
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                toast.success("Logged out successfully");
                localStorage.setItem("access_token", "");
                router.push("/auth/login");
              }}
            >
              Logout
              <Image
                src={"/images/Group.svg"}
                alt="logout"
                width={18}
                height={18}
              />
            </button>
          </div>

          {/* Movies List */}
          <div className="grid gap-y-5 gap-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8 md:mb-16">
            {movies
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  publishYear={movie.publishYear}
                  poster={movie.poster}
                  id={movie.id}
                />
              ))}
          </div>

          {/* Pagination */}
          <CustomPagination
            count={movies.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default MyMovies;
