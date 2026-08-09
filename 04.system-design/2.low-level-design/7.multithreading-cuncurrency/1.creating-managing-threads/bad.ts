/*Creating and managing threads*/
/*
=> Problem Statement:
    1) Place Order -> Send SMS -> Send Email -> ETA
*/
// Naive approach to do this job is:
function delay(ms: number): Promise<void>{ // This will add ms second delay
    return new Promise(res=> setTimeout(res,ms));
}

async function sendSMS(): Promise<void>{
    await delay(2000)
    console.log("SMS send");
}

async function sendEmail(): Promise<void>{
    await delay(3000)
    console.log("Email send");
}

async function calculateETA(): Promise<string>{
    await delay(5000)
    console.log("SMS send");
    return "25 minutes"
}

async function orderService():Promise<void>{
    console.log("Placing order:!!!")

    // Send SMS
    await sendSMS()
    console.log("Task 1 done")

    // Send email
    await sendEmail()
    console.log("Task 2 done")

    // Calculate ETA:
    const eta = await calculateETA();
    console.log("Order placed. ETA is: ",eta);
    console.log("Task 3 done")
}


// Main function:
async function main(): Promise<void>{
    await orderService()
}

main();

/*
=> Output:
 - all the above jobs done in sequence that took, 2 sec, 3 sec and 5 sec: total 10 sec
*/