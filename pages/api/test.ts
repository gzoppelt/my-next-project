import { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ random_number: Math.floor(Math.random() * 10) })
}

// = http:// localhost:3000/api/random-number