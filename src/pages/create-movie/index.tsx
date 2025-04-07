import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField/InputField";
import api from "@/services/api";
import {
  createNewMovie,
  uploadImage,
  deleteMovie,
} from "@/pages/api/moviesApi";
import { Movie } from "@/types/type";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface CreateMovieProps {
  pageTitle: string;
  mainButton: string;
  dropTitle: string;
  movieData: Movie;
}

const CreateMovie: React.FC<CreateMovieProps> = ({
  pageTitle = "Create a new movie",
  mainButton = "Submit",
  dropTitle = "Drop an image here",
  movieData,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [publishYear, setPublishYear] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [poster, setPoster] = useState<File | null | string>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPoster(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!poster) {
      toast.error("Please upload an image.");
      return;
    }
    const formData = new FormData();
    formData.append("image", poster);

    const posterUrl = movieData.poster || (await uploadImage(formData));

    if (!posterUrl) {
      toast.error("Failed to upload image. Please try again.");
    }

    if (pageTitle === "Edit") {
      editMovie(posterUrl);
    } else {
      createNewMovie(title, publishYear, posterUrl);
    }

    router.push("/");
  };

  const editMovie = async (uploadedImageUrl: string) => {
    const updatedMoviesArray = {
      title: title,
      publishYear: +publishYear,
      poster: uploadedImageUrl,
    };

    try {
      const response = await api.patch(
        "/movie/" + movieData.id,
        updatedMoviesArray
      );
      return response.data;
    } catch (error) {
    }
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("access_token"));
  }, []);

  useEffect(() => {
    if (pageTitle === "Edit") {
      setTitle(movieData?.title);
      setPublishYear(movieData?.publishYear + "");
      setPoster(movieData.poster);
      setImagePreview(movieData.poster);
    }
  }, [movieData]);

  return (
    <>
      {!accessToken ? (
        <></>
      ) : (
        <div className="space-y-20 py-20 max-w-[90%] lg:max-w-[80%] mx-auto h-screen">
          <div className="relative">
            <h1 className="text-3xl md:text-4xl font-medium">{pageTitle}</h1>
            {pageTitle === "Edit" && (
              <button
                onClick={(e) => {
                  deleteMovie(movieData.id);
                  router.push("/");
                }}
                className="absolute left-18 md:left-22 top-1 w-8 h-8 cursor-pointer"
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
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex sm:gap-6 md:gap-12 lg:gap-20 xl:gap-32 flex-col sm:flex-row"
          >
            {imagePreview ? (
              <Image
                src={imagePreview || "/images/movie.svg"}
                alt="poster"
                width={220}
                height={220}
                objectFit="cover"
                className="rounded-lg mb-6 w-auto h-auto max-w-[320px] min-h-[420px]"
              />
            ) : (
              <label
                htmlFor="upload"
                className="max-w-[300px] md:max-w-[473px] h-[380px] lg:h-[504px] w-full py-32 mb-4 bg-[#224957] border-dashed border-2 border-white rounded-lg cursor-pointer flex flex-col items-center justify-center relative"
              >
                <input
                  id="upload"
                  type="file"
                  className="opacity-0 absolute w-full h-full cursor-pointer"
                  onChange={handleFileChange}
                />
                <Image
                  src={"/images/upload.svg"}
                  width={24}
                  height={24}
                  alt="upload-image"
                />
                <p className="text-[12px] mt-2">{dropTitle}</p>
              </label>
            )}

            <div className="flex flex-col gap-8 w-full max-w-[300px]">
              <InputField
                inputId="title"
                inputPlaceholder="Title"
                inputType="text"
                handleChange={(e) => setTitle(e.target.value)}
                value={title}
              />

              <InputField
                inputId="publish-year"
                inputPlaceholder="Publishing year"
                inputType="number"
                maxWidth="216px"
                handleChange={(e) => setPublishYear(e.target.value)}
                value={publishYear}
              />
              <div className="flex w-full justify-between gap-4 mt-6">
                <Button
                  label="Cancel"
                  variant="outlined"
                  size="sm"
                  handleClick={() => router.push("/")}
                />
                <Button
                  label={mainButton}
                  type="submit"
                  size="sm"
                  loading={loading}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateMovie;
