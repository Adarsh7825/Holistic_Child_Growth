const express = require('express');
const childActivity = require('../controllers/childActivity.controller'); // Import the controller
const geminiService = require('../utils/geminiService');
const { verifyToken } = require('../middleware/authMiddleware');
const recommendationController = require('../controllers/recommendationController');
// Route to create a child profile

const router = express.Router();

router.post('/createChildProfile', verifyToken, childActivity.createChildProfile);
router.get('/getAllChildProfiles', verifyToken, childActivity.getAllChildProfiles);
router.post('/addActivity', verifyToken, childActivity.addActivity);
router.get('/getActivities/:childId', verifyToken, childActivity.getActivitiesByChildId);
router.post('/performAnalysis', verifyToken, geminiService.generateAnalysis);
router.get('/generateMonthlySummary', verifyToken, childActivity.generateMonthlySummary);
router.get('/categorizedActivities', verifyToken, geminiService.categorizeActivitiesUsingGemini);
router.get('/getRecommendations/:childId', verifyToken, recommendationController.getRecommendations);

// Add more routes as needed
module.exports = router;
