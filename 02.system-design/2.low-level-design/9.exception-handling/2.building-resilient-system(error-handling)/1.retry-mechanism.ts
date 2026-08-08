
/*
=> Retry Mechanism:
    -   Naive retry example: (if fails you keep hitting it. retrying....)
    -   Backoff strategy: Hit wait then  hit.
        -   Both of them can leads to DDOS attack in system by your code itself.
-   Be careful of DDOS on your own system. 1000 users retry every second
-       Solution:   Cap retries + Exponential backoff + circuit breaker
*/

// 1. Naive Retry: Retry immediately a fixed number of times:
async function retryRequest(
    fn: () => Promise<void>,
    retries: number
) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await fn();
            return;
        } catch (error) {
            console.log(`Attempt ${attempt} failed. Retrying...`);
        }
    }

    throw new Error("Request failed after retries");
}

// 2. Backoff Strategy: Instead of retrying immediately, wait before each retry.
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function retryWithBackoff(fn: () => Promise<void>, retries: number) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await fn();
            return;
        } catch (error) {
            if (attempt === retries) {
                throw error;
            }

            const delay = 1000 * 2 ** (attempt - 1);

            console.log(
                `Attempt ${attempt} failed. Retrying in ${delay}ms...`
            );

            await sleep(delay);
        }
    }
}

// Usage:
async function main(){
    await retryRequest(() => paymentService.process(), 3);
    /*
        Request → Fail → Retry immediately
                    ↓
                Fail → Retry immediately
                        ↓
                        Fail → Give up
    */
    await retryWithBackoff(() => paymentService.process(),4)
    /*
        Attempt 1 → Fail
                ↓ wait 1s
        Attempt 2 → Fail
                    ↓ wait 2s
        Attempt 3 → Fail
                    ↓ wait 4s
        Attempt 4 → Fail
                    ↓
                Give up    
    */
};
/*
    | Strategy    | Retry timing              |
    | ----------- | ------------------------- |
    | Naive retry | Immediately               |
    | Backoff     | Wait progressively longer |
*/

/*
=> Cap retries + Exponential backoff + circuit breaker:
    -   Think of the combination as three layers of protection:
    1) Cap Retry:
        -   Don't retry forever.
        -   Example:
                Request → Fail → Retry → Fail → Retry → Fail → STOP
                                      ↑
                                      max 3 retries
                -   const MAX_RETRIES = 3;
        -   This prevents wasting resources when the service is permanently down.

    2)  Exponential Backoff:
        -   Wait progressively longer between retries.
        -   Example:
                Retry 1 → wait 1s
                Retry 2 → wait 2s
                Retry 3 → wait 4s
                Retry 4 → wait 8s
        -   This gives the failing service time to recover and reduces pressure on it.

    3)  Circuit Breaker:
        -   If failures happen repeatedly, stop making requests temporarily.
        -   Example:
                                    failures
            Request ───────────────→ CLOSED
                                        ↓
                                too many failures
                                        ↓
                                    OPEN
                                        ↓
                                reject requests
                                        ↓
                                wait period
                                        ↓
                                HALF-OPEN
                                /        \
                            success       failure
                                ↓              ↓
                            CLOSED          OPEN
        -   Example: 
                If a payment service fails 5 times consecutively, the circuit breaker opens and your 
                application stops calling it for, say, 30 seconds.
*/

/*
=> In short:
        Cap Retries
            ↓
        Don't retry forever
    --------------------------------
        Exponential Backoff
            ↓
        Don't retry too quickly
    --------------------------------
        Circuit Breaker
            ↓
        Don't call a service that is clearly failing
*/

/*
=> Circuit Breaker:
    - Problem:  What if a downstream service (Say payment) is constantly failing?
    - Solution: Stop calling it after a threshold, wait and test again later.

    - States:
        -   Closed: Eventually working
        -   Open:   Services consistently failing
        -   Half-Open:  Test 1 - 2 times before going to closed
*/
// Here's a small TypeScript implementation showing the three states clearly:
type State  = "CLOSED" | "OPEN" | "HALF_OPEN"

class CircuitBreaker{
    private state: State = 'CLOSED'
    private failure = 0;
    constructor(private failureThreshold = 3, private resetTimeout = 5 * 1000){}

    async execute<T>(fn: ()=> Promise<T>): Promise<T>{
        // OPEN : Don't call downstream service
        if(this.state === 'OPEN'){
            throw new Error('Circuit is OPEN');
        }

        try {
            const result = await fn();
            // HALF_OPEN: service recovered:
            if(this.state == 'HALF_OPEN'){
                this.state = 'CLOSED';
                this.failure = 0;
            }
            return result;
        } catch (error) {
            this.failure++;
            //  Too many failure:
            if(this.failure >= this.failureThreshold){
                this.state = 'OPEN';
                setTimeout(()=>{
                    this.state = 'HALF_OPEN';
                },this.resetTimeout)
            }
            throw error;
        }
    }
}

async function main2(){
    const paymentBreaker = new CircuitBreaker(3, 5000);
    await paymentBreaker.execute(() => paymentService.processPayment());
}

/*
    CLOSED
    │
    │ 3 failures
    ↓
    OPEN
    │
    │ wait 5 seconds
    ↓
    HALF_OPEN
    │
    ├── success → CLOSED
    │
    └── failure → OPEN
*/

/*
=> Key idea: 
    In OPEN, we don't even make the payment-service request. This protects both our application and the 
    already-failing downstream service.
*/