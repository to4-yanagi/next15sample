import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'yanagi-next-sample',
  apiKey: process.env.API_KEY,
});