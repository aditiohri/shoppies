import api from "./api";

const getMoviesByTitle = async (searchTitle) => {
  try {
    const response = await api.get("", {
      params: {
        s: searchTitle,
        type: "movie",
      },
    });
    console.log(response.config.params.s)
    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
};

export default getMoviesByTitle;
