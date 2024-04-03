-- Deploy obonpain:modify_bread_type to pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE "bread_type"
    ADD COLUMN "ingredient" TEXT NOT NULL;
COMMIT;
