import got from "got/source";

const API_KEY = process.env.MOVIE_DB_API;

export default {
  getTrailer: async id => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
    const { body } = await got(url, { json: true });
    return body.results
      .filter(r => r.key)
      .map(r => `https://www.youtube.com/watch?v=${r.key}`);
  }
};
