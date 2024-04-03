import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import productsController from '../../controllers/products.controller.js';
import validateData from '../../schemas/index.validate.js';
import productsSchema from '../../schemas/products.schema.js';
import authenticateToken from '../../helpers/jwt.verify.js';

const productsRouter = new express.Router();

/**
 * @route GET /api/product/
 */

productsRouter.route('/:id(\\d+)')

/**
 * GET /api/product/{id}
 * @summary Get a product from its id
 * @tags Products
 * @param {number} id.path.required - Product id
 * @return {Product} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(authenticateToken('admin')), controllerWrapper(productsController.findByPk))

/**
 * PATCH /api/product-categories/{id}
 * @summary Update a product from its id
 * @tags Products
 * @param {number} id.path.required - Product id
 * @param {ProductInput} request.body.required - payload for update product
 * @return {ProductInput} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .patch(controllerWrapper(authenticateToken('admin')), validateData('body', productsSchema), controllerWrapper(productsController.updateOne));

//  .delete(controllerWrapper(productsController.deleteOne));

/**
 * @route GET /api/products/
 */
productsRouter.route('/')

/**
 * GET /api/products/
 * @summary Get all products
 * @tags Products
 * @return {ProductsList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(authenticateToken('admin et client')), controllerWrapper(productsController.findAll))

/**
 * POST /api/product-categories/
 * @summary Create a product
 * @tags Product
 * @param {ProductInput} request.body.required - payload for create product
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .post(controllerWrapper(authenticateToken('admin')), validateData('body', productsSchema), controllerWrapper(productsController.createOne));

export default productsRouter;
