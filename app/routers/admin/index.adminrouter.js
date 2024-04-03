import express from 'express';
import controllerWrapperAdmin from '../../helpers/controller.wrapper.admin.js';
import adminClientsController from '../../controllers/admin/clients.controller.js';
import adminBreadTypeController from '../../controllers/admin/bread-type.controller.js';

import adminPlacesController from '../../controllers/admin/places.controller.js';
import adminBreadController from '../../controllers/admin/bread.controller.js';
import mouldsRouter from './moulds.adminrouter.js';
import ordersRouter from './orders.adminrouter.js';
import adminPlacesHasDatesController from '../../controllers/admin/placesHasDates.controller.js';
import indexController from '../../controllers/admin/index.controller.js';

import datesRouter from './dates.adminrouter.js';

const adminRouter = new express.Router();

adminRouter.use('/moules', mouldsRouter);
adminRouter.use('/commandes', ordersRouter);
adminRouter.use('/dates-livraison', datesRouter);

// bread_type routes
adminRouter.route('/gamme-pains/:id(\\d+)')
  .get(controllerWrapperAdmin(adminBreadTypeController.breadTypeDetailPage))
  .post(controllerWrapperAdmin(adminBreadTypeController.updateOne));

adminRouter.route('/gamme-pains/creation')
  .get(controllerWrapperAdmin(adminBreadTypeController.breadTypeCreationPage));

adminRouter.route('/gamme-pains')
  .get(controllerWrapperAdmin(adminBreadTypeController.breadTypePage))
  .post(controllerWrapperAdmin(adminBreadTypeController.createOne));

// bread road
adminRouter.route('/pains/:id(\\d+)')
  .get(controllerWrapperAdmin(adminBreadController.breadDetailPage))
  .post(controllerWrapperAdmin(adminBreadController.updateOne));

adminRouter.route('/pains/creation')
  .get(controllerWrapperAdmin(adminBreadController.breadCreationPage));

adminRouter.route('/pains')
  .get(controllerWrapperAdmin(adminBreadController.breadPage))
  .post(controllerWrapperAdmin(adminBreadController.createOne));

// client road
adminRouter.route('/clients')
  .get(controllerWrapperAdmin(adminClientsController.clientsPage));

adminRouter.route('/clients/:id(\\d+)')
  .get(controllerWrapperAdmin(adminClientsController.clientDetailPage))
  .post(controllerWrapperAdmin(adminClientsController.clientUpdate));

// places road
adminRouter.route('/lieux-livraison')
  .get(controllerWrapperAdmin(adminPlacesController.placesPage))
  .post(controllerWrapperAdmin(adminPlacesController.createOne));

adminRouter.route('/lieux-livraison/:id(\\d+)')
  .get(controllerWrapperAdmin(adminPlacesController.placeDetailPage))
  .post(controllerWrapperAdmin(adminPlacesController.updateOne));

// page erreur
adminRouter.use(indexController.notFound);

export default adminRouter;
