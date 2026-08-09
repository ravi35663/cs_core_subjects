class Pizza{
    constructor(
        private cheese:boolean,
        private olive:boolean,
        private mushroom:boolean
    ){}

    getCost():number{
        let cost = 100;
        if(this.cheese) cost +=20
        if(this.olive) cost +=30;
        if(this.mushroom) cost +=40;
        return cost;
    }

    getDescription():string{
        let desc = 'Pizza';
        if(this.cheese) desc +=" + Cheese"
        if(this.olive) desc += " + olive";
        if(this.mushroom) desc +=" + mushroom";
        return desc;
    }
}

const pizza = new Pizza(true, true, false);

console.log(pizza.getDescription());
console.log(pizza.getCost());

// Problems with This approach:
/*
=> 1. Violate Open-close principle::
    - if we need to add paneer and other toppings then we have to make changes.
    private paneer:boolean
*/

/*
=>  2.God Class (Too Much Responsibility):
    -   Pizza handles:
            - Cheese
            - Olive
            - Mushroom
            - Paneer
            - Corn
            - Sauce
            - Extra Cheese
    -   One class controls everything
*/
/*
=>  3. . Hard to Maintain: More toppings = More conditions
    if()....
    if()...
    if()...
*/

