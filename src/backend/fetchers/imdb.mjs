import got from "got";
import cheerio from "cheerio";
const load = cheerio.load;

const IMDB_BASE = "https://www.imdb.com/find";
const REFERRAL_INFO = "ref_=nv_sr_fn";

export default {
  get: async film => {
    const link = `${IMDB_BASE}/?${REFERRAL_INFO}&q=${film}`;
    const { body } = await got(`${link}`);
    const $ = load(body);
    return $("table[class=findList]")
      .find("a")
      .attr("href");
  }
};
