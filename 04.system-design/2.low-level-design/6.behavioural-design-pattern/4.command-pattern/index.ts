/*
=> Command pattern:
    -   The Command Pattern is another behavioral design pattern. While the Strategy Pattern focuses on 
        choosing different algorithms, the Command Pattern focuses on encapsulating a request (action) 
        into an object.
    -   The Command Pattern converts a request into an object.

    -   This lets you add features like undo, redo, logging, and dynamic command execution without 
        changing the core business logic.

    -   Instead of calling a method directly::
            orderService.createOrder(order);
    -   You create an object that represents the action:
            const command = new CreateOrderCommand(order);
            command.execute();
*/
/*
=>  Four key components of command pattern:
    - Client
    - Invoker
    - Command
    - Receiver
Example:
    Client(Slots) -> Invoker(remote) -> Command.execute() -> Receiver
*/
/*
=>  A simple way to remember the difference is:
    | Pattern  | Focus                              |
    | -------- | ---------------------------------- |
    | Strategy | **How** to do something            |
    | Command  | **What action** should be executed |
*/

/*
=> Now the action itself becomes an object.:
    This object can be:
        - stored
        - queued
        - retried
        - logged
        - undone
        - executed later
        - executed remotely
*/

/*
=> What happens without the command pattern:
    -   Tightly coupling between invoker and receiver
    -   No reusability or abstractions for actions
    -   Undo/Redo or any other operations is poorly supported
    -   Hard to implement BATCH (Night Mode) actions
    -   No plug and play flexibility
    -   Scalability breaks down.
*/

/*
=> When do we use command patterns:
    -   You need to decouple the sender from the receiver
    -   You need undo/redo support
    -   You want batch(multiple operations at once) operations
    -   You want plug-in(add any button on remote .etc) architecture
    -   You want to create macro or composite commands
*/