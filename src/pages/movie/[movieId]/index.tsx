import CreateMovie from "@/pages/create-movie";
import api from "@/services/api";
import { Movie } from "@/types/type";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditMovie = () => {
  const param = useParams();
  const [movieData, setMovieData] = useState<Movie>({
    id: "",
    poster: "",
    title: "",
    publishYear: 0,
  });

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api.get(`/movie/${param?.movieId}`);
      setMovieData(response.data?.data);
    };
    if (param?.movieId) {
      fetchMovie();
    }
  }, [param?.movieId]);
  return (
    <>
      <CreateMovie
        pageTitle="Edit"
        mainButton="Upload"
        dropTitle="Drop other image here"
        movieData={movieData}
      />
    </>
  );
};

export default EditMovie;
