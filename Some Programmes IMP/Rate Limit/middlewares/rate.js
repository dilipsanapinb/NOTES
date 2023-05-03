const rate = (limit, time, blockedTime) => {
    // We define a new function called `rateLimit` which takes three arguments: 
    // `limit` - the maximum number of requests allowed within `time` milliseconds.
    // `time` - the duration of the time window in milliseconds.
    // `blockedTime` - the duration of the blocked period in milliseconds.

    const requests = {};
    // We create an object called `requests` to store the request history for each IP address.

    setInterval(() => {
        // We create a new interval which runs every `time` milliseconds to remove old requests from the `requests` object.

        for (const ip in requests) {
            // We loop through each IP address in the `requests` object.

            const now = Date.now();
            // We get the current timestamp.

            const timeWindow = requests[ip].timeWindow;
            // We get the start of the current time window for the IP address.

            const blockedUntil = requests[ip].blockedUntil;
            // We get the end of the blocked period for the IP address.

            requests[ip].requests = requests[ip].requests.filter((time) => {
                return time > now - timeWindow;
            });
            // We remove all requests from the `requests` array for the IP address which are older than `timeWindow` milliseconds.

            if (requests[ip].requests.length === 0) {
                requests[ip].timeWindow = now;
            }
            // If there are no requests in the current time window for the IP address, we reset the start of the time window to the current timestamp.

            if (blockedUntil && blockedUntil <= now) {
                requests[ip].blockedUntil = null;
                requests[ip].requests = [];
                requests[ip].timeWindow = now;
            }
            // If the blocked period for the IP address has ended, we reset the request count, the start of the time window, and the end of the blocked period.
        }
    }, time);
    // We set the interval to run every `time` milliseconds.

    return (req, res, next) => {
        // We return a middleware function which takes three arguments: `req`, `res`, and `next`.

        const ip = req.ip;
        // We get the IP address of the client making the request.

        const now = Date.now();
        // We get the current timestamp.

        requests[ip] = requests[ip] || { requests: [], timeWindow: now };
        // If there is no entry in the `requests` object for the IP address, we create one and initialize the `requests` array and the start of the time window.

        if (requests[ip].blockedUntil && requests[ip].blockedUntil > now) {
            const remainingTime = Math.ceil((requests[ip].blockedUntil - now) / 1000);
            res.status(429).send(`Too many requests, please try again after ${remainingTime} seconds.`);
        }
        // If the client is currently blocked, we send a 429 status code with a message indicating how long the client must wait before making more requests.

        else if (requests[ip].requests.length >= limit) {
            requests[ip].blockedUntil = now + blockedTime;
            const remainingTime = Math.ceil(blockedTime / 1000);
            res.status(429).send(`Too many requests, please try again after ${remainingTime} seconds.`);
            // If the client has reached the request limit, we block the client for the specified `blockedTime` and send a 429 status code with a message indicating how long the client must wait before making more requests
        } else {
            requests[ip].requests.push(now);
            next();
        }
    }
};

module.exports={rate}   