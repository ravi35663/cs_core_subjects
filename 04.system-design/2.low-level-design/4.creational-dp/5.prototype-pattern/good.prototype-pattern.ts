/*
=> What problem are we solving using Prototype pattern:
    - Create Objects fast
    - Avoid repeated setup
    - Reuse base configuration
    - Support variations easily
*/ 
// Create prototype interface:
interface Prototype<T>{
    clone():T;
}
// Invoice class Implements Prototype:
class Invoice implements Prototype<Invoice>{
    logo:string;
    taxRules:string[];
    template: string;

    constructor(logo:string, taxRules:string[],template:string){
        this.logo = logo;
        this.taxRules = taxRules;
        this.template = template;
    }

    clone(): Invoice {
        return new Invoice(
            this.logo,
            [...this.taxRules], // This is DEEP COPY for taxRules
            this.template);
    }
    // Prototype avoids EXPENSIVE INITIALIZATION, NOT object creation.
    // new Invoice(...) = New object in memory
    // this.logo        = copied value
    // [...this.taxRules] = copied array
    // this.template    = copied value
    // THIS is where cloning actually happens.

    generate(amount:number){
        console.log("Invoice generated for ",amount, " using ",this.template);
    }
}

// Prototype Registry (Optional but Real-World)
class InvoiceRegistry{
    private static prototypes = new Map<string,Invoice>(); // key:string, value:Invoice()

    // Register = Save base object
    static register(key:string, invoice:Invoice){ // You can make set instead of register
        // We store ORIGINAL object here
        // No cloning here
        this.prototypes.set(key, invoice);
    }
    // Get = Return CLONE (not original
    static get(key:string):Invoice{
        const proto = this.prototypes.get(key);
        if(!proto){
            throw new Error("Prototype not found");
        }
        return proto.clone();
    }
    // proto = base object
    // proto.clone() = new copied object
    // Caller never gets original
}

// Register Base Prototypes:
/*
=>  Heavy setup only Once: If you want call API and store data here: logo and 
    other stuff are fixed but only amount is changing for invoice. But if we 
    don't follow the prototype pattern then  we have to make and pass logo and 
    other static data again and again.
    
    -   Suppose logo is static and you get it with api then if you don't follow 
        the prototype pattern then you have to make api call again and again.
*/
const indiaInvoice = new Invoice('india.logo.png',['GST','Service tax'],'INDIA_TEMPLATE');
const usaInvoice = new Invoice('usa.logo.png',['Federal Tax'],'USA_TEMPLATE');

InvoiceRegistry.register('india',indiaInvoice);
InvoiceRegistry.register('usa',usaInvoice);

// Client code:
class InvoiceService{
    createInvoice(type:string,amount:number){
        const invoice = InvoiceRegistry.get(type); // Cloned
        invoice.generate(amount);
    }
}
// Usages:
const service = new InvoiceService();
service.createInvoice('india',100);
service.createInvoice('india',3000)
service.createInvoice('usa',700);

/*
=> Why it is good?
    1) Fast Object Creation
        -   No heavy constructor runs again

    2) Resource Efficient:
        -   Shared base configuration

    3) Loose Coupling:
        -   Service doesn’t use new
    4) Easy Variations:
        const invoice = InvoiceRegistry.get("india");
        invoice.template = "PREMIUM";
        -   Only change what you need.
    5) Scalable:
        - Add new template:   InvoiceRegistry.register("uk", ukInvoice);
*/

// What Problem Prototype Actually Solves:
/*
Without Prototype
const invoice = new Invoice(
  await fetchLogo(),
  await fetchTaxes(),
  await fetchTemplate(),
);

// With Prototype:
One time:
    const base = new Invoice(logo, taxes, template); // expensive

Later:
    const clone = base.clone(); // cheap
    No API. No DB. No IO.
*/