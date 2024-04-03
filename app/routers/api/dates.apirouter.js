import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import datesController from '../../controllers/dates.controller.js';
import validateData from '../../schemas/index.validate.js';
import dateSchema from '../../schemas/dates.schema.js';
import authenticateToken from '../../helpers/jwt.verify.js';

const dateRouter = new express.Router();

/**
 * @route GET /api/dates/
 */
dateRouter.route('/:id(\\d+)')

/**
 * GET /api/dates/{id}
 * @summary Get a delivery date from its id
 * @tags Delivery dates
 * @param {number} id.path.required - Delivery date id
 * @return {DeliveryDate} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(authenticateToken('admin')), controllerWrapper(datesController.findByPk))

/**
 * PATCH /api/dates/{id}
 * @summary Get a delivery date from its id
 * @tags Delivery dates
 * @param {number} id.path.required - Delivery date id
 * @return {DeliveryDate} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .patch(controllerWrapper(authenticateToken('admin')), validateData('body', dateSchema), controllerWrapper(datesController.updateOne));

dateRouter.route('/')

/**
 * GET /api/dates/
 * @summary Get all delivery dates
 * @tags Delivery dates
 * @return {DeliveryDateList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(authenticateToken('admin et client')), controllerWrapper(datesController.findAll))

  /**
 * POST /api/dates/
 * @summary Create a delivery date
 * @tags Delivery dates
 * @param {DeliveryDatesInput} id.path.required - payload for create delivery date
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .post(controllerWrapper(authenticateToken('admin')), validateData('body', dateSchema), controllerWrapper(datesController.createOne));

export default dateRouter;
