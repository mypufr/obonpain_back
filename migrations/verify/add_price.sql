-- Verify obonpain:add_price on pg

BEGIN;

SELECT "price" FROM "bread_has_order" WHERE FALSE;

ROLLBACK;
