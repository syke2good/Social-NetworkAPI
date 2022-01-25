const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-Controller');

// /api/students
router.route('/').get(getAllUsers).post(createUser);

// /api/students/:studentId/assignments
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/students/:studentId
router.route('/:userId/friends/:friendId').get(addFriend).delete(removeFriend);


module.exports = router;
