/*
==> Big Data processing:
    ->  When one machine is not enough to process the data, we divide and conquer -> this essentially 
        is Big data processing!
    ->  Companies use this to process massive amount of data and extract insights out of it, train ML 
        models, move data across databases and much more.
    ->  When too much data needs to be processed quickly, we use big data tool
    ->  **All these fancy processing on commodity hardware(you can find these hardware on clouds).
*/

/*
==> Counting word frequently:
    ->  Given a 1TB text data set find frequency of each word.

==> Approach 1: Simple
    ->  Load data on one machine (disk)
    ->  Read it character by character
        ->  update it in in-memory hash table (word_freq[word] +=1 )
        ->  do count++ 
    ->  This is a simple approach that runs in O(n) time complexity.
    ->  But because of only one machine is doing it, it will take a long time so can we parallelized them?
    ->  Yes, add threads:
*/

/*
==> Approach 2: Threads:
    ->  You can easily parallelize the code, each thread can handle a chunk of the file/dataset and 
        can do words_freq[word] +=1
    ->  But, what if dataset is not 1TB but 100TB???
        ->  Something that does not fit on a single machine(big data or smaller hardware), or even if it did
            it is slow to compute
        ->  Thread are bounded by CPU Cores
        ->  Limited computational capabilities of underlying hardware.
    ->  Instead of one machine, can we distribute the workload across multiple machine (often smaller) machine
        ->  and leverage parallelism
*/

/*
==> Approach 3:
    ->  More computers, more CPUs, more processing
    ->  idea:
        split the file into 'partitions', distribute the partition across all servers, let each server
        compute word freq independently, send word frequency to one server [coordinator] and it 
        distribute across the machines. see in picture a.png.
    ->  user submits the job to 'coordinator' coordinator distributes the job across multiple machines
        Machines compute and send result to coordinator, coordinator merges and return.
*/

/*
==> Challenges:
    1)  What about failures
    2)  What about completion
    3)  What about recovery
    4)  What about scaling and distribution
->  Although, we can always do it on our own, but if there tools to manage this for us...adopt it

==> Big Data Tools manages these complexities for us: (we just write the business logic)
    ->  Distributes across machines
    ->  Knowing which machines are doing what
    ->  Retrying in case of failure
    ->  reprocessing in case of crashes or corruption
    ->  cleaning up the resources once job is complete.
*/

/*
==> Spark and flink:
    ->  Large scale data processing on commodity hardware, it has connectors to a lot of databases 
        and infra components.
    ->  eg:
        combine user, order, payments and logistics DBs and put the result in AWS Redshift. see in picture b.png.
    ->  Eg:
        When any activity is happening, events are streamed to Kafka. In realtime enrich the events 
        and put them in analytics DB to track in realtime. see in picture c.png
*/
/*
Note:
    There are plethora (tons of) of tools available, each solving a niche problem.(But the overall concepts remains the same)
    ->  It is easy to get overwhelmed by the ecosystem..but
*/

/*
==> Exercise: (Refer to any series on youtube and get started)
    ->  Set upp spark locally
    ->  Take some sample datasets
    ->  Write spark jobs to process the data
        -> Recommend sales data [lots of stats and analytics]
    ->  Write a spark job that:
        1)  read from kafka (each event has user id)
        2)  for each event if goes to user db to get details
        3)  Spark job should enrich and dump data on disk as JSON file
    ->  Eg:
        Kafka event BLOG_PUBLISHED (Topic)
            payload <user_id,blog_id>
        user detail in user db {name,email, bio}
        output:
            {
                user_id,blog_id,
                user:{
                    name,email,bio
                }
            }
*/