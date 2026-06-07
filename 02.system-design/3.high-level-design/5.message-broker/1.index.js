/*
=> Synchronous Processing:
    ->  User sent the request and you immediately handle it is 'synchronous'.
    ->  Loading insta feed is synchronous
    ->  Login on website is synchronous
    ->  Payments are synchronous
    ->  Most interactions on web are synchronous
    ->  Somethings that should not be synchronous
        ->  Spinning up a virtual machine
*/
/*
=> Asynchronous Processing:
    ->  Spinning up VM (virtual machine) takes minutes, and user will not wait on the 
        same page waiting for the response.

    ->  Instead, user would love to move around and keep checking status once in a while. 
        This is asynchronous.
        
    ->  User made a request to the API server, API server register the task and sent that 
        task to broker so that broker assign that task to worker thread/process and when 
        task is done by the worker they put into the DB.
        see in the picture broker-a.png.
*/
/*
=> Message Broker/Message Queues:
    ->  Brokers help two services/applications communicate through messages.
    ->  Message Queues are also called message brokers.
    ->  We use message broker when we want to do something asynchronously.
        1)  Long running task
        2)  Trigger dependent tasks across machines
        Example:
            Video processing: Once the video is uploaded we need to convert it to 360p, 
            480p, 720p in the picture broker-b.
    -> Amazon SQS(Simple Queue Service), RabbitMQ and other message brokers out there.
*/
/*
==> Features of message broker:
    1)  Brokers help us connect different sub-systems
        ->  [........]<----->(.....Broker.....)<------>[............]

    2)  Broker act as a buffer for the messages
        ->  i.e: consumers can consume at their own pace. 
            (no synchronous load on connected system)

        ->  i.e: see in broker-c.png
            Notification system 
    3)  Brokers can retain messages for 'n' days (depends on broker you use)
    4)  Brokers can re-queue the message if not deleted.
        i.e: consumer read the message but before it could delete it, it crashed
*/
/*
=> Typical flow while using a message broker/queue:
    Example: Auto subtitle (Auto-captioning)
        See in broker-d.png
        1)  User uploads video to s3 through video service
        2)  Video service puts a message (after upload completes) to broker
        3)  and returns response to the user
            user sees upload complete
        4)  message is asynchronous read by 'captioner'
        5)  Captioner downloads the video
        6)  Captioner generates captions and updates in the DB
        7)  user now see the caption button enabled
*/  
/*
Exercise:
    1) Set up rabbitMQ locally
    2) write some code to push and read the messages
    3) go through the documentation to understand its features.
*/