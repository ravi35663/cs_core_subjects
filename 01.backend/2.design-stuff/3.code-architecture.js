/* ===================== LAYERED (N-TIER) vs MICROSERVICES ARCHITECTURE =====================

==> Layered (N-Tier) Architecture:
   - Software is structured into distinct layers
   - Each layer has a single responsibility
   - Layers interact only with adjacent layers
   - Keeps system clean, organized, and maintainable


==> Typical Layers:

1) Presentation Layer (UI / API)
   - Handles user interaction and requests
   - No business logic
   - Examples: React UI, Express/NestJS Controllers

2) Business Layer (Service / Application)
   - Contains core business rules and workflows
   - Independent of UI and database
   - Examples: AuthService, OrderService

3) Data Access Layer (Repository)
   - Handles database operations
   - Isolates DB logic from business logic
   - Examples: UserRepository, OrderRepository

4) Database Layer
   - Stores application data
   - No business logic
   - Examples: PostgreSQL, MongoDB


==> Data Flow:
User → Presentation → Business → Data Access → Database


==> Why Layered Architecture?
- Separation of concerns
- Reduced coupling
- Easier maintenance and testing
- Supports parallel team development


==> Benefits:
- Easy to understand
- Easy to extend
- Better testability
- DB and framework independence


==> Common Usage:
- Express / NestJS → Controller → Service → Repository
- React → UI → Hooks → API Layer


/ ===================== MICROSERVICES ARCHITECTURE =====================

==> What is Microservices?
- Application is split into small, independent services
- Each service handles one business capability
- Services communicate via APIs or events
- Each service can be deployed independently


==> Core Idea:
- Replace one big monolith with many small services
- Example services:
  User | Order | Payment | Notification
- Each service:
   - Has its own logic
   - Often owns its own database
   - Can scale independently


==> Key Components:

1) Client / API Gateway
   - Single entry point
   - Handles routing, auth, rate limiting
   - Examples: NGINX, AWS API Gateway

2) Independent Services
   - One responsibility per service
   - Built using Node.js, NestJS, Java, Go

3) Database per Service
   - No DB sharing between services
   - Ensures loose coupling

4) Communication Layer
   - REST, gRPC
   - Message queues (Kafka, RabbitMQ)


==> Request Flow:
Client → API Gateway → Order → Payment → Notification
- Services communicate over network


==> Why Microservices?
- Independent scaling
- Faster deployments
- Large team support
- Fault isolation


==> Benefits:
- Per-service scaling
- Technology flexibility
- Better resilience
- Easier large-system maintenance


==> Challenges (Important):
- Complex infrastructure
- Network latency
- Distributed debugging
- Data consistency
- Requires strong DevOps


==> Real-World Example (E-Commerce):
- User Service → profiles
- Product Service → catalog
- Order Service → orders
- Payment Service → payments
- Notification Service → emails/SMS
- Failure in one service doesn’t break others


==> Companies Using Microservices:
- Netflix, Amazon, Uber, Spotify


==> When to Use Microservices?
- Large-scale systems
- High traffic
- Multiple teams
- Frequent deployments


/ ===================== COMPARISON =====================

| Feature      | Layered Architecture | Microservices Architecture |
|------------- |---------------------|----------------------------|
| Deployment   | Single application  | Multiple services          |
| Scaling      | Whole app           | Per service                |
| Complexity   | Low                 | High                       |
| Best for     | Small–medium apps   | Large systems              |

*/