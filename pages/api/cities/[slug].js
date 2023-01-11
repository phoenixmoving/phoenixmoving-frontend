// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cities } from '@/lib/citiesData';

export default function handler(req, res) {
  const { slug } = req.query;
  const city = cities.find((c) => c.slug === slug);

  if (city) {
    res.status(200).json({ city: city });
  } else {
    res.status(500).send({ error: 'failed to fetch data' });
  }
}
