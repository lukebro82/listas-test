import { NextApiRequest, NextApiResponse } from "next";
import { productsIndex, client } from "lib/algolia";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { results } = await client.search({
    requests: [
      {
        indexName: productsIndex,
        query: req.query.search as string,
      },
    ],
  });

  res.send({ message: results });
}
