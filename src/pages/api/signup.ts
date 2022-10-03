import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  jwt: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(201)
    .json({ jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoaWFnby5hbG1laWRhQGVsbzcuY29tIiwibmFtZSI6IlRoaSBBbG1laWRhIiwicGxhbiI6ImludGVybWVkaWFyeSIsImlhdCI6MTUxNjIzOTAyMn0.kyuh1a5Mg5rqsZV-gIwpHSj1s8cCzSsaKGoQlfnQ16U' });
}
