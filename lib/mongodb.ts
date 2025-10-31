const MONGODB_URI =
	process.env.MONGODB_URI || "mongodb://localhost:27017/hrfm-church";

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable");
}

interface MongooseCache {
	conn: any | null;
	promise: Promise<any> | null;
}

declare global {
	// eslint-disable-next-line no-var
	var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
	global.mongoose = cached;
}

async function dbConnect() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = (async () => {
			const mongooseModule = await import("mongoose");
			const mongoose = mongooseModule.default || mongooseModule;

			const opts = {
				bufferCommands: false,
			};

			await mongoose.connect(MONGODB_URI, opts);
			return mongoose;
		})();
	}

	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		throw e;
	}

	return cached.conn;
}

export default dbConnect;
