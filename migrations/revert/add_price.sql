-- Revert obonpain:add_price from pg

BEGIN;

ALTER TABLE "bread_has_order"
    DROP COLUMN "price";

COMMIT;
