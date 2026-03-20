import { app, initPromise } from '../backend/server';

// Ensure all middleware/routes are mounted before handling any request
export default async function handler(req: any, res: any) {
  await initPromise;
  return app(req, res);
}