import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  jwt: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
  // return res.status(401)
  //   .json({});
  return res.status(201)
  .json({ jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoaWFnby5hbG1laWRhQGVsbzcuY29tIiwibmFtZSI6IlRoaSBBbG1laWRhIiwiaWF0IjoxNTE2MjM5MDIyfQ.OU4Nc2aTWsXTYTIVZ8bb8haJBkvYz27IXokZCCO4y-I' })
}
