import { algoliasearch } from "algoliasearch";

const appID = "3BGK3ZUZHS";
const apiKey = "ab1bcdcdb6982249591f1906f4180a51";

export const client = algoliasearch(appID, apiKey);
