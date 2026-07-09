/*
=> Single Responsibility Principle (SRP):
    ->  A class should have only one reason to change.
*/

// Bad SRP:
class UserService{
    createUser(){}
    saveToFile(){}
    sendEmail(){}
}

// Good SRP:
class UserService{
    createUser(){}
}

class UserRepository{
    save(){}
}

class EmailService{
    send(){}
}
/*
    Note: One class → one responsibility (Must)
*/