// import axios from "axios";

// const BASE_URL = "https://api.jikan.moe/v4/anime";

// export const getAnimeList = (query = "naruto") =>
//   axios.get(`${BASE_URL}?q=${query}`);



import axios from "axios";

export const getAnime = () =>
  axios.get("https://api.jikan.moe/v4/anime?q=naruto");
