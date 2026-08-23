import { Router, Request, Response } from 'express';
import { ExitController } from '../controller/ExitController';

export class ExitRouter {
    private router: Router;
    private exitController: ExitController;

    constructor(exitController: ExitController) {
        this.router = Router();
        this.exitController = exitController;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * POST /exit
         * Process vehicle exit with payment
         * Request Body:
         *   - ticketId: string
         * Response:
         *   - ExitResult { success, receipt?, message }
         */
        this.router.post('/', (req: Request, res: Response) => {
            try {
                const { ticketId } = req.body;

                // Validation
                if (!ticketId) {
                    return res.status(400).json({
                        success: false,
                        message: 'Missing required field: ticketId'
                    });
                }

                const result = this.exitController.exitVehicle(ticketId);
                res.status(result.success ? 200 : 400).json(result);
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Exit processing failed: ${message}`
                });
            }
        });

        /**
         * GET /exit/receipt/:ticketId
         * Get receipt for completed exit
         */
        this.router.get('/receipt/:ticketId', (req: Request, res: Response) => {
            try {
                const { ticketId } = req.params;
                const receipt = this.exitController.getReceipt(ticketId);

                if (!receipt) {
                    return res.status(404).json({
                        success: false,
                        message: 'Receipt not found'
                    });
                }

                res.status(200).json({
                    success: true,
                    receipt,
                    message: 'Receipt retrieved successfully'
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to retrieve receipt: ${message}`
                });
            }
        });

        /**
         * POST /exit/retry/:ticketId
         * Retry payment processing for failed exits
         */
        this.router.post('/retry/:ticketId', (req: Request, res: Response) => {
            try {
                const { ticketId } = req.params;
                const result = this.exitController.retryPayment(ticketId);
                res.status(result.success ? 200 : 400).json(result);
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Payment retry failed: ${message}`
                });
            }
        });
    }

    public getRouter(): Router {
        return this.router;
    }
}
