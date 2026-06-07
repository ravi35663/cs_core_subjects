/*
==> Load Balancer:
    ->  Load balancer is one of the most important component in distributed system that 
        makes it easy to scale the load horizontally.
    ->  Load balancer is only point of the contact that is whenever user want to call api, that api goes 
        through load balancer.
                [       ]   -->  [  ]
                [       ]   -->  [  ]
        ( ) ==> [       ]   -->  [  ]
        / \     [       ]   -->  [  ]
        user        LB           Servers
        
    ->  Every load-balancer has either 
        1) Static IP
                        ==> These are thing allowing clients to talk to it. (users/server)
        2) static DNS name 
    ->  Load balancer hides the #servers that are "behind" it allowing us to add as many servers 
        possible (horizontal scaling) without client knowing about it.
*/

/*
==> Request Response flow with load balancer:
    1)  Client already has ip/domain of load balance:
            eg: auth.example.com
    2)  Client make API call and it comes to load balancer:
            eg: GET auth.example.com/login
    3)  Load balancer picks one server and make the same request 
    4)  Load balancer get the response from the servers
    5)  Load balancer get the response back to the client
*/

/*
Note:
    ->  Job of the load balancer is to "balance" the load. It depends on how it (configurable) pick the server 
        to forward the request

==> Load balancer algorithm:
    1) Round Robin:
        ->  distribute the load iteratively
        ->  uniform infrastructure because each server has same RAM and other stuff.
        ->  When request come to load balance, it 1st send to 1st server, then 2nd server then 3rd and so on based on server size:
            eg:
                             [ Server -1 ] (1,4) request
                             /  
                            /
            [ Load Balancer ] -- [Server -2] (2,5) request
                             \
                              \
                              [ Server -3 ] (3,6) request
    2) Weighted Round Robin:
        ->  Distribute the load iteratively but as per weights
        ->  Non-Uniform infrastructure because some server has 4gb, 8gb and 16 gb RAM.
                              [ Server -1 ] (1,5) requests
                             /  
                            /
            [ Load Balancer ] -- [Server -3 ] (2,3,6,7) requests
                             \
                              \
                               [ Server -3 ] (4,8) requests

    3) Least Connection space:
        ->  Pick the server having the least connections from the load balancer.
        ->  Picking up server that is relatively free as compare to other servers:
        ->  When some request take less time say 2 sec and some of the take 2 minutes in that case we load 
            balance should pick that server which is free.
        ->  Use least connection space when response time has a big variance.
                              [ Server -1 ] (1,5,7) requests
                             /  
                            /
            [ Load Balancer ] -- [Server -3 ] (2,4,8,9) requests
                             \
                              \
                               [ Server -3 ] (3,6,10) requests
    
    4) Hash based routine: (random enough):
        -> Hash of some attribute (ip,user_id, url ..etc) determines which server to pick.

                              [ Server -1 ] (1,3,5) requests
                             /  
                            /
            [ Load Balancer ] -- [Server -3 ] (4) requests
                             \
                              \
                               [ Server -3 ] (2,6) requests
*/

/*
==> Key advantages of load balancer:
    1) Scalability:  You can seamlessly scale up and scale down you server according to your needs.
        ->  with more servers behind load balance, we can now handle more request:
                    [       ]   -->  [  ] 100 RPM
            ( ) ==> [       ]   -->  [  ] 100 RPM
            / \     [       ]   -->  [  ] 100 RPM
            user        LB           Servers

            -> We can handle 300 RPM  
                    [       ]   -->  [  ] 100 RPM
            ( ) ==> [       ]   -->  [  ] 100 RPM
            / \     [       ]   -->  [  ] 100 RPM
                    [       ]   -->  [  ] 100 RPM
            user        LB           Servers
            ->  We can handle 400 RPM
    2) availability:
        ->  Even if one of the servers crash, it does not take down our entire system. Load balancer will 
            forward request to other 'Healthy' servers. Improving the availability.
        ->  
                    [       ]   -->  [      ] s1
            ( ) ==> [       ]   -->  [      ] s2
            / \     [       ]   -->  [ //// ] s3
            user        LB           Servers
        ->  with s2 down, load balancer will forward any new request to s1 and s3
*/

/*
==> Exercises:
    ->  Go through AWS load balancer's documents
*/