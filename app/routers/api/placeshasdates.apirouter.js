import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import placeshasdatesController from '../../controllers/placeshasdates.controller.js';
import validateData from '../../schemas/index.validate.js';
import placeshasdatesSchema from '../../schemas/placeshasdates.schema.js';
import authenticateToken from '../../helpers/jwt.verify.js';

const dateRouter = new express.Router();

/**
 * @route GET /api/placeshasdates/
 */
dateRouter.route('/:id(\\d+)')

/**
 * GET /api/placeshasdates/{id}
 * @summary Get a delivery date and place association from its id
 * @tags Delivery dates and places association
 * @param {number} id.path.required - Delivery date and place association id
 * @return {DeliveryDateAndPlace} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(authenticateToken('admin')), controllerWrapper(placeshasdatesController.findByPk))

/**
 * PATCH /api/placeshasdates/{id}
 * @summary Update a delivery date and place association from its id
 * @tags Delivery dates and places association
 * @param {number} id.path.required - Delivery date and place association id
 * @return {DeliveryDate} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .patch(controllerWrapper(authenticateToken('admin')), validateData('body', placeshasdatesSchema), controllerWrapper(placeshasdatesController.updateOne));

/**
 * @route POST /api/placeshasdates
 */
dateRouter.route('/')

/**
 * GET /api/placeshasdates/
 * @summary Get all delivery dates
 * @tags Delivery dates
 * @return {DeliveryDatesAndPlacesList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(authenticateToken('admin')), controllerWrapper(placeshasdatesController.findAll))

/**
 * POST /api/placeshasdates/
 * @summary Create delivery date and deliveries places association
 * @tags Delivery dates and places association
 * @param {DeliveryDatesAndDeliveryPlacesInput} id.path.required -
 payload for create delivery date and delivery places associated
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .post(controllerWrapper(authenticateToken('admin')), validateData('body', placeshasdatesSchema), controllerWrapper(placeshasdatesController.createOne));

export default dateRouter;
