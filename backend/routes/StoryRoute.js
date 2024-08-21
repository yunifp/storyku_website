import express from 'express';
import { getStories, getStoriesById, createStory, updateStory, deleteStory } from "../controllers/StoryController.js";

const router = express.Router();

router.get('/stories', getStories);
router.get('/stories/:id', getStoriesById);
router.post('/stories', createStory);
router.patch('/stories/:id', updateStory);
router.delete('/stories/:id', deleteStory);


export default router;
