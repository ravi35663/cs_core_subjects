/*
==> Bloom filters:
    ->  Bloom filters are approximate data structures (also probabilistic data structure) that say 
        with 100% certainty that an element does not belong to a set. 
    ->  for example:
            instagram wants to recommend reels but it does not want to recommend something you saw already.
    ->  Naive way:  keep track of everything that a user saw in a set
        u1 ->   <p1, p4, p7, p1024, 1056>
        (user)  ---------posts----------
        people watch 100s of reel every single day over time the set of all post watch by a user will 
        be huge!!
    ->  So , what?
        ->  To check the existence of a key in set we have to load the entire set in memory and then 
            check.(This is super expensive and time consuming)
    ->  So, can we do better?  
*/

/*
==> Key insight: Once something is "watched", you cannot take it back
    ->  once a post/reel is watched by you, we do not take it out of the set.
    ->  This means, storing actual data is not worth it.
    ->  This is the concept over which the bloom filters are setup.
*/

/*
==> Bloom filters:
    ->  Filter =(equivalent) = bit array =>  [, ,1, , , , , 1, ]
             (eg: we take 8-bit array)
        words i want to put in:
            here f() is a hash function:
            apple   ->  f(apple) % 8    ->  2 (place in 2nd index)
            ball    ->  f(ball) % 8     ->  6 (place in 6th index)
            cat     ->  f(cat) % 8      ->  2 (place in 2nd index)

            dog ->  f(dog) % 8  -> 5 ==> filter[5] == 0 -> that means dog does not exists!!!
            elephant    ->  f(elephant) % 8 -> 6  =>    filter[6] = 1 -> elephant may be present
    ->  Thus we see, when bloom filter says no, we can be sure 
        but when it says yes -> we still need to check:
*/

/*
==> Space Efficiency:
    ->  Bloom filters take significantly less space(because it does not store keys) to hold the 
        information and is very efficient in checking existence (just an array lookup).

==> False positivity rate:
    ->  As number of keys we put in bloom filter increases the false positivity (Says key is present 
        bit in reality it is not) rate increases. Because at some point of time all the array bit 
        become 1 and then you always receive true which is wrong. 

Hence, when # keys increases,
    1)  We have to re-create bloom filter with larger size and populate the keys again
    2)  Estimate the max keys and provision a large one to start with.

==> Practical Bloom filter :
    ->  We do not have to re-implement bloom filter, there are libraries in every single language.
        Redis has it as one of its core feature (Now a day mostly people go for this).
*/

/*
==> Practical applications of bloom filters:
    Use it whenever
        ->  You insert but not remove data
        ->  You need a No with 100% certainty
        ->  having false positivity is okay
    Example:
        medium recommendation
        feed generator
        web crawler
        Tinder feed
*/

/*
==> Exercises:
    1)  Setup Redis locally
    2)  Read Redis's documentation on floor filter
    3)  Write small code to play around with it (understand how to use it)
    4)  Try to get false positive result
    5)  Check this out: 
        https://github.com/arpitbbhayani/abloom
*/