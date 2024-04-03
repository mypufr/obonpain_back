import client from '../helpers/pg.client.js';

export default {

  async findAll() {
    const result = await client.query('SELECT * FROM "mould" ORDER BY "mould"."name"');
    return result.rows;
  },

  async findByPk(id) {
    const result = await client.query('SELECT * FROM "mould" WHERE "id" = $1', [id]);
    return result.rows[0];
  },

  async create(mouldData) {
    const { name, quantity, status } = mouldData;
    const SQLquery = {
      text: `
          INSERT INTO "mould" 
              ("name", "quantity", "status") 
          VALUES 
              ($1, $2, $3);`,
      values: [name, quantity, status],
    };
    const result = await client.query(SQLquery);
    return result.rowCount;
  },

  async update(id, mouldData) {
    const {
      // eslint-disable-next-line camelcase
      name, quantity, status, updated_at,
    } = mouldData;
    const SQLquery = {
      text: `
          UPDATE "mould" 
          SET "name" = $1,
              "quantity" = $2,
              "status" = $3,
              "updated_at" = $4
          WHERE "id" = $5
          RETURNING *;
      `,
      // eslint-disable-next-line camelcase
      values: [name, quantity, status, updated_at, id],
    };
    const result = await client.query(SQLquery);
    return result.rows[0];
  },

};
