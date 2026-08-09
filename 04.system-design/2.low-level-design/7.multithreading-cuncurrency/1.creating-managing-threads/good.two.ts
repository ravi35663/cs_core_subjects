function delay(ms:number):Promise<void>{
    return new Promise((resolve)=> setTimeout(resolve,ms));
}

// Runnable interface
interface Runnable{
    run(): Promise<void>;
}

//  Implement Runnable for sending SMS:
class SMSTask implements Runnable{
    async run(): Promise<void> {
        await delay(2000);
        console.log("SMS send using runnable")
    }
}

//  Implement Runnable for sending SMS:
class EmailTask implements Runnable{
    async run(): Promise<void> {
        await delay(3000);
        console.log("Email send using runnable")
    }
}

//  Implement Runnable for sending SMS:
class ETATask implements Runnable{
    async run(): Promise<void> {
        await delay(5000);
        console.log("Calculating ETA....")
    }
}

async function main():Promise<void> {
    //  Creating Runnable object:
    const smsTask = new SMSTask();
    const emailTask = new EmailTask();
    const etaTask = new ETATask();


    console.log("Starting all tasks concurrently.......")

    console.log("Task 1 ongoing ....")
    const smsProcess = smsTask.run();

    console.log("Task 2 ongoing ....")
    const emailProcess = emailTask.run();
    
    console.log("Task 3 ongoing ....")
    const etaProcess = etaTask.run();


    // Running all tasks in parallel
    await Promise.all([
        smsProcess,emailProcess,etaProcess
    ])

    console.log("All tasks has been completed")
}

main().catch(err=> console.log("Error while completing the tasks"))