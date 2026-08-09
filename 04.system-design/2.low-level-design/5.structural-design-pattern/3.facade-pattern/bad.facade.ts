/*
=> Let's take an example of BookMyShow to book a ticket.
    -> It includes:
        - User Authentication
        - Movie Availability
        - Seat Selection
        - Payment Processing
        - Ticket Generation
        - Notification (SMS/Email)
*/
// Let's take how it will work without facade pattern:
// Submodules: Client directly talks to all services.
class AuthService{
    login(userId:string){
        console.log(`User is logged in using using ${userId}.`)
    }
}
class MovieService{
    checkAvailability(movie:string){
        console.log(`Checking availability for ${movie}`)
    }
}

class SeatService{
    reserveSeat(seatNo: string){
        console.log(`Seat ${seatNo} reserved`);
    }
}

class PaymentService{
    makePayment(amount:number){
        console.log(`Payment of $`)
    }
}

class TicketService{
    generateTicket(){
        console.log('Ticket generated')
    }
}

class NotificationService{
    sendNotification(){
        console.log("Booking confirmation sent");
    }
}


// Step - 2: Client Code:

const auth = new AuthService();
const movie = new MovieService();
const seat = new SeatService();
const payment = new PaymentService();
const ticket = new TicketService();
const notify = new NotificationService();

// Client handles everything

auth.login("Ravi123");
movie.checkAvailability("Avengers");
seat.reserveSeat("A10");
payment.makePayment(500);
ticket.generateTicket();
notify.sendNotification();

/*
=> Problems in BAD Design:
    1) Client Knows Too Much
        -   Client must remember: login → check → reserve → pay → ticket → notify
        -   If order changes → client breaks

    2) Tight Coupling:
        -   Client depends on 6 services.
        -   If one changes → client updates

    3) Repeated Code Everywhere:
        -   Every booking page will write same logic

    4) Hard to Extend:
        -   Add CouponService?
        -   You must change ALL clients

    5) Business Logic in UI Layer:
        -   Workflow should not be in frontend/controller
*/  