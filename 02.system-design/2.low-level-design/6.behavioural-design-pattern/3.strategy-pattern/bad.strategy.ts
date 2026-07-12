/*
    Suppose we calculate shipping cost.
*/
class ShippingService {
    calculate(type: string, price: number){
        if(type == 'STANDARD'){
            return price * 0.05
        }
        else if(type == 'EXPRESS'){
            return price * 0.10
        }
        else if(type === 'SAME_DAY'){
            return price * 0.10;
        }
        throw new Error('Invalid type')
    }
}
/*
=> Problems it will face in future:
    -   Adding new shipping requires editing this class.
    -   Huge if chain.
    -   Hard to unit test.
    -   Violates Open/Closed Principle.
*/


// Other Example:
// Bad Authentication
class AuthService {
    login(provider: string) {

        if (provider === "google") {
            // ...
        }

        else if (provider === "github") {
            // ...
        }

        else if (provider === "facebook") {
            // ...
        }
    }

}