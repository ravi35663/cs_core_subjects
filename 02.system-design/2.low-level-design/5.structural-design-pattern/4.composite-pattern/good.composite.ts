// Step 1: Common Interface (Component): All item going to follow this rule.
interface Item{
    getPrice():number;
}

// Step 2: Leaf (Single product)
class Product implements Item{
    constructor(private name:string,private price:number){
    }

    getPrice(): number {
        return this.price;
    }
}

// console.log("Hhh")

// Step 3: Composite (Bundle)
class Bundle implements Item{
    private items: Item[] = [];
    constructor(private name:string){}
    add(item:Item){
        this.items.push(item);
    }
    getPrice():number{
        let total = 0;
        for(let item of this.items){
            total += item.getPrice();
        }
        return total;
    }
}
// Step 4: Usage (Clean Way):
const phone = new Product('iphone', 2000)
const charger = new Product('charger', 100)
const cover = new Product('cover',90);

const combo = new Bundle('Iphone bundle')
combo.add(phone);
combo.add(charger)
combo.add(cover);

console.log("Prince is: ",combo.getPrice());
const megaCombo = new Bundle('Mega combo bundle');
megaCombo.add(combo);
megaCombo.add(new Product('airpod',80));

console.log("Mega combo price: ",megaCombo.getPrice());
// MegaBundle is like bundle inside bundle [[[]]] like tree structure

/*
=>  Why above code is good:
    -   item.getPrice(); will work for:
        - Product
        - Bundle
        - Bundle inside another bundle
        - No if-else, No checks, Pure polymorphism.
*/

/*
=> When Should You Use Composite Pattern:
    - Data is tree-like
    - Part-whole relation
    - Same operation on group & item
    - Nested structure

=> Example:
    - File System (Folder/File)
    - Menu/submenu
    - UI Components
    - Categories
    - Products/Bundle
*/