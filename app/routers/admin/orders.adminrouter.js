import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import adminOrdersController from '../../controllers/admin/orders.controller.js';

const ordersRouter = new express.Router();

/**
 * @route GET /admin/commandes/
 */

ordersRouter.route('/modification/:id(\\d+)')
  /**
 * POST /admin/commandes/modification/{id}
 * @summary Modify quantity for a bread of an order
 * @tags Order
 * @param {number} id.path.required -  bread_has_order id
 * @param {OrderInput} id.path.required - payload for modify quantity for an order
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .post(controllerWrapper(adminOrdersController.updateOne));

/**
 * @route GET /admin/commandes/
 */

ordersRouter.route('/suppression/:id(\\d+)')
  /**
 * POST /admin/commandes/suppression/{id}
 * @summary delete a bread of an order
 * @tags Order
 * @param {number} id.path.required -  bread_has_order id
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(adminOrdersController.deleteOne));

/**
 * @route GET /admin/commandes/
 */

ordersRouter.route('/confirmation-suppression/:id(\\d+)')
  /**
 * POST /admin/commandes/confirmation-suppression/{id}
 * @summary confirmation for delete a bread of an order
 * @tags Order
 * @param {number} id.path.required -  bread_has_order id
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(adminOrdersController.orderDeletePage));

/**
 * @route GET /admin/commandes
 */

ordersRouter.route('/lieux-livraison/:id(\\d+)')

/**
 * GET /admin/commandes/lieux-livraison/{id}
 * @summary Get a delivery place from its id to order
 * @tags Order
 * @param {number} id.path.required - Delivery place id
 * @return {Order} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(adminOrdersController.orderDateAndProductChoicePage))

  /**
 * POST /admin/commandes/lieux-livraison/{id}
 * @summary Create an order
 * @tags Order
 * @param {OrderInput} id.path.required - payload for create a order
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .post(controllerWrapper(adminOrdersController.createOne));

/**
 * @route GET /admin/commandes
 */
ordersRouter.route('/lieux-livraison')
  .get(controllerWrapper(adminOrdersController.orderPlaceCreate));

/**
 * @route GET /admin/commandes
 */
ordersRouter.route('/:id(\\d+)')

/**
 * GET /admin/commandes/{id}
 * @summary Get an order from its id
 * @tags Order
 * @param {number} id.path.required - Order id
 * @return {Order} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(adminOrdersController.orderDetailPage));

/**
 * @route GET /admin/commandes
 */

ordersRouter.route('/')

/**
 * GET /admin/commandes/
 * @summary Get orders
 * @tags Order
 * @return {OrderList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(adminOrdersController.ordersListPage));

export default ordersRouter;
