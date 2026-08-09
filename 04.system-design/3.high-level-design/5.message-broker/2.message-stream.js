/*
=> Message streams are similar to message queues with a few differences.
    -> To understand, let's take an example
        say, we are building medium.com and upon every blog published, we need to index 
        it in search engine (elastic search) so that we power our search with that need 
        to do count++ for user's total blog in database (any database)

    Approach - 1: 
        We use one message broker and add logic in consumer. See in picture 
        'message-stream-a.png'consumers are doing two things : count++ and index.
        Issue:
            what if write to one succeeded but other one failed. That is our write to 
            elastic search succeeded but write to database failed or vice-versa.

    Approach-2: 
        Two brokers and two set of consumers to handle indexing in elastic search and 
        update count in database. See in picture 'message-stream-b.png'. API server 
        writes to two brokers & each has its own set of consumers.

        Issues:
            ->  This still does not solve the problem ,
            ->  When api-server writes to two RabbitMQ, one of them fails then we end up 
                in the same spot that we were in approach-1.
            ->  Hence, we want to "write to one" and "read by many" semantic.
                This is where "Message Streams"(Kafka, Kinesis) come into the picture.
*/
/*
=> Message streams:
    ->  Message streams are similar to message brokers with one change: 
    ->  Multiple types if consumers read the same message.
*/
/*
=> Approach-1: 
    -   For medium.com (Using streams and multiple types of consumers) see in the picture 
        message-stream-c.png

    -   API server pushes one message in kafka, search and counter service both reads 
        the message and does their work.

=> Message Queues Vs Message Streams:
    -> Message queue: (AWS SQS-> Simple queue service), RabbitMQ
        ->  When you sent a message in message queue, it sits in the message queue 
            one-by-one, there are multiple similar kind of consumer available to consume 
            the message from the message queue.

        ->  As result messages were delete once the job is done by the consumer.

    -> Message Streams: (Kafka, Kinesis):
        ->  I have added bunch of message in the message queue for different types of 
            consumer (Multiple counter consumer, multiple search consumer and so on..) 
            that is known as consumer groups.

        ->  Multiple consumer means multiple services deployed on different services.

        ->  In this scenario consumers start iterating over messages in the message 
            stream without deleting the message in the message stream so that other 
            type of consumers also used them.

        ->  Messages lies in Kafka Forever, you can configure the deletion.
*/
/*
=> Kafka Essentials:
    ->  Kafka is a message stream that holds the messages internally,
    ->  Kafka has topic and every topic has 'n' partitions.
    ->  Topics are used to group same kind of events
    ->  Message is sent to a topic and depending on the configured hash key it is put 
        into a partition. Within the partition, messages are ordered.\

    ->  No ordering guarantee across partitions  
    ->  Messages would be sitting in the partitions
    -> Example:
                [ --------- ]
                [ --------- ] ==> This is Topic and inside the topic there are n number of partitions
                [ --------- ] ==> In each partition you would have message in order.  

=> Limitation of Kafka:
    ->  Consumers ==  Partitions
    ->  If you have n partition then you would only run 'n' consumer.
    ->  If you have 3 partition in message stream then only 3 consumer would run.

    ->  If you add 5 consumer and partition is 3 then rest 2 consumer will not have the 
        messages because partition has one-to-one mapping. If you need to consumer 5 
        consumer then you need to have 5 partition.

    ->  If you have only 1 consumer and you would have multiple partition, then that only 
        consumer consume messages from each partition.

    ->  When you consume message from kafka, you can mark it completed so that next time 
        you read message from kafka you you will pick where you have last committed the 
        message.

    ->  Every consumer consume the message from it own pace.
*/
/*
=> Exercise:
    ->  Setup Kafka locally
    ->  Write some code to push and read message
    ->  Go through the documentation to understand its features.
*/