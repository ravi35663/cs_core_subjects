/*
==> Consistent hashing:
    ->  One of the most amazing and popular algorithm out there and the only problem it solves is 
        'data ownership'.
    ->  We first understand consistent hashing and then look into practical implementation.
    ->  Consistent hashing provides information that who owns the data.

==> Hash based ownership:
    ->  Say, we have a load balancer and when a request comes in, it uses hash of access token to 
        decide which backed server to forward to it.
    ->  See in picture a.png
    ->  Note: Hashing logic is NOT a 'service', but just a simple code running in the load balancer's 
        code.(more of a function)
    ->  When one of the servers is taken down, then the routing function changes.
    ->  Now the requests will be evenly distributed between remaining two servers, see in picture b.png

==> Load balancers are stateless:
    ->  Because the API servers are stateless, which means every server is equally capable if 
        handling requests. It does not matter if:
            ->  Request that was handled by server 1 now starts going to server 0.
    ->  This is precisely why we see 'Hash Based Routing' as one of the most common ways of routine 
        for stateless backends
        eg: Load Balancer + API servers:
*/

/*
==> Hash based 'routing' (ownership) for distributed storage:
    ->  Instead of stateless API request, say we are having a stateful distributed storage.
        1)  Nodes stores the data
        2)  Proxy forwards the request to a node
        3)  End user/client talks to proxy
    ->  Picking which node 'owns' the data depends on the hash based ownership see in picture c.png.
    ->  Say we want to store 6 keys: k1, k2, k3, k4, k5 and k6
        k1: fn(k1) % 3 = 2
    ->  Challenge: 
        If a storage node is removed or added the proxy cannot just forward request to any arbitrary 
        node because it won't have the data. (Okay to do it when workload is stateless like API load 
        balancer)
*/

/*
==> Repartitioning:
    ->  When the number of nodes changes the proxy will change the routing function and it would now 
        become fn(k) % 2.
    ->  Now, all the keys would need to be re-evaluated and moved to the correct node. (It involves a 
        lot of data transfer)
    -> Example:
        k1 ->   fn(k1) % 3 = 2,     k4  ->  fn(k4) % 3 = 2;  
        k2 ->   fn(k2) % 3 = 0,     k5  ->  fn(k5) % 3 = 1;
        k3 ->   fn(k3) % 3 = 1,     k6  ->  fn(k6) % 3 = 0;    

        k1 ->   fn(k1) % 2 = 0,     k4  ->  fn(k4) % 2 = 0;  
        k2 ->   fn(k2) % 2 = 1,     k5  ->  fn(k5) % 2 = 1;
        k3 ->   fn(k3) % 2 = 1,     k6  ->  fn(k6) % 2 = 0;
    ->  If you look carefully we are almost doing 50% of the data transfer. This is the problem.
*/
/*
==> Can we minimize the data movement:
    ->  This is where consistent hashing comes in
==> What consistent hashing is, is an algorithm that helps in determining(who owns this data) data 
    ownership 
==> What consistent hashing is not:
    ->  It will not do data transfer for us it is not a 'service' in itself.
*/

/*
==> Hash function (SHA128) (range of [0,2^128]) given hash functions are cyclic we can visualize it 
    as a ring of integers. Every node occupies one slot in the ring, the slot is calculated by passing 
    node's IP to hash function. see in picture d.png(picture a).
->  the ring can ve modelled as a simple array and be part of proxy. see in picture d.png (picture b)
    ->  k1 -> hash -> 0 -> node to right  -> node 0
    ->  k2 -> hash -> 10 -> node to right -> node 3
->  Consistent hashing ring will only tell you the node that "should" own it.
*/

/*
==> Scaling up:
    ->  When we add a new node to the "ring" say node3 hashed to slot 1.
    ->  The keys that hashed between slot 12 and slot 1 will now be "owned" by node 2 instead of node 
        0, see in picture e.png. Other keys continue to remain at respective nodes (Minimal data 
        movement), because you are not re-hashing all the keys only some of the keys. 
    ->  Operationally, you just have to see in e.png
        1)  Snapshot node 0
        2)  Create node 3
        3)  Delete unwanted keys
*/

/*
==> Scaling down:
    ->  Say we scale down and remove node 0. All the keys that were owned by Node 0 will now be owned 
        by Node2 (next in the ring) see in picture f.png. Minimal Data transfer
    ->  Operationally,
        1)  Copy everything from NODE 0 to Node 2.
        2)  Remove node 2 from the ring.
*/

/*
==> Exercise:
    1)  Understand the consistent hashing
    2)  read the blog 'https://arpitbhayani.me/blogs/consistent-hashing'
    3)  Implement it in your favorite programming language
        the implementation just contains 2 arrays + binary search.
         
*/