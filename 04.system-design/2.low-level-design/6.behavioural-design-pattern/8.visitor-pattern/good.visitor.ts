/*
*/

// Visitor Interface:
interface ItemVisitor{
    visitPhysicalProduct(item: PhysicalProduct):void;
    visitDigitalProduct(item: DigitalProduct): void;
    visitGiftCard(item:GiftCard): void;
}

// Element Interface:
interface Item{
    accept(visitor: ItemVisitor): void;
}

// Physical product:
class PhysicalProduct implements Item{
    constructor(
        public name:string,
        public weight: number
    ){}

    accept(visitor: ItemVisitor): void {
        visitor.visitPhysicalProduct(this)
    }
}

// Digital Product:
class DigitalProduct implements Item{
    constructor(public name: string, public downloadSizeInMB: number){}
    accept(visitor: ItemVisitor): void {
        visitor.visitDigitalProduct
    }
}

// Gift Card:
class GiftCard implements Item{
    constructor(
        public code: string,
        public amount: number
    ){}

    accept(visitor: ItemVisitor): void {
        visitor.visitGiftCard(this)
    }
}

// Invoice visitor
class InvoiceVisitor implements ItemVisitor{
    visitPhysicalProduct(item: PhysicalProduct): void {
        console.log("Invoice: ",item.name," shipping to name")
    }

    visitDigitalProduct(item: DigitalProduct): void {
        console.log('Invoice: ',item.name," Email with download link")
    }

    visitGiftCard(item: GiftCard): void {
        console.log("Invoice: Gift Card - Code: ",item.code)
    }
}

// Shipping cost Visitor:
class ShippingCostVisitor implements ItemVisitor{
    visitDigitalProduct(item: DigitalProduct): void {
        console.log(`${item.name} is digital - No Shipping cost`)
    }
    visitPhysicalProduct(item: PhysicalProduct): void {
        console.log(`Shipping cost for ${item.name} is RS: ${item.weight * 10}`)
    }

    visitGiftCard(item: GiftCard): void {
        console.log("Gift card delivery via email -- No Shipping cost")
    }
}

// Client Code:

const items: Item[] = [
    new PhysicalProduct("Shoes",1.2),
    new DigitalProduct("Ebook",100),
    new GiftCard('TUF5000',500)
]

const invoiceGenerator = new InvoiceVisitor();
const shippingCalculator = new ShippingCostVisitor()
for(let item of items){
    // Concept of double dispatch is used
    item.accept(invoiceGenerator);
    item.accept(shippingCalculator)
    console.log("H")
}