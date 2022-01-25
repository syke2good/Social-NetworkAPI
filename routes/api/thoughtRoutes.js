const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-Controller');

// /api/students
router.route('/').get(getAllThoughts).post(createThought);

// /api/students/:studentId/assignments
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/students/:studentId
router.route('/:thoughtId/reactions/:reactionId').get(addReaction).delete(removeReaction);


module.exports = router;
