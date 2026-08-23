import express, { Express } from 'express';
import { EntryRouter } from './routes/entryRoutes';
import { ExitRouter } from './routes/exitRoutes';
import { AdminRouter } from './routes/adminRoutes';
import { EntryController } from './controller/EntryController';
import { ExitController } from './controller/ExitController';
import { AdminController } from './controller/AdminController';

/**
 * Main Application Configuration
 * 
 * This file demonstrates how to set up the Express application with
 * all the routers and controllers for the parking lot system.
 * 
 * Architecture:
 *   HTTP Request
 *        ↓
 *   Express Middleware
 *        ↓
 *   Router (entry/exit/admin)
 *        ↓
 *   Controller
 *        ↓
 *   Service Layer
 *        ↓
 *   Repository Layer
 *        ↓
 *   Database
 */
export class ParkingLotApp {
    private app: Express;
    private entryRouter: EntryRouter;
    private exitRouter: ExitRouter;
    private adminRouter: AdminRouter;

    constructor(
        private entryController: EntryController,
        private exitController: ExitController,
        private adminController: AdminController
    ) {
        this.app = express();
        this.setupMiddleware();
        this.setupRouters();
        this.setupErrorHandling();
    }

    /**
     * Setup Express middleware
     */
    private setupMiddleware(): void {
        // Parse JSON request body
        this.app.use(express.json());

        // Parse URL-encoded request body
        this.app.use(express.urlencoded({ extended: true }));

        // Request logging middleware
        this.app.use((req, res, next) => {
            console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
            next();
        });

        // CORS headers (if needed)
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
    }

    /**
     * Setup all routers
     */
    private setupRouters(): void {
        // Initialize routers with controllers
        this.entryRouter = new EntryRouter(this.entryController);
        this.exitRouter = new ExitRouter(this.exitController);
        this.adminRouter = new AdminRouter(this.adminController);

        // Mount routers at their respective endpoints
        // POST /entry - Enter vehicle
        this.app.use('/api/entry', this.entryRouter.getRouter());

        // POST /exit - Exit vehicle
        this.app.use('/api/exit', this.exitRouter.getRouter());

        // Admin endpoints
        this.app.use('/api/admin', this.adminRouter.getRouter());

        // Health check endpoint
        this.app.get('/health', (req, res) => {
            res.status(200).json({
                status: 'OK',
                timestamp: new Date().toISOString()
            });
        });

        // API information endpoint
        this.app.get('/api', (req, res) => {
            res.status(200).json({
                service: 'Parking Lot Management System',
                version: '1.0.0',
                endpoints: {
                    entry: {
                        post: '/api/entry - Enter vehicle',
                        get: '/api/entry/status/:ticketId - Get ticket status'
                    },
                    exit: {
                        post: '/api/exit - Process exit and payment',
                        get: '/api/exit/receipt/:ticketId - Get receipt',
                        post: '/api/exit/retry/:ticketId - Retry payment'
                    },
                    admin: {
                        floors: {
                            post: '/api/admin/floors - Add floor',
                            get: '/api/admin/floors - Get all floors'
                        },
                        slots: {
                            post: '/api/admin/slots - Add slot',
                            get: '/api/admin/slots/status - Get parking status'
                        },
                        pricing: {
                            put: '/api/admin/pricing - Update pricing',
                            patch: '/api/admin/pricing/flat - Update flat rate',
                            patch: '/api/admin/pricing/hourly - Update hourly rate',
                            get: '/api/admin/pricing - Get all pricing rules'
                        },
                        override: {
                            post: '/api/admin/override/exit - Manual exit override'
                        }
                    }
                }
            });
        });
    }

    /**
     * Setup error handling middleware
     */
    private setupErrorHandling(): void {
        // 404 Not Found handler
        this.app.use((req, res) => {
            res.status(404).json({
                success: false,
                message: `Endpoint not found: ${req.method} ${req.path}`
            });
        });

        // Global error handler
        this.app.use((error: any, req: any, res: any, next: any) => {
            console.error('Error:', error);
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        });
    }

    /**
     * Get the Express app instance
     */
    public getApp(): Express {
        return this.app;
    }

    /**
     * Start the server
     */
    public start(port: number = 3000): void {
        this.app.listen(port, () => {
            console.log(`🚗 Parking Lot Management System running on http://localhost:${port}`);
            console.log(`📖 API Documentation: http://localhost:${port}/api`);
        });
    }
}

/**
 * Example usage:
 * 
 * // Initialize all dependencies (repositories, services)
 * const entryController = new EntryController(ticketService, slotService);
 * const exitController = new ExitController(ticketService, pricingService, paymentService, slotService, receiptService);
 * const adminController = new AdminController(floorRepository, slotRepository, pricingRuleRepository, ticketService, slotService);
 * 
 * // Create and start the app
 * const parkingLotApp = new ParkingLotApp(entryController, exitController, adminController);
 * parkingLotApp.start(3000);
 */
