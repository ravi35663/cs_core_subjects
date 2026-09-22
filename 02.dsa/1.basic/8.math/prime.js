/*
=> Sieve of Eratosthenes:

    - Efficient algorithm to find all prime numbers from 2 to n.
    - Time Complexity: O(n log log n)
    - Space Complexity: O(n)

=> Steps:
    1. Assume all numbers are prime.
    2. Mark 0 and 1 as non-prime.
    3. Start from 2 and check if it is prime.
    4. Mark all multiples of the prime as non-prime.
    5. Repeat until i * i <= n.
    6. Collect all remaining prime numbers.
*/

function generatePrimes(n) {

    // Step 1: Assume all numbers are prime
    const isPrime = new Array(n + 1).fill(true);

    // Step 2: 0 and 1 are not prime
    isPrime[0] = false;
    isPrime[1] = false;

    // Step 3: Mark multiples of each prime
    for (let i = 2; i * i <= n; i++) {

        if (isPrime[i]) {

            // Mark multiples as non-prime
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }

        }
    }

    // Step 4: Collect prime numbers
    const primes = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

// Example:
console.log(generatePrimes(20));

// Output:
// [2, 3, 5, 7, 11, 13, 17, 19]