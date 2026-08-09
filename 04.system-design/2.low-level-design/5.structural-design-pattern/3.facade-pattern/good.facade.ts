/*
=>  Now we introduce:
    -   BookingFacade : It handles everything internally.
*/
/*
Step 1: Same Subsystems (No Change)
    -   We keep all services same:
            - AuthService
            - MovieService
            - SeatService
            - PaymentService
            - TicketService
            - NotificationService
    -   No modification needed
*/
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
// Step 2: Create Facade:
class BookingFacade{
    private auth = new AuthService();
    private movie  = new MovieService();
    private seat = new SeatService();
    private payment = new PaymentService();
    private ticket = new TicketService();
    private notify = new NotificationService();

    bookTicket(
        userId:string,
        movieName:string,
        seatNo:string,
        amount:number
    ){
        console.log("------------------Booking Starts------------");
        this.auth.login(userId);
        this.movie.checkAvailability(movieName);
        this.seat.reserveSeat(seatNo);
        this.payment.makePayment(amount);
        this.ticket.generateTicket();
        this.notify.sendNotification()
        console.log("Booking completed")
    }
}
/*
=>   This is the Facade => It hides complexity.
*/

// Client code:
const booking  = new BookingFacade();
booking.bookTicket('ravi122',"IronMan",'90B',1000);

