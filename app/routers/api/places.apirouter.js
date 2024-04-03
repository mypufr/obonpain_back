import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import placesController from '../../controllers/places.controller.js';
import validateData from '../../schemas/index.validate.js';
import placesSchema from '../../schemas/places.schema.js';
import authenticateToken from '../../helpers/jwt.verify.js';

const placesRouter = new express.Router();

/**
 * @route GET /api/places/
 */

placesRouter.route('/dates')

/**
 * GET /api/places/dates
 * @summary Get delivery places list with all associated delivery dates
 * @tags Delivery places
 * @return {DeliveryPlace} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(authenticateToken('client')), controllerWrapper(placesController.findDatesListByPlaces));

/**
 * @route GET /api/places/
 */

placesRouter.route('/:id(\\d+)')

/**
 * GET /api/places/{id}
 * @summary Get a delivery place from its id
 * @tags Delivery places
 * @param {number} id.path.required - Delivery place id
 * @return {DeliveryPlace} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(authenticateToken('admin')), controllerWrapper(placesController.findByPk))

/**
 * PATCH /api/places/{id}
 * @summary Update a delivery place from its id
 * @tags Delivery places
 * @param {number} id.path.required - Delivery place id
 * @param {DeliveryPlacesInput} request.body.required - payload for update delivery place
 * @return {DeliveryPlacesInput} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .patch(controllerWrapper(authenticateToken('admin')), validateData('body', placesSchema), controllerWrapper(placesController.updateOne));

/**
 * @route GET /api/places/
 */
placesRouter.route('/')

/**
 * GET /api/places/
 * @summary Get all delivery places
 * @tags Delivery places
 * @return {DeliveryPlacesList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(authenticateToken('admin et client')), controllerWrapper(placesController.findAll))

/**
 * POST /api/places/
 * @summary Create a delivery place
 * @tags Delivery places
 * @param {DeliveryPlacesInput} request.body.required - payload for create delivery place
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .post(controllerWrapper(authenticateToken('admin')), validateData('body', placesSchema), controllerWrapper(placesController.createOne));

export default placesRouter;
