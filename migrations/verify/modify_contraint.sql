-- Verify obonpain:modify_contraint on pg

BEGIN;

SELECT "status" FROM "delivery_place" WHERE FALSE;
SELECT "status" FROM "delivery_date" WHERE FALSE;
SELECT "status" FROM "place_has_date" WHERE FALSE;
SELECT "status" FROM "mould" WHERE FALSE;


ROLLBACK;
