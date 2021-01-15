import instance from "./api";

const getMoviesByTitle = async (searchTitle) => {
  try {
    const response = await instance.get("", {
      params: {
        s: searchTitle,
        type: "movie",
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
};

export default getMoviesByTitle;
