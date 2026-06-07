class Invoice{
    logo:string;
    taxRules:string[];
    template:string;

    constructor(){
        // Heavy initialization
        console.log('Loading logo')
        this.logo = 'company.logo.png'

        console.log('Lading tax rules.........')
        this.taxRules = ['GST',"Service Tax"];

        console.log("Lading template")
        this.template = "DEFAULT_TEMPLATE";
    }

    generate(amount:number){
        console.log("Invoice for ",amount, " using ",this.template);
    }
}

// Client Code:
class InvoiceService{
    createInvoice(amount:number){
        const invoice = new Invoice(); // Heavy every time
        invoice.generate(amount);
    }
}
// Usage:
const service = new InvoiceService();
service.createInvoice(1000);
service.createInvoice(3000);
service.createInvoice(9000)

/*
=> Problems with bad design:
    1) Slow Performance:
        - every call loads below stuff again and again which is bad.
            - Load logo
            - Load rules
            - Load template

    2) Wasted Resources: Same data loads multiple times
    3) Tight Coupling constructor: 
        - Business logic depends on new Invoice() which is wrong
    4) Hard to Customize:
        - If we want small change like invoice.template = "PREMIUM";
        then you have to re-init everything .
*/