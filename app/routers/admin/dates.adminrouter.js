import express from 'express';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import adminPlacesHasDatesController from '../../controllers/admin/placesHasDates.controller.js';
import adminDateController from '../../controllers/admin/dates.controller.js';

const datesRouter = new express.Router();

datesRouter.route('/')
  .get(controllerWrapper(adminDateController.datePage))
  .post(controllerWrapper(adminDateController.createOne));

datesRouter.route('/creation')
  .get(controllerWrapper(adminDateController.dateCreationPage));

datesRouter.route('/:id(\\d+)')
  .get(controllerWrapper(adminDateController.dateDetailPage))
  .post(controllerWrapper(adminDateController.updateOne));

datesRouter.route('/:id(\\d+)/lieux-livraison')
  .get(controllerWrapper(adminPlacesHasDatesController.datePlacesPage))
  .post(controllerWrapper(adminPlacesHasDatesController.createOne));

datesRouter.route('/confirmation-suppression/:id(\\d+)')
  .get(controllerWrapper(adminPlacesHasDatesController.orderDeletePage));

datesRouter.route('/suppressionlieu/:id(\\d+)')
  .get(controllerWrapper(adminPlacesHasDatesController.deleteOne));

export default datesRouter;
