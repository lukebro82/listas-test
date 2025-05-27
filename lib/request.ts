import { NextApiRequest } from "next";

export function getOffsetAndLimitFromReq(
  req: NextApiRequest,
  maxLimit,
  maxOffset
) {
  const queryLimit = parseInt(req.query.limit as string);
  const queryOffset = parseInt(req.query.offset as string);

  const limit = queryLimit <= 100 ? queryLimit : maxLimit;
  const offset = queryOffset < maxOffset ? queryOffset : 0;

  return {
    limit,
    offset,
  };
}
