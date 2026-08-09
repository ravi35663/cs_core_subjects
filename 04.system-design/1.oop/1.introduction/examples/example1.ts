class BankAccount{
    // Encapsulation means it is hidden (attributes or maybe methods)
    // Attributes
    private name:string;
    private balance!:number;

    constructor(name:string, balance:number){
        this.name = name;
        this.balance = balance;
    }
    
    // setter for a particular attribute:
    public setName(name:string){
        this.name = name;
    }

    public getName():string{
        return this.name;
    }

    addBalance(balance:number){
        if(balance < 0){ // error handling
            console.log("Invalid amount")
        }
        this.balance +=balance;
    }

    getBalance():number{
        return this.balance;
    }
}