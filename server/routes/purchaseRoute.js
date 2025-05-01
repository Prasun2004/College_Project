import express from 'express';
import isAuthenticated from "../middlewares/Authinticate.js";
import { createCheeckoutSession, stripeWebhook } from '../controller/purchaseCourseController.js';

const router=express.Router();

router.route('/cheeckout/create-cheeckout-session').post(isAuthenticated,createCheeckoutSession);
router.route('/webhok').post(express.raw({type:'application/json'}),stripeWebhook);
router.route('/course/:courseId/details-with-status').get();
router.route('/').get();

export default router;