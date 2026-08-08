/*
=> What is error handling:
    -   Error handling is the process of anticipating, detecting and resolving issues during system 
        execution. It ensure that our system responds to failure gracefully without corrupting data or 
        collapsing the user experience.
*/

/*
=> What is resilience:
    -   The system's ability to absorb failure and continue operating. Robust systems recover from 
        failure, brittle(fragile) systems crash. Resilience is not about avoiding failures, but without 
        surviving it.
*/

/*
=> Robust Vs Brittle System:
    Robust System                                      Brittle System
    -   Continue or degrades gracefully                 -   Crash or freeze
    -   Netflix shows cached content if                 -   Monolithic checkout crashes if payment 
        Service is down                                     Service is low

-   Amazon checkout page: When recommendation service is fails
    -   Brittle -   Whole system crash
    -   Robust  -   Hide recommendation at checkout
*/

/*
=>  Graceful degradation Strategies:
    1)  Return cached data
    2)  Show fallback UI
    3)  Queue Requests (Queue them for sometime)
*/

// return cached data: If the external service fails, return previously cached data.
async function getUser() {
    try {
        return await userService.fetchUser();
    } catch {
        console.log("Service unavailable. Returning cached data.");
        return cache.get("user");
    }
}

// Show Fallback UI: If data cannot be fetched, return a fallback response/UI.
async function getProducts() {
    try {
        return await productService.fetchProducts();
    } catch {
        return {
            products: [],
            message: "Products are temporarily unavailable."
        };
    }
}

// Queue Requests:If a service is temporarily unavailable, put the request into a queue and process it later.
async function sendEmail(email: string) {
    try {
        await emailService.send(email);
    } catch {
        await emailQueue.add("send-email", {
            email
        });

        console.log("Email queued for later processing.");
    }
}

/*
=> Failover and Timeout strategy:
    -   Timeout:    Timeout fast to avoid long hangs : Don't wait forever.
    -   Failover:   If one is down, fall over to other: If the primary service is unavailable, 
                    use an alternative.
*/
// 1. Timeout:  Stop waiting if the downstream service takes too long:
async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    const timeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), ms)
    );

    return Promise.race([promise, timeout]);
}
async function main1(){
    const result = await withTimeout(paymentService.processPayment(), 3000);
}
//If payment takes more than 3 seconds, the request fails with a timeout.


// 2. Failover: If the primary service fails, use the backup service:
async function processPayment() {
    try {
        return await withTimeout(primaryPaymentService.process(), 3000);
    } catch {
        console.log("Primary failed. Using backup...");
        return await withTimeout(backupPaymentService.process(), 3000);
    }
}

/*
=> Summary: Engineering Checklist
    -   Temporary Spike:            :Retry with backoff
    -   Persistent failure:         :Circuit breaker
    -   Third party Delay:          :Timeout
    -   Degraded Experience:        :Fallback UI or cache
    -   Avoid flooding:             :Queue or Rate Limiting
    -   Highly critical Service:    :Failure setup 
*/