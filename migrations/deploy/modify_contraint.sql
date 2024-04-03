-- Deploy obonpain:modify_contraint to pg

BEGIN;

ALTER TABLE "user"
    ALTER COLUMN "role" SET DEFAULT 'client';

ALTER TABLE "user"
    ADD CONSTRAINT "email_unique" UNIQUE ("email");

ALTER TABLE "delivery_place"
    ADD CONSTRAINT "name_place_unique" UNIQUE ("name");

ALTER TABLE "delivery_date"
    ADD CONSTRAINT "date_unique" UNIQUE ("date");

ALTER TABLE "bread_type"
    ADD CONSTRAINT "name_breadtype_unique" UNIQUE ("name");

ALTER TABLE "mould"
    ADD CONSTRAINT "name_mould_unique" UNIQUE ("name");

-- create a unique bread item for weight, molded option and bread range 
ALTER TABLE "bread"
    ADD CONSTRAINT "weight_bread_type_mould_unique" UNIQUE ("weight", "bread_type_id", "mould_id");

--create a single order with one order line per item 
ALTER TABLE "bread_has_order"
    ADD CONSTRAINT "order_bread_id_unique" UNIQUE ("order_id", "bread_id");

ALTER TABLE "delivery_place"
    ADD COLUMN "status" BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE "delivery_date"
    ADD COLUMN "status" BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE "place_has_date"
    ADD COLUMN "status" BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE "mould"
    ADD COLUMN "status" BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE "bread_has_order"
    DROP COLUMN "order_id";
    
ALTER TABLE "bread_has_order"
    ADD COLUMN "order_id" INTEGER NOT NULL REFERENCES "order"("id") ON DELETE CASCADE;
 
ALTER TABLE "bread"
    ALTER COLUMN "mould_id" DROP NOT NULL;
COMMIT;
