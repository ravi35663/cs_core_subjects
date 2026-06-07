/*
=> Motive:
    Understand how a system is built and taking a structural approach is building one.Understand core 
    infra components and how they fit.
*/

/*
==> Designing e-commerce product listing page:
->  For a small shop (100 items) design a system through which the shop owner can :
    1)  Add a new product
    2)  update/delete existing product
    3)  list all the products on the website
    4)  customer should be able to quickly access the product catalog
* Payment is out of scope for this problem statement.
*/

/*
==> start:

1) Storage:
    ->  not a huge data, only 100 rows (fits on single node) (100 * 1kb == 100 kb data)
    ->  there seems to be structured so we can go with sql DB:
    ->  'Product' table hold all the catalog 

2) Access the data (Serving the data):
    ->  Simple REST based HTTP webserver is fine
    ->  we will need many (handle core request) so we put multiple servers
    ->  hence put a load balancer
    ->  Load balancer will have DNS like api.mysore.com

Until now we have simple structure see in picture a.png:

=>  Instead of drawing Load Balancer and multiple server every time, we simply draw the above diagram as 
        ()
        /\ => [[Catalog backend service]] <--> {Catalog database}
       /  \
=>  End user will not directly interact with backend; needs frontend


        ()
        /\ <---> [[Catalog frontend service]] <--> [[Catalog backend service]] <--> {Catalog database}
       /  \

3)  Shop owner's admin interface:
    ->  Shop owner needs admin console to manage the catalog, we can keep the admin UI separate 
        frontend service which interacts with the same backend service to do admin things.

        ()
        /\ <---> [[Catalog frontend service]] <--> [[Catalog backend service]] <--> {Catalog database}
       /  \                                                     |
      [user]                                               [[Admin UI]]


Note: in real world, early stage startups would do all this in one service.
*/

/*
==> Let's understand the load on each component:
    ->  Load on backend:
        ->  Backend servers also has load balancer and api servers. Similar to other service the auto 
            policies are written to handle load.
    ->  Load on frontend: 
        ->  for high availability you can put load balancer on your frontend service, cloud provider 
            provides it.
    ->  Load on Admin ui:
        ->  for high availability you can put load balancer on your frontend service, cloud provider 
                provides it.
    ->  Load on catalog DB:

=>  Scaling db:
    ->  When a lot of load comes in, the DB will be under heavy load. Given the use case is to 
        'list the pages' the load is certainly 'Read load', hence we add Read Replica. see in picture b.png
    ->  We can add more read replica, its up to your requirement.
*/

/*
==> Exercise:
    1)  Design DB schema for this system
    2)  Write simple backend API service exposing APIs
    3)  Setup DB replication
    4)  Move read APIs to read from replica
    5) later try to implement cache
*/

