-- Revert obonpain:modify_bread_type from pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE "bread_type"
    DROP COLUMN "ingredient";
COMMIT;
