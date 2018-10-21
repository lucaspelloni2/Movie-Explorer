import got from "got";
import cheerio from "cheerio";
const load = cheerio.load;

const IMDB_BASE = "https://www.imdb.com/find";
const REFERRAL_INFO = "ref_=nv_sr_fn";

const test = "https://www.imdb.com/find?ref_=nv_sr_fn&q=prendimi&s=all";

export default {
  get: async () => {
    const { body } = await got(`${test}`);
    const $ = load(body);
    const cells = $("table[class=findList]")
      .find("a")
      .attr("href");

    return cells;
  }
};
