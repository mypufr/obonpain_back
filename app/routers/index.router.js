import express from 'express';
import apiRouter from './api/index.apirouter.js';
import adminRouter from './admin/index.adminrouter.js';
import indexController from '../controllers/index.controller.js';

const router = new express.Router();

router.use('/api', apiRouter);
router.use('/admin', adminRouter);

// page 404
router.use(indexController.notFound);

export default router;
