/*
=> Chain Of Responsibility Pattern:
    -   It is a behavioral design pattern that transforms particular behaviors into stand-alone objects 
        called handler.
    -   It allow a request to be passed along a chain of handlers. Each handler decides either to process 
        the request or to pass to the next handler in the chain.
    -   This pattern decouples the sender of a request from its receiver, giving multiple object a chance 
        to handle the object.
*/

/*
=> When do we use?
    -   When multiple objects can handle a request but the handler is not known beforehand
    -   When you want to decouple request, sender and receiver.
    -   When you want to dynamically specify the chain of processing.
*/