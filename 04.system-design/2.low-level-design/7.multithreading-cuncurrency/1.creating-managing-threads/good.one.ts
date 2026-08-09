function delay(ms:number):Promise<void>{
    return new Promise((resolve)=> setTimeout(resolve,ms));
}

class SMSTask{
    async run():Promise<void>{
        await delay(2000)
        console.log("SMS sent.")
    }
}

class EmailTask{
    async run(): Promise<void>{
        await delay(3000)
        console.log("Email sent.")
    }
}

class ETACalculation{
    async run():Promise<void>{
        await delay(5000)
        console.log("ETA Calculated. 35 minutes");
    }
}

async function main(){
    const smsTask = new SMSTask();
    const emailTask = new EmailTask()
    const etaTask = new ETACalculation();

    console.log("Tasks started....")

    console.log("Task 1 ongoing...")
    const smsPromise = smsTask.run();

    console.log("Task 2 ongoing...")
    const emailPromise = emailTask.run();

    console.log("Task 3 ongoing...")
    const etaPromise = etaTask.run();

    // Wait for all
    await Promise.all([ smsPromise, emailPromise, etaPromise ])

    console.log("All tasks completed...")
}

main().catch(err=> console.log("Error while running the promised",err))

/*
=> All the tasks will be completed with max of any waiting time. That is 5 sec not 10 sec

*/ 