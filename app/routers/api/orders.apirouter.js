import express from 'express';
import ordersController from '../../controllers/orders.controller.js';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import authenticateToken from '../../helpers/jwt.verify.js';
import validateData from '../../schemas/index.validate.js';
import orderSchema from '../../schemas/orders.schema.js';

const ordersRouter = new express.Router();

/**
 * @route /api/orders
 */

ordersRouter.route('/:id(\\d+)')

/**
* GET /api/orders/{id}
* @summary Get Order Details
* @tags Order
* @return {OrdersObjet} 200 - success response - application/json
* @return {Error} 400 - error response - bad input - application/json
* @return {Error} 404 - error response - not found - application/json
* @return {Error} 500 - error response - internal server error - application/json
*/
  // eslint-disable-next-line max-len
  .get(/* controllerWrapper(authenticateToken('admin')), */ controllerWrapper(ordersController.findByPk))

/**
* PATCH /api/orders/{id}
* @summary PATCH an order
* @tags Order
* @param {number} id.path.required - Order id
* @return {OrdersObjet} 200 - success response - application/json
* @return {Error} 400 - error response - bad input - application/json
* @return {Error} 404 - error response - not found - application/json
* @return {Error} 500 - error response - internal server error - application/json
*/
  .patch(/* controllerWrapper(authenticateToken('admin et client')), */ validateData('body', orderSchema), controllerWrapper(ordersController.updateOne))

/**
* DELETE /api/orders/{id}
* @summary Delete an order
* @tags Order
* @param {number} id.path.required - Order id
* @return {true} 200 - success response - application/json
* @return {Error} 400 - error response - bad input - application/json
* @return {Error} 404 - error response - not found - application/json
* @return {Error} 500 - error response - internal server error - application/json
*/
  // eslint-disable-next-line max-len
  .delete(/* controllerWrapper(authenticateToken('admin et client')), */ controllerWrapper(ordersController.deleteOne));

/**
 * @route /api/orders
 */
ordersRouter.route('/')
/**
 * @route GET /api/orders/

* @summary Get list of commands
* @tags Order list
* @return {OrdersObjet} 200 - success response - application/json
* @return {Error} 400 - error response - bad input - application/json
* @return {Error} 404 - error response - not found - application/json
* @return {Error} 500 - error response - internal server error - application/json
*/
  .get(controllerWrapper(authenticateToken('admin')), controllerWrapper(ordersController.findAll));

export default ordersRouter;
