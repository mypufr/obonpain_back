-- Revert obonpain:modify_contraint from pg

BEGIN;

ALTER TABLE "bread"
    ALTER COLUMN "mould_id" SET NOT NULL;

ALTER TABLE "bread_has_order"
    DROP COLUMN "order_id"; 

ALTER TABLE "bread_has_order"
    ADD COLUMN "order_id" INTEGER NOT NULL REFERENCES "order"("id");

ALTER TABLE "mould"
    DROP COLUMN "status";

ALTER TABLE "place_has_date"
    DROP COLUMN "status";

ALTER TABLE "delivery_date"
    DROP COLUMN "status";

ALTER TABLE "delivery_place" 
    DROP COLUMN "status";

-- ALTER TABLE "bread_has_order"
--   DROP CONSTRAINT "order_bread_id_unique";

ALTER TABLE "bread"
    DROP CONSTRAINT "weight_bread_type_mould_unique";

ALTER TABLE "mould"
    DROP CONSTRAINT "name_mould_unique";

ALTER TABLE "bread_type"
    DROP CONSTRAINT "name_breadtype_unique";

ALTER TABLE "delivery_date"
    DROP CONSTRAINT "date_unique";

ALTER TABLE "delivery_place"
    DROP CONSTRAINT "name_place_unique";

ALTER TABLE "user"
    DROP CONSTRAINT "email_unique";

ALTER TABLE "user"
    ALTER COLUMN "role" DROP DEFAULT;

COMMIT;
