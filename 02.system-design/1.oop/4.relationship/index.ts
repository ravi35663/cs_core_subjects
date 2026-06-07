/*
=> Relationships Between Classes:
    ->  In Object-Oriented Programming, relationships describe how classes are 
        connected to each other.
*/
// Types of Relationships
/*
1) IS-A (Inheritance)
    ->  One class inherits another.
*/
class Animal{}
class Dog extends Animal{}
/*
    Meaning: Dog is an Animal
    Used for: Code reuse
*/
/*
2) HAS-A (Association/Composition/Aggregation):
    -> One class uses another.
*/
class Engine{}
class Car{
    engine: Engine = new Engine();
}
/*
    Meaning: Car has an Engine
    Used for: Flexibility
*/

/*
3) Association:
    ->  A general usage relationship.
*/
class Teacher{}
class Student{
    teacher: Teacher;
}
//Meaning: Student knows Teacher

/*
4) Aggregation (Weak HAS-A):
    ->  Child can exist independently of parent.
    ->  Weak means, Child class does not own the parent class.
*/
class Player{}
class Team{
    players: Player[];
}
//Meaning: Team has Players (players can live without team)

/*
5) Composition (Strong HAS-A)
    ->  Child cannot exist without parent.
    ->  Strong relationship
*/
class Heart{}
class Human{
    heart:Heart = new Heart();
}
//Meaning: Human owns Heart

/*
6) USES-A (Dependency)
    ->  Class temporarily uses another class.
*/
class Printer{}
class Report{
    print(p:Printer){}
}
//Meaning: Report uses Printer

/*
| Relationship | Keyword        | Meaning          |
| ------------ | -------------- | ---------------- |
| Inheritance  | IS-A           | Parent-child     |
| Association  | HAS-A          | Uses             |
| Aggregation  | HAS-A (weak)   | Independent life |
| Composition  | HAS-A (strong) | Dependent life   |
| Dependency   | USES-A         | Temporary use    |
*/