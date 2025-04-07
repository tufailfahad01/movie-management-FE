import api from "@/services/api";

export const fetchAllMovies = async () => {
  try {
    const response = await api.get("/movie");
    if (response.data?.data) {
      return response.data?.data;
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export const createNewMovie = async (
  title: string,
  publishYear: string,
  uploadedImageUrl: string
) => {
  try {
    await api.post("/movie", {
      title: title,
      publishYear: +publishYear,
      poster: uploadedImageUrl,
    });
  } catch (err: unknown) {
    console.log(err);
  }
};

export const uploadImage = async (imageFile: FormData) => {
  try {
    const response = await api.post("/cloudinary/image", imageFile);

    if (response.status === 201 && response.data?.url) {
      return response.data?.url;
    }
    throw new Error("Failed to upload image to Cloudinary");
  } catch (error) {
    return null;
  }
};

export const deleteMovie = async (movieId: string) => {
  try {
    const response = await api.delete(`/movie/${movieId}`);
    return response;
  } catch (err) {
    console.error("Error deleting movie", err);
    throw err;
  }
};
