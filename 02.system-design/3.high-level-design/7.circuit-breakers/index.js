/*
==> Circuit Breakers:
    ->  Circuit breakers prevent 'CASCADING FAILURE'!!
    ->  CASCADING Failure is failure in one, leads to failure in another leads to failure in other and so on.
        This is known as Cascading failure.That is failure Cascaded downwards.
    ->  Say, you're building a social network that servers feed for a user.
        1)  User's request comes to feed service
        2)  Feed service pulls some info from recommendation some from trending
        3)  Recommendation and trending both relies on profile service
                -> to get profile details of user who made the post
        4)  Recommendation and trending depends on post service
                ->  to get details of the post
    -> To understand more see in the picture cb-a.png:
        ->  There are lots of other services that depends on profile service.
        ->  If profile service DB is overwhelmed !! it slow down the profile service and transitively 
            all services which are depends on profile service are affected
        ->  "Timeouts" [higher response times]
*/ 

/*
==> Because of above thing there will be twi things occurs:
    1)  Complete outage
    2)  Unresponsiveness (Poor user experience)

==> To Prevent these issues:
    idea:   
        what if we make call to a service, only if it is healthy?
    ->  This is what circuit breaker is that is we break the circuit down when we see the failure cascade.
    ->  Circuit breakers prevent entire product from collapsing by preventing cascade failure.
*/

/*
==> How circuit breaker is implemented?
    ->  A common database holds the settings for each breaker that is service is healthy or not.
    ->  Services, before making calls to others, check the configuration
        ->  cache the config to avoid checking the DB.
    ->  See in the image: cb-b.png
    ->  In case of outage:
        The circuit is tripped DB updated, services will periodically check and stop sending request to 
        affected services.   
    ->  BottleNeck:
        what is you config db get overwhelmed?, to resolve this use can cache the data of db into each 
        apis servers.
*/

/*
==> Exercise:
    ->  Implement a simple circuit breaker (DB) (see if you can use Redis pubsub)
    ->  Write simple service that checks this setting every time before calling:
        e.g:
            Post service servers post
            profile service servers profile
            post service call profile for info
            if circuit is tripped do not make call to profile.
*/