# Node.js Rest APIs with Express, Sequelize & MySQL Test backend

## example environment
```
## development | production
NODE_ENV=development

# DB
DB_HOST=localhost
DB_NAME=test
DB_USER=root
DB_PASS=
DB_LOGGING=0
```
If you set NODE_ENV as development, then this app will running the sqlite for database.
So no need to additional datbase setup for development environment

## 1. Database Migration
```
npm run db:migrate
```

## 2. Database Seed
```
npm run db:seedall
```

### 3.Run
```
npm run start
```
