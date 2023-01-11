// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { states } from '@/lib/statesData';

export default function handler(req, res) {
  res.status(200).json(states);
}
