import { Redis } from "@upstash/redis";

const redis = new Redis({
	url: process.env.REDIS_URL,
	token: process.env.REDIS_TOKEN,
});

const fallbackData = () => {
	const currentDate = new Date();
	const startOfYear = new Date(currentDate.getFullYear(), 0, 1);

	return Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));
};

export const fetchDuckiesData = async () => {
	try {
		const data = await redis.get("duckies");

		return data !== null ? parseInt(data, 10) : fallbackData();
	} catch (error) {
		return fallbackData();
	}
};

export const updateDuckiesData = async (duckies) => 
	await redis.set("duckies", duckies);

