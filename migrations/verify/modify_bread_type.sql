-- Verify obonpain:modify_bread_type on pg

BEGIN;

SELECT "ingredient" FROM "bread_type" WHERE FALSE;
ROLLBACK;
