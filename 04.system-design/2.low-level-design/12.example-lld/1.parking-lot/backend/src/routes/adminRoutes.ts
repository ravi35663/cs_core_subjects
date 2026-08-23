import { Router, Request, Response } from 'express';
import { AdminController } from '../controller/AdminController';
import { VehicleType } from '../types/VehicleTypes';

export class AdminRouter {
    private router: Router;
    private adminController: AdminController;

    constructor(adminController: AdminController) {
        this.router = Router();
        this.adminController = adminController;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        // ========== FLOOR MANAGEMENT ==========
        /**
         * POST /admin/floors
         * Add a new floor to the parking lot
         * Request Body:
         *   - floorNumber: number
         */
        this.router.post('/floors', (req: Request, res: Response) => {
            try {
                const { floorNumber } = req.body;

                // Validation
                if (floorNumber === undefined || floorNumber === null) {
                    return res.status(400).json({
                        success: false,
                        message: 'Missing required field: floorNumber'
                    });
                }

                if (typeof floorNumber !== 'number' || floorNumber < 0) {
                    return res.status(400).json({
                        success: false,
                        message: 'Floor number must be a non-negative number'
                    });
                }

                this.adminController.addFloor(floorNumber);
                res.status(201).json({
                    success: true,
                    message: `Floor ${floorNumber} added successfully`
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to add floor: ${message}`
                });
            }
        });

        /**
         * GET /admin/floors
         * Get all floors
         */
        this.router.get('/floors', (req: Request, res: Response) => {
            try {
                const floors = this.adminController.getAllFloors();
                res.status(200).json({
                    success: true,
                    data: floors,
                    message: 'Floors retrieved successfully'
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to retrieve floors: ${message}`
                });
            }
        });

        // ========== SLOT MANAGEMENT ==========
        /**
         * POST /admin/slots
         * Add a new slot to a floor
         * Request Body:
         *   - floorNumber: number
         *   - slotType: VehicleType (BIKE, CAR, EV, TRUCK)
         */
        this.router.post('/slots', (req: Request, res: Response) => {
            try {
                const { floorNumber, slotType } = req.body;

                // Validation
                if (floorNumber === undefined || !slotType) {
                    return res.status(400).json({
                        success: false,
                        message: 'Missing required fields: floorNumber, slotType'
                    });
                }

                if (!Object.values(VehicleType).includes(slotType)) {
                    return res.status(400).json({
                        success: false,
                        message: `Invalid slot type. Allowed types: ${Object.values(VehicleType).join(', ')}`
                    });
                }

                this.adminController.addSlot(floorNumber, slotType);
                res.status(201).json({
                    success: true,
                    message: `Slot of type ${slotType} added to floor ${floorNumber}`
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to add slot: ${message}`
                });
            }
        });

        /**
         * GET /admin/slots/status
         * Get parking status (available and occupied slots)
         */
        this.router.get('/slots/status', (req: Request, res: Response) => {
            try {
                const status = this.adminController.getParkingStatus();
                res.status(200).json({
                    success: true,
                    data: status,
                    message: 'Parking status retrieved successfully'
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to retrieve parking status: ${message}`
                });
            }
        });

        // ========== PRICING MANAGEMENT ==========
        /**
         * PUT /admin/pricing
         * Update pricing rule for a vehicle type (both flat and hourly)
         * Request Body:
         *   - vehicleType: VehicleType
         *   - ratePerHour: number
         *   - flatRate: number
         */
        this.router.put('/pricing', (req: Request, res: Response) => {
            try {
                const { vehicleType, ratePerHour, flatRate } = req.body;

                // Validation
                if (!vehicleType || ratePerHour === undefined || flatRate === undefined) {
                    return res.status(400).json({
                        success: false,
                        message: 'Missing required fields: vehicleType, ratePerHour, flatRate'
                    });
                }

                if (!Object.values(VehicleType).includes(vehicleType)) {
                    return res.status(400).json({
                        success: false,
                        message: `Invalid vehicle type. Allowed types: ${Object.values(VehicleType).join(', ')}`
                    });
                }

                if (ratePerHour < 0 || flatRate < 0) {
                    return res.status(400).json({
                        success: false,
                        message: 'Rates must be non-negative numbers'
                    });
                }

                this.adminController.updatePricing(vehicleType, ratePerHour, flatRate);
                res.status(200).json({
                    success: true,
                    message: `Pricing updated for ${vehicleType}`
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to update pricing: ${message}`
                });
            }
        });

        /**
         * PATCH /admin/pricing/flat
         * Update only flat rate for a vehicle type
         * Request Body:
         *   - vehicleType: VehicleType
         *   - flatRate: number
         */
        this.router.patch('/pricing/flat', (req: Request, res: Response) => {
            try {
                const { vehicleType, flatRate } = req.body;

                if (!vehicleType || flatRate === undefined) {
                    return res.status(400).json({
                        success: false,
                        message: 'Missing required fields: vehicleType, flatRate'
                    });
                }

                if (!Object.values(VehicleType).includes(vehicleType)) {
                    return res.status(400).json({
                        success: false,
                        message: `Invalid vehicle type. Allowed types: ${Object.values(VehicleType).join(', ')}`
                    });
                }

                if (flatRate < 0) {
                    return res.status(400).json({
                        success: false,
                        message: 'Flat rate must be a non-negative number'
                    });
                }

                this.adminController.updateFlatPricing(vehicleType, flatRate);
                res.status(200).json({
                    success: true,
                    message: `Flat rate updated for ${vehicleType}`
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to update flat rate: ${message}`
                });
            }
        });

        /**
         * PATCH /admin/pricing/hourly
         * Update only hourly rate for a vehicle type
         * Request Body:
         *   - vehicleType: VehicleType
         *   - ratePerHour: number
         */
        this.router.patch('/pricing/hourly', (req: Request, res: Response) => {
            try {
                const { vehicleType, ratePerHour } = req.body;

                if (!vehicleType || ratePerHour === undefined) {
                    return res.status(400).json({
                        success: false,
                        message: 'Missing required fields: vehicleType, ratePerHour'
                    });
                }

                if (!Object.values(VehicleType).includes(vehicleType)) {
                    return res.status(400).json({
                        success: false,
                        message: `Invalid vehicle type. Allowed types: ${Object.values(VehicleType).join(', ')}`
                    });
                }

                if (ratePerHour < 0) {
                    return res.status(400).json({
                        success: false,
                        message: 'Hourly rate must be a non-negative number'
                    });
                }

                this.adminController.updateHourlyPricing(vehicleType, ratePerHour);
                res.status(200).json({
                    success: true,
                    message: `Hourly rate updated for ${vehicleType}`
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to update hourly rate: ${message}`
                });
            }
        });

        /**
         * GET /admin/pricing
         * Get all pricing rules
         */
        this.router.get('/pricing', (req: Request, res: Response) => {
            try {
                const pricingRules = this.adminController.getAllPricingRules();
                res.status(200).json({
                    success: true,
                    data: pricingRules,
                    message: 'Pricing rules retrieved successfully'
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Failed to retrieve pricing rules: ${message}`
                });
            }
        });

        // ========== MANUAL OVERRIDE (For edge cases) ==========
        /**
         * POST /admin/override/exit
         * Manual exit override (for lost tickets, system failures, etc.)
         * Request Body:
         *   - vehicleId: string
         *   - reason: string
         */
        this.router.post('/override/exit', (req: Request, res: Response) => {
            try {
                const { vehicleId, reason } = req.body;

                if (!vehicleId || !reason) {
                    return res.status(400).json({
                        success: false,
                        message: 'Missing required fields: vehicleId, reason'
                    });
                }

                const result = this.adminController.manualExitOverride(vehicleId, reason);
                res.status(result.success ? 200 : 400).json(result);
            } catch (error) {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                res.status(500).json({
                    success: false,
                    message: `Manual override failed: ${message}`
                });
            }
        });
    }

    public getRouter(): Router {
        return this.router;
    }
}
