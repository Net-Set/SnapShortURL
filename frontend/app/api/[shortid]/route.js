// app/api/[shortid]/route.js
import connectMongo from '../../../lib/mongodb';

import Url from '../../models/Url';

export async function GET(req, { params }) {
  await connectMongo();

  const { shortid } = params; // Extract shortid from params
  try {
    // Find the document by shortId
    const urlDoc = await Url.findOne({ shortId: shortid });

    if (urlDoc) {
      // Redirect to the original URL
      return Response.redirect(urlDoc.originalUrl, 302); // 302 for temporary redirect
    } else {
      return new Response(JSON.stringify({ error: 'URL not found' }), { status: 404 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
