
/*
=> ER Model:
    -   An entity relationship model represents entities, their attributes and the relationships among 
        them. It is the foundation for designing your database schema.
    
=> Why ER matters in LLD:
    -   It helps convert product requirements into data models.
    -   Bridges real world entities with database tables and object models
*/

/*
=> Problem statement:

=>  ER-Model of problem statement:
    Entity:                     Attributes:
    - User                      -   user_id(PK), name, email               
    - Merchant                  -   merchant_id(PK), business_name   
    - PaymentRequest            -   payment_req_id(PK), user_id(FK), merchant_id(FK), amount, currency, status
    - Transaction               -   trans_id(PK), payment_req_id(FK), payment_method(FK), status, time
    - Refund                    -   refund_id(PK), trans_id(PK), amount, reason
    - PaymentMethod             -   payment_method_id(PK), type(CARD, UPI, etc), details
*/
/*
=> How to design tables from requirements:
    -   Noun = Entities (User, Merchant, PaymentMethod ..etc)
    -   Properties = Columns (upi_id, user_id ..etc)
    -   Verbs/Actions = Relationships
        -   A user initiates payment
        -   A transaction belongs to a payment request
    -   Cardinality = Relationship type (One to Many, Many to One, Many to Many)
    -   Example:
            Table                       Key Relationships
            -   User                    -   One User            ->  Many payment requests
            -   Merchant                -   One Merchant        ->  Many payment request
            -   PaymentRequest          -   Many Request        ->  One User, One Merchant
            -   Transaction             -   Many Transaction    ->  One payment Request
            -   Refund                  -   Single Refund         ->  One Transaction 
            -   PaymentMethod           -   Used in many transactions
*/
/*
=>  Mapping ER (Class methods):
    -   Every tables becomes a class, every column become a field, and foreign keys become object reference.
*/
// Example:
class User {
    id: number;
    name: string;
    email: string;

    // Foreign key → Object reference
    posts: Post[] = [];

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class Post {
    id: number;
    title: string;

    // Foreign key → Object reference
    author: User;

    constructor(id: number, title: string, author: User) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}
const user = new User(1, "Ravi", "ravi@gmail.com");

const post = new Post(101, "Design Patterns", user);
user.posts.push(post);
console.log(post.author.name);
// Ravi
