/* eslint-disable camelcase */
import client from '../helpers/pg.client.js';

export default {

  async findAll() {
    const result = await client.query(`
  SELECT "bread"."id", 
    "bread"."weight",
    "bread"."price",
    "bread"."bread_type_id",
    "bread"."mould_id",
    "bread"."status",
    "bread_type"."name" AS bread_type_name,
    "mould"."name" AS mould_name
  FROM "bread"
  JOIN "bread_type"
    ON "bread_type"."id" = "bread"."bread_type_id"
  JOIN "mould"
    ON "mould"."id" = "bread"."mould_id"
  ORDER BY "bread_type_name",
  "bread"."weight",
  "mould_name"`);
    return result.rows;
  },

  async findByPk(id) {
    const result = await client.query(`
    SELECT "bread"."id", 
      "bread"."weight",
      "bread"."price",
      "bread"."bread_type_id",
      "bread"."mould_id",
      "bread"."status",
      "bread_type"."name" AS bread_type_name,
      "mould"."name" AS mould_name
    FROM "bread"
    JOIN "bread_type"
      ON "bread_type"."id" = "bread"."bread_type_id"
    JOIN "mould"
      ON "mould"."id" = "bread"."mould_id"
    WHERE "bread"."id" = $1
    ORDER BY "bread_type_name",
    "bread"."weight",
    "mould_name"`, [id]);
    return result.rows[0];
  },

  async create(productsData) {
    const {
      weight, price, status, bread_type_id, mould_id,
    } = productsData;
    const SQLquery = {
      text: `
          INSERT INTO "bread" 
              (weight, price, status, bread_type_id, mould_id) 
          VALUES 
              ($1, $2, $3, $4, $5);
      `,
      values: [weight, price, status, bread_type_id, mould_id],
    };
    const result = await client.query(SQLquery);
    return result.rowCount;
  },

  async update(id, productsData) {
    const {
      weight, price, status, bread_type_id, mould_id, updated_at,
    } = productsData;
    const SQLquery = {
      text: `
          UPDATE "bread"
          SET "weight" = $1,
              "price" = $2,
              "status" = $3,
              "bread_type_id" = $4,
              "mould_id"=$5,
              "updated_at" = $6
          WHERE "id" = $7
          RETURNING *;
      `,
      values: [weight, price, status, bread_type_id, mould_id, updated_at, id],
    };
    const result = await client.query(SQLquery);
    return result.rows[0];
  },

};
