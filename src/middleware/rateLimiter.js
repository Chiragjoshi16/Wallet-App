import ratelimiter from "../config/upstash.js";

const rateLimiter = async (req, res, next) => { 
  try {
    const { success } = await ratelimiter.limit("my-rate-limit");
    if (!success) {
      return res
        .status(429)
        .json({ message: "Rate limit exceeded. Please try again later." });
    }
    next();
  } catch (error) {
    console.log("Rate limiter error:", error);
    next(error);
  }
};

export default rateLimiter;
