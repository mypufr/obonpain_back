-- Deploy obonpain:add_price to pg

BEGIN;

ALTER TABLE "bread_has_order"
    ADD COLUMN "price" posit_numeric NOT NULL;

COMMIT;
