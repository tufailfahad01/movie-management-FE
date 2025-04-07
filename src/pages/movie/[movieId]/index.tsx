import Loader from "@/components/common/Loader";
import CreateMovie from "@/pages/create-movie";
import api from "@/services/api";
import { Movie } from "@/types/type";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditMovie = () => {
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const [movieData, setMovieData] = useState<Movie>({
    id: "",
    poster: "",
    title: "",
    publishYear: 0,
  });

  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      const response = await api.get(`/movie/${param?.movieId}`);
      setMovieData(response.data?.data);
      setLoading(false);
    };
    if (param?.movieId) {
      fetchMovie();
    }
  }, [param?.movieId]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CreateMovie
          pageTitle="Edit"
          mainButton="Update"
          dropTitle="Drop other image here"
          movieData={movieData}
        />
      )}
    </>
  );
};

export default EditMovie;
