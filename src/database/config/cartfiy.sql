BEGIN;
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE "products"(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "price" DECIMAL,
    "category" VARCHAR(255) NOT NULL,
    "img_url" VARCHAR(255) NOT NULL
);

COMMIT;