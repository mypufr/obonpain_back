import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import adminMouldController from '../../controllers/admin/moulds.controller.js';

const mouldsRouter = new express.Router();

/**
 * @route GET /admin/moules
 */
mouldsRouter.route('/:id(\\d+)')

/**
 * GET /admin/moules/{id}
 * @summary Get a mould from its id
 * @tags Mould
 * @param {number} id.path.required - Mould id
 * @return {Mould} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(adminMouldController.mouldDetailPage))

/**
 * PATCH /admin/moules/{id}
 * @summary Patch a mould from its id
 * @tags Mould
 * @param {number} id.path.required - Mould id
 * @return {Mould} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .post(controllerWrapper(adminMouldController.updateOne));

/**
 * @route GET /admin/moules
 */

mouldsRouter.route('/')

/**
 * GET /admin/moules/
 * @summary Get moulds
 * @tags Mould
 * @return {MouldList} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .get(controllerWrapper(adminMouldController.mouldsPage))

  /**
 * POST /admin/moules/
 * @summary Create a mould
 * @tags Mould
 * @param {MouldInput} id.path.required - payload for create a mould
 * @return {RowCount} 200 - success response - application/json
 * @return {Error} 400 - error response - bad input - application/json
 * @return {Error} 404 - error response - not found - application/json
 * @return {Error} 500 - error response - internal server error - application/json
 */
  .post(controllerWrapper(adminMouldController.createOne));

export default mouldsRouter;
