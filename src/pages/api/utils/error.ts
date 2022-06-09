import { NextApiRequest, NextApiResponse } from "next";

import { ErrorCode } from "../enums/error";
import { logToSlack, SlackMsgType } from "./slack";

export const throwInternalServerError = async (
  endpoint: string,
  req: NextApiRequest,
  res: NextApiResponse,
  error: any
) => {
  await logToSlack({
    message: `${endpoint} 500`,
    data: error,
    type: SlackMsgType.failed,
  });

  console.error(endpoint, error);

  return res.status(500).send({
    code: ErrorCode.INTERNAL_ERROR,
    message: "A server error occurred while processing the request.",
  });
};
