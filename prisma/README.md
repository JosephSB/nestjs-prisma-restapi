## FOR USE LOCAL DOCKER DB EXECUTE: 
-   CONFIGURE ENVIEROMENTS postgres.yml
-   CONFIGURE ENVIEROMENTS .env
-   RUN `docker-compose -f postgres.yml up -d`

## RUN MIGRATIONS: 
- RUN `npx prisma migrate dev --name init`

## RUN SEEDERS: 

