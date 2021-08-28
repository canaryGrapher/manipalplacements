import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true
    }).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect

// import { MongoClient } from 'mongodb';
// import nextConnect from 'next-connect';
// const client = new MongoClient(`${process.env.MONGODB_URI}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// async function database(req, res, next) {
//   if (!client.isConnected()) await client.connect();
//   req.dbClient = client;
//   req.db = client.db('MCT');
//   return next();
// }
// const middleware = nextConnect();
// middleware.use(database);
// export default middleware;