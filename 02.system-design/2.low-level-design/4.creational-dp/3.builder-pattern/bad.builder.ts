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
//  Without Builder pattern:
class BurgerMealClass {
  constructor(
    // Required
    public bunType: string,
    public patty: string,

    // Optional
    public hasCheese: boolean = false,
    public toppings: string[] = [],
    public side?: string,
    public drink?: string
  ) {}
}
const burgerClass1 = new BurgerMealClass(
  "Wheat",
  "Veg Patty",
  true,
  ["Lettuce", "Tomato"],
  "Fries",
  "Coke"
);

const burgerClass = new BurgerMealClass(
  "Wheat",
  "Veg Patty",
  false,
  [],
  "",
  ""
);

/*
Problem without Builder Pattern:
    -   If you don't need some optional items into you burger meal you have to 
        explicitly give them null/undefined, assume you have 1000 of optional fields, 
        if you don't follow the builder pattern you have explicitly make them null 
        which is very hectic.
*/
