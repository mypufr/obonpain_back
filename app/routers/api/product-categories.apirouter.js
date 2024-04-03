import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import productCategoriesController from '../../controllers/product-categories.controller.js';
import validateData from '../../schemas/index.validate.js';
import productCategoriesSchema from '../../schemas/productcategories.schema.js';
import authenticateToken from '../../helpers/jwt.verify.js';

const productCategoriesRouter = new express.Router();

/**
 * @route GET /api/product-categories/
 */

productCategoriesRouter.route('/:id(\\d+)/products')

/**
 * GET /api/product-categories/{id}/products
 * @summary Get a product list of one product category from id of the product category
 * @tags Product-categories
 * @param {number} id.path.required - Product Category id
 * @return {ProductList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(productCategoriesController.findProductsListFromOneCategory));

/**
 * @route GET /api/product-categories/
 */

productCategoriesRouter.route('/:id(\\d+)')

/**
 * GET /api/product-categories/{id}
 * @summary Get a product category from its id
 * @tags Product-categories
 * @param {number} id.path.required - Product Category id
 * @return {ProductCategory} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(authenticateToken('admin')), controllerWrapper(productCategoriesController.findByPk))

/**
 * PATCH /api/product-categories/{id}
 * @summary Update a product category from its id
 * @tags Product-categories
 * @param {number} id.path.required - Product Category id
 * @param {ProductCategoryInput} request.body.required - payload for update product category
 * @return {ProductCategoryInput} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .patch(controllerWrapper(authenticateToken('admin')), validateData('body', productCategoriesSchema), controllerWrapper(productCategoriesController.updateOne));
//  .delete(controllerWrapper(productCategoriesController.deleteOne));

/**
 * @route GET /api/product-categories/
 */
productCategoriesRouter.route('/')

/**
 * GET /api/product-categories/
 * @summary Get all product categories
 * @tags Product-categories
 * @return {ProductCategoryList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .get(controllerWrapper(productCategoriesController.findAll))

/**
 * POST /api/product-categories/
 * @summary Create a product category
 * @tags Product-categories
 * @param {ProductCategoryInput} request.body.required - payload for create product category
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */

  .post(controllerWrapper(authenticateToken('admin')), validateData('body', productCategoriesSchema), controllerWrapper(productCategoriesController.createOne));

export default productCategoriesRouter;
