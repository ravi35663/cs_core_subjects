/*
=>  Let's assume we're building the checkout page of an e-commerce website like amazon. The checkout 
    process involves various product types such as physical products, gift cards and digital products. 
    For each product, we need to perform specific operations like calculating shipping costs, discounts and 
    printing invoices.
*/ 
// Product Interface
interface Product{
    printInvoice(): void;
}

// Physical Product:
class PhysicalProduct implements Product{
    printInvoice(): void {
        console.log("Printing invoice for Physical product...")
    }

    calculatingShippingCost():number{
        console.log("Calculating shipping cost for Physical Product....")
        return 10.0
    }
}

// Digital product:
class DigitalProduct implements Product{
    printInvoice(): void {
        console.log("Printing invoices for digital product");
    }

    // No shipping cost
}

// Gift card:
class GiftCard implements Product{
    printInvoice(): void {
        console.log("Printing invoice for Gift card")
    }

    calculateDiscount():number{
        console.log("Calculating discount for Gift...")
        return 5.0;
    }
}

// Client code:
const cart:Product[] = [
    new PhysicalProduct(),
    new DigitalProduct(),
    new GiftCard()
]

for(let item of cart){
    if(item instanceof PhysicalProduct){
        item.printInvoice();
        const shippingCost = item.calculatingShippingCost();
        console.log("Shipping cost: ",shippingCost);
    }else if(item instanceof DigitalProduct){
        item.printInvoice();
        console.log("No shipping cost for Digital Product");
    }else if(item instanceof GiftCard){
        item.printInvoice();
        const discount = item.calculateDiscount();
        console.log("Discount applied: ",discount)
    }
}