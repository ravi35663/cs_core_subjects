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
=> Problem without Builder Pattern:
    - Optional fields must be explicitly passed as null/undefined.
    - With many optional fields (e.g., 1000), object creation becomes
      difficult, repetitive, and error-prone.
    - Builder Pattern makes this cleaner and easier.
*/
