import axios from "axios";

const OMDB_URL = "http://www.omdbapi.com/";
const OMDB_API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: OMDB_URL,
  params: {
      apiKey: OMDB_API_KEY
  }
});

export default instance;