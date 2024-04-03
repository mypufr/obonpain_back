-- Verify obonpain:create on pg

BEGIN;

SELECT * FROM "user" WHERE FALSE;
SELECT * FROM "delivery_place" WHERE FALSE;
SELECT * FROM "delivery_date" WHERE FALSE;
SELECT * FROM  "place_has_date" WHERE FALSE;
SELECT * FROM "bread_type" WHERE FALSE;
SELECT * FROM "mould" WHERE FALSE;
SELECT * FROM "bread" WHERE FALSE;
SELECT * FROM "order" WHERE FALSE;
SELECT * FROM "bread_has_order" WHERE FALSE;

ROLLBACK;
