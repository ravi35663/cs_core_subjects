// Create Base Interface:
interface Pizza{
    getCost():number;
    getDescription():string;
}

// Create Base Pizza:
class PlainPizza implements Pizza{
    getCost():number{
        return 100;
    }
    getDescription(): string {
        return 'Plain Pizza';
    }
}

// Create Abstract Decorators
abstract class PizzaDecorator implements Pizza{
    protected pizza: Pizza;
    constructor(pizza:Pizza){
        this.pizza = pizza;
    }
    abstract getCost(): number;
    abstract getDescription(): string;
}

// Create Concrete Decorators:
// Cheese Decorator:
class CheeseDecorator extends PizzaDecorator{
    getCost(): number {
        return this.pizza.getCost() + 10;
    }
    getDescription(): string {
        return this.pizza.getDescription() + ' Cheese';
    }
}

// Olive Decorator:
class OliveDecorator extends PizzaDecorator{
    getCost(): number {
        return this.pizza.getCost() + 20;
    }

    getDescription(): string {
        return this.pizza.getDescription() + ' Olive '
    }
}
// Mushroom decorator:
class MushroomDecorator extends PizzaDecorator{
    getCost(): number {
        return this.pizza.getCost() + 30;
    }
    getDescription(): string {
        return this.pizza.getDescription() + ' Mushroom '
    }
}

// Usage (Decoration in Action):
let pizza:Pizza = new PlainPizza();
pizza = new CheeseDecorator(pizza);
pizza = new MushroomDecorator(pizza);
pizza = new OliveDecorator(pizza);

console.log(pizza.getCost());
console.log(pizza.getDescription());

/*
=> Why This is Good Design:
    -   This Pattern follow Open close principle:
            - If you want to add Paneer, you can create Paneer decorator and add it.
    
    -   Single Responsibility:
            - Each class = One topping
    -   Highly Flexible:
            - You can combine anything:
            new CheeseDecorator(
                new MushroomDecorator(
                    new PlainPizza()
                )
            );
*/

/*
=> Real life example:
    - Coffee → Milk → Sugar → Cream -> More Milk
    - Pizza → Cheese → Olive → Mushroom -> Cheese -> Extra Olive
*/

/*
=> Key Takeaways:
    -   Abstract classes can have constructors, and they do get executed when a 
        subclass is instantiated.

    -   Each Decorator is a layer, like wrapping gift boxes, and each one just adds 
        behavior to the one it wrap.

    -   The decorator pattern work like a class starts when behavior is accumulated.
*/

/*
=> When do we use Prototype Pattern:
    -   You need to add responsibilities to object dynamically
    -   You want to avoid an encapsulation of subclass
    -   You want to follow OpenClose Principle:
    -   You want reusable and composable behavior.
    -   You need layered step by step enhancements.
*/