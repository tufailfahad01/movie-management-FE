import api from "@/services/api";
import { toast } from "react-toastify";

const handleError = (err: unknown) => {
  const errorMessage =
    err instanceof Error ? err.message : "An unexpected error occurred.";
  toast.error(errorMessage);
};

export const fetchAllMovies = async () => {
  try {
    const response = await api.get("/movie");
    if (response.data?.data) {
      return response.data?.data;
    }
  } catch (err: unknown) {
    toast.error("Something went wrong. ");
  }
};

export const createNewMovie = async (
  title: string,
  publishYear: string,
  uploadedImageUrl: string
) => {
  try {
    await api.post("/movie", {
      title,
      publishYear: +publishYear,
      poster: uploadedImageUrl,
    });
    toast.success("Movie created successfully.");
  } catch (err: unknown) {
    handleError(err);
  }
};

export const uploadImage = async (imageFile: FormData) => {
  try {
    const response = await api.post("/cloudinary/image", imageFile);

    if (response.status === 201 && response.data?.url) {
      return response.data?.url;
    }
    toast.error("Failed to upload image to Cloudinary");
  } catch (err: unknown) {
    handleError(err);
    return null;
  }
};

export const deleteMovie = async (movieId: string) => {
  try {
    const response = await api.delete(`/movie/${movieId}`);
    toast.success("Movie Deleted Successfully");
    return response;
  } catch (err: unknown) {
    handleError(err);
  }
};
