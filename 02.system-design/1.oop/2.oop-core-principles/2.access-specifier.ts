/*
=> Access Specifier:
  - In TypeScript, access specifiers (also called access modifiers) define the visibility 
    or access level of class members (properties and methods).
*/
/*
1. public (default)
  - Accessible from anywhere — inside or outside the class.
  - All members are public by default.
*/
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const p = new Person('Ravi');
console.log(p.name); // Accessible
p.greet();           // Accessible

/*
2. private
  - Accessible only within the same class.
  - Not visible to subclasses or external code.
  - You cannot make class private.
  - for a inner class you can define it. (class in another class).
*/
class Account {
  private balance: number = 1000;

  private updateBalance(amount: number) {
    this.balance += amount;
  }
}

const acc = new Account();
// acc.balance = 0; Error
// acc.updateBalance(100); Error

/*
3. protected
  - Accessible within the same class and its subclasses, but not from outside.
*/

class Base {
  protected value: number = 42;
}

class Derived extends Base {
  showValue() {
    console.log(this.value); // Accessible here
  }
}

const d = new Derived();
d.showValue();
// d.value;  Error

/*
Summary Table
  Modifier	    Within Class	    Subclass	    Outside Class
    public	      YES	                YES	         YES
    protected	    YES	                YES	         NO
    private	      YES	                NO	         NO
*/

/*
Note:
  - Purpose of access specifier is to enforce the encapsulation (data hiding) and we gives 
    controlled access.
*/