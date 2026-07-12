/*
    Suppose we calculate shipping cost.
*/
// Create strategy interface:
interface ShippingStrategy{
    calculate(price:number): number;
}
// Create shipping type
class StandardShipping implements ShippingStrategy{
    calculate(price: number): number {
        return price * 0.05
    }
}

class ExpressShipping implements ShippingStrategy{
    calculate(price: number): number {
        return price * 0.10
    }
}

class SameDayShipping implements ShippingStrategy{
    calculate(price: number): number {
        return price * 0.20
    }
}
// Context:
class ShippingCalculator{
    constructor(private strategy: ShippingStrategy){}

    calculate(price: number){
        return this.strategy.calculate(price);
    }
}

// Now you can use whatever method of shipping you want;
// 1. Same Day delivery
const sd =  new ShippingCalculator(new SameDayShipping());
sd.calculate(100)

// 2. Express delivery
const ed =  new ShippingCalculator(new ExpressShipping());
ed.calculate(100)

// Adding new shipping service that is OvernightShipping:
class OvernightShipping implements ShippingStrategy {

    calculate(price: number) {
        return price * 0.30;
    }
}

// Nothing else changes.