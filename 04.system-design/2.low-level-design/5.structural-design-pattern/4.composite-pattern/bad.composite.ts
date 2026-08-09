
// Below separate logic for product and bundle:
class Product{
    constructor(
        private name:string,
        private price:number
    ){}

    getPrice():number{
        return this.price
    }
}

class Bundle{
    products:Product[] = [] as Product[];
    add(product:Product){
        this.products.push(product)
    }

    getBundlePrice():number{
        let total = 0;
        for(let item of this.products){
            total += item.getPrice();
        }
        return total;
    }
}

function getFinalPrice(item:any){
    if(item instanceof Product){
        return item.getPrice();
    }
    if(item instanceof Bundle){
        return item.getBundlePrice();
    }
}
/*
=> Problems with bad example:
    - if-else Everywhere: 
        if(item instanceof Product)
        if(item instanceof Bundle)
    
    - Not Scalable:
        -   If tomorrow is a sale and there is MegaBundle then you have to make another 
            class. That is you must have to update all class.
    
    - Breaks OOP: 
        - No interface
        - No polymorphism

    - Hard Maintenance
        - More types = more bugs.
*/