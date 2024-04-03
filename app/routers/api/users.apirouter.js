import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import usersController from '../../controllers/users.controller.js';
import ordersController from '../../controllers/orders.controller.js';
import validateData from '../../schemas/index.validate.js';
import userSchema from '../../schemas/user.schema.js';
import ordersPostSchema from '../../schemas/orders.post.schema.js';
import authenticateToken from '../../helpers/jwt.verify.js';

const usersRouter = new express.Router();

/**
 * @route GET /api/users/
 */
usersRouter.route('/:id(\\d+)/orders')

/**
 * GET /api/users/{id}/orders
 * @summary Get user's orders from its id
 * @tags user's order
 * @param {number} id.path.required - user id
 * @return {OrdersObjet} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  // eslint-disable-next-line max-len
  .get(controllerWrapper(authenticateToken('client')), controllerWrapper(ordersController.findOrdersListByUserPk))

/**
 * POST /api/users/{id}/orders
 * @summary Post a user's order from its id
 * @tags user's order
 * @param {number} id.path.required - user id
 * @param {OrderInput} request.body.required - payload for create order
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  // eslint-disable-next-line max-len
  .post(controllerWrapper(authenticateToken('client')), validateData('body', ordersPostSchema), controllerWrapper(ordersController.createOneOrderByUserPk));

/**
* @route GET /api/users/:id/
*/
usersRouter.route('/:id(\\d+)')

/**
 * GET /api/users/{id}
 * @summary Get a user list from id of the user table
 * @tags User
 * @param {number} id.path.required - User id
 * @return {usersList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(authenticateToken('admin et client')), controllerWrapper(usersController.findByPk))

/**
 * PATCH /api/users/{id}
 * @summary Update a user from its id
 * @tags User
 * @param {number} id.path.required - User id
 * @param {userInput} request.body.required - payload for update User
 * @return {userInput} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .patch(controllerWrapper(authenticateToken('admin et client')), validateData('body', userSchema), controllerWrapper(usersController.updateOne));

/**
* @route GET /api/users/
*/

usersRouter.route('/')

/**
 * GET /api/users/
 * @summary get the list of users
 * @tags User
 * @param {userInput} request.body.required - payload for create product category
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(authenticateToken('admin')), controllerWrapper(usersController.findAll));

export default usersRouter;
