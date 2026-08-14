import { Router, Request, Response } from 'express';
import { EntryController } from '../controller/EntryController';
import { VehicleType } from '../types/VehicleTypes';

export class EntryRouter {
    private router: Router;
    private entryController: EntryController;

    constructor(entryController: EntryController) {
        this.router = Router();
        this.entryController = entryController;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * POST /entry
         * Request Body:
         *   - licensePlate: string
         *   - vehicleType: VehicleType (BIKE, CAR, EV, TRUCK)
         * Response:
         *   - EntryResult { success, ticket?, message }
         */
        this.router.post('/', (req: Request, res: Response) => {
            try {
                const { licensePlate, vehicleType } = req.body;

                // Validation
                if (!licensePlate || !vehicleType) {
                    return res.status(400).json({
                        success: false,
                        message: 'Missing required fields: licensePlate, vehicleType'
                    });
                }

                // Validate vehicle type
                if (!Object.values(VehicleType).includes(vehicleType)) {
                    return res.status(400).json({
                        success: false,
                        message: `Invalid vehicle type. Allowed types: ${Object.values(VehicleType).join(', ')}`
                    });
                }

                const result = this.entryController.enterVehicle(licensePlate, vehicleType);
                res.status(result.success ? 200 : 400).json(result);
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Entry failed: ${message}`
                });
            }
        });

        /**
         * GET /entry/status/:ticketId
         * Get entry ticket status
         */
        this.router.get('/status/:ticketId', (req: Request, res: Response) => {
            try {
                const { ticketId } = req.params;
                const ticket = this.entryController.getTicket(ticketId);
                
                if (!ticket) {
                    return res.status(404).json({
                        success: false,
                        message: 'Ticket not found'
                    });
                }

                res.status(200).json({
                    success: true,
                    ticket,
                    message: 'Ticket retrieved successfully'
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to retrieve ticket: ${message}`
                });
            }
        });
    }

    public getRouter(): Router {
        return this.router;
    }
}
