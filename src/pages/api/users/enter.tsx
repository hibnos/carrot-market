import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    console.log("GET", req.body.email);
    res.status(400).end;
  }
  console.log("POST", req.body.email);
  res.status(200).end;
}
