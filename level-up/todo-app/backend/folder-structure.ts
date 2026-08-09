/*
src/
│
├── app/
│   ├── controllers/
│   ├── dto/
│   ├── validators/
│   ├── middlewares/
│
├── modules/
│   ├── auth/
│   │    ├── auth.controller.ts
│   │    ├── auth.service.ts
│   │    ├── auth.repository.ts
│   │    ├── strategies/
│   │    │     ├── local.strategy.ts
│   │    │     ├── google.strategy.ts
│   │    │     └── index.ts
│   │    ├── interfaces/
│   │    │     └── auth-provider.interface.ts
│   │    ├── factories/
│   │    │     └── auth-provider.factory.ts
│   │    └── auth.module.ts
│   │
│   └── user/
│        ├── user.model.ts
│        ├── user.repository.ts
│        ├── user.service.ts
│        └── user.module.ts
│
├── infrastructure/
│   ├── database/
│   │    ├── sequelize.ts
│   │    ├── migrations/
│   │    └── seeders/
│   │
│   ├── auth/
│   │    ├── google.provider.ts
│   │    └── local.provider.ts
│
│   ├── logger/
│   └── config/
│
├── shared/
│   ├── utils/
│   ├── constants/
│   ├── errors/
│   └── types/
│
├── core/
│   ├── base/
│   │    ├── base.controller.ts
│   │    ├── base.service.ts
│   │    └── base.repository.ts
│   │
│   └── interfaces/
│
├── routes/
│   └── index.ts
│
├── server.ts
└── app.ts
*/