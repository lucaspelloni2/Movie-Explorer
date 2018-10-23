//

import got from "got/source";

const API_KEY = process.env.API_KEY;

export default {
  getMetaData: async id => {
    const { body } = await got(
      `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`,
      { json: true }
    );
    return body;
  }
};
