// app/api/shorten/route.js
import connectMongo from '../../../lib/mongodb';

import Url from '../../models/Url';
import { nanoid } from 'nanoid';


export async function POST(req) {
  await connectMongo();

  const { originalUrl } = await req.json();

  if (!originalUrl) {
    return new Response(
      JSON.stringify({ error: 'Original URL is required' }),
      { status: 400 }
    );
  }

  const shortId = nanoid();


  const newUrl = await Url.create({ originalUrl, shortId });
  return new Response(
    JSON.stringify({ shortUrl: `${process.env.BASE_URL}/api/${shortId}` }),
    { status: 201 }
  );
}
