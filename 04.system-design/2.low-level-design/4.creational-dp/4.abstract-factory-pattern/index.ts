/*
=>  Abstract Factory Pattern:
    -   It is extension of factory pattern.
    -   Abstract factory deals with multiple factory.
    -   A group of multiple factories wrapped inside a single interface that is 
        know as abstract factory pattern.
    -   It is a creational design pattern that provides an interface for 
        creating families of dependent objects without specifying their 
        concrete classes.
    -
*/
/*
=> Real life use-case of Abstract factory pattern:
    1. AWS / Azure / GCP → Creates cloud resources (Storage, VM, DB) per provider.
    2. JDBC / ORM (Hibernate, TypeORM) → Creates DB connections and queries for different databases.
    3. Windows / macOS UI Toolkits → Creates platform-specific buttons and inputs.
    4. Flutter Framework → Creates Android (Material) and iOS (Cupertino) widgets.
    5. Stripe / Razorpay → Creates country-wise payment and invoice systems.
    6. Netflix Cloud System → Creates region-wise cloud infrastructure services.
    7. Uber Payments System → Creates country-based billing and tax logic.
    8. Spring Framework → Creates environment-specific service beans.
    9. .NET Framework → Creates OS and database-dependent components.
    10. Terraform → Creates cloud resources via provider factories.
*/