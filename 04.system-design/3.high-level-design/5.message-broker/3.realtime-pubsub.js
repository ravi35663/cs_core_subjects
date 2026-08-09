/*
=> Realtime pubsub:
    ->  Both the message broker and message streams requires consumer to 'pull' the 
        messages out.
    ->  Realtime pubsub makes things reactive instead of continuous.

=> Advantages:
    ->  Consumers can pull at their own peace
    ->  Consumers do not get overwhelmed

=> Disadvantages:
    ->  Consumption lag when high ingestion.
    ->  What if we want low latency & zero lag? --> then realtime pubsub comes into the picture.

=> Realtime pubsub work:
    ->  Instead of consumers pulling the message, the message is pushed to them.
        e.g: Redis Pubsub.
    ->  This way we get really fast delivery time but it can overwhelm the consumers.
    ->  If messages push to message broker or streams with pubsub, that message sent to 
        all consumer who subscribe the pubsub event.

    ->  What if consumers receive messages faster than they could process?
    ->  Practical use case:
        ->  Message broadcast, configuration push
*/

/*
==> Exercises:
    ->  Setup redis locally
    ->  go through redis pubsub documentation
    ->  test realtime broadcast
    ->  test if it persists the message (check if new subscriber get old messages)
*/