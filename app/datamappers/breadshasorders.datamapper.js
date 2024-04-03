import client from '../helpers/pg.client.js';

export default {
  async findByPk(id) {
    const result = await client.query(`
        SELECT
            "order"."customer_id",
            "order"."creator_id",
            "user"."last_name",
            "user"."first_name",
            "user"."email",
            "delivery_place"."name" AS "delivery_place_name",
            "delivery_date"."date",
            "bread_type"."name",
            "bread"."weight",
            "bread"."mould_id",
            "mould"."name" AS "mould_name",
            "bread_has_order"."quantity",
            "bread_has_order"."price"
        FROM "order"
        JOIN "user"
            ON "user"."id" = "order"."customer_id"
        JOIN "delivery_place"
            ON "delivery_place"."id" = "delivery_place_id"
        JOIN "delivery_date"
            ON "delivery_date"."id" = "delivery_date_id"
        JOIN "bread_has_order"
            ON "order"."id" = "bread_has_order"."order_id"
        JOIN "bread"
            ON "bread"."id" = "bread_has_order"."bread_id"
        JOIN "bread_type"
            ON "bread_type"."id" = "bread"."bread_type_id"
        JOIN "mould"
            ON "mould"."id" = "bread"."mould_id"
        WHERE "bread_has_order"."id" = $1`, [id]);
    return result.rows[0];
  },

  async update(id, orderData) {
    // eslint-disable-next-line camelcase
    const { quantity, updated_at } = orderData;
    const SQLquery = {
      text: `
          UPDATE "bread_has_order" 
          SET "quantity" = $1,
              "updated_at" = $2
          WHERE "id" = $3
          RETURNING *;
      `,
      // eslint-disable-next-line camelcase
      values: [quantity, updated_at, id],
    };
    const result = await client.query(SQLquery);
    return result.rows[0];
  },

  async delete(id) {
    const result = await client.query('DELETE FROM "bread_has_order" WHERE "id" = $1', [id]);
    return result.rows[0];
  },

};
