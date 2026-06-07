/*
=> Encapsulation (Data hiding):
    -   Encapsulation in TypeScript means restricting direct access to an object’s internal 
        'data' and 'methods' — exposing only what’s necessary. 

    -   It’s done using access modifiers like public, private, and protected.

=>  In short:
    -   Encapsulation = “Hide internal data, expose only what’s needed.”
    -   It protects your code (security), keeps it clean (maintainability), and makes it 
        reusable (modularity).
*/
// Example:
class Account{
    private balance: number;
    constructor(initialBalance: number){
        this.balance = initialBalance;
    }
    deposit(amount:number){
        if(amount > 0) this.balance +=amount;
    }
    getBalance(){
        return this.balance;
    }
}

const acc = new Account(1000);
acc.deposit(500);
console.log(acc.getBalance()) // 1500;
// acc.balance  = 0; Error — balance is private

/*
==> 🔒 Why Encapsulation Is Important:
    1. Security
        - Prevents unwanted or unsafe access to internal data.
        - Ensures data integrity by controlling how it’s modified.

    2. Maintainability
        - Internal logic can change without affecting external code.
        - Makes debugging and updating easier.

    3. Modularity
        - Keeps code organized with clear boundaries.
        - Each class manages its own state and behavior independently.
*/
