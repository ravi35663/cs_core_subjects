/*
=> Problem:
    - Burger Meal:
        - Choose Bun Type
        - add patty
        - add cheese
        - add sides
        - add drink
        - add toppings
*/


// Example:
class BurgerMeal{
    // readonly means immutable that is not going to change.
    // Required
    readonly bunType:string;
    readonly patty:string;

    // Optional // Here you cannot assign default values, values will comes from the BuilderClass which is responsible for building instance of meal
    readonly hasCheese?:boolean;
    readonly toppings?:string[];
    readonly side?:string;
    readonly drink?:string;
    // We'll be replacing multiple parameters with single Builder class which BurgerBuilder
    constructor(builder: BurgerBuilder){
        this.bunType = builder.bunType;
        this.patty = builder.patty;
        this.hasCheese = builder.hasCheese;
        this.toppings = builder.toppings;
        this.side = builder.side;
        this.drink = builder.drink;
    }
    // Factory method:
    static builder(bunType: string, patty:string){
        return new BurgerBuilder(bunType,patty);
    }
}

class BurgerBuilder{
    // Required
    bunType: string;
    patty: string;

    // Optional (with defaults)
    hasCheese: boolean = false;
    toppings: string[] = [];
    side?: string;
    drink?:string;

    constructor(bunType: string,patty:string){
        this.bunType = bunType;
        this.patty = patty;
    }

    addCheese():this{
        this.hasCheese = true;
        return this;
    }
    addTopping(topping:string):this{
        this.toppings.push(topping);
        return this;
    }

    addSide(side:string):this{
        this.side = side
        return this;
    }

    addDrink(drink:string):this{
        this.drink = drink;
        return this;
    }

    build():BurgerMeal{
        // Validate this
        if(!this.bunType || !this.patty){
            throw new Error("Burger must have bunType and patty");
        }
        return new BurgerMeal(this);
    }
}

const burger = BurgerMeal
.builder("Wheat", "Veg Patty")
  .addCheese()
  .addTopping("Lettuce")
  .addTopping("Tomato")
  .addSide("Fries")
  .addDrink("Coke")
  .build();


const burger2 = BurgerMeal
.builder("Wheat", "Veg Patty")
.build();


// Example - 2:
/*
=> Builder Pattern: 
    Builder Pattern is used to create complex objects step-by-step using a fluent 
    interface instead of big constructors.
*/
class ShakeMeal{
    readonly fruitType:string;
    readonly liquidType:string;

    readonly sugar?:boolean;
    readonly dryFruits?:string[];
    readonly iceCream?:boolean;

    constructor(shakeBuilder:ShakeBuilder){
        this.dryFruits = shakeBuilder.dryFruits;
        this.fruitType = shakeBuilder.fruitType;
        this.iceCream = shakeBuilder.iceCream;
        this.sugar = shakeBuilder.sugar;
        this.liquidType = shakeBuilder.liquidType;
    }

    static builder(fruitType:string,liquidType:string){
        return new ShakeBuilder(fruitType,liquidType);
    }

}

class ShakeBuilder{
    fruitType:string;
    liquidType:string;

    sugar:boolean = false;
    dryFruits:string[] = [];
    iceCream:boolean = false;

    constructor(fruitType:string,liquidType:string){
        this.fruitType = fruitType;
        this.liquidType = liquidType;
    }

    addSugar():this{
        this.sugar = true;
        return this;
    }

    addIceCream():this{
        this.iceCream = true;
        return this;
    }

    addDryFruits(dryFruit:string):this{
        this.dryFruits.push(dryFruit);
        return this;
    }

    build():ShakeMeal{
        if(!this.fruitType || !this.liquidType){
            throw new Error("Fruit type and liquid type must not be empty.")
        }
        return new ShakeMeal(this);
    }
}

const shake = ShakeMeal.builder("Banana",'milk')
shake
.addDryFruits('cashew')
.addDryFruits('Raisin')
.addDryFruits('almond')
.addSugar()
.addIceCream()
.build();