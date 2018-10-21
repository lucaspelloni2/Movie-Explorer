import got from "got";
import cheerio from "cheerio";
const load = cheerio.load;

const IMDB_BASE = "https://www.imdb.com";
const REFERRAL_INFO = "ref_=nv_sr_fn";

export default {
  get: async title => {
    const link = `${IMDB_BASE}/find?${REFERRAL_INFO}&q=${title}`;
    const { body } = await got(`${link}`);
    const $ = load(body);
    const root = $("table[class=findList]")
      .find("a")
      .attr("href");

    const movieLink = IMDB_BASE + root;

    return {
      movieLink,
      id: root
    };
  }
};
