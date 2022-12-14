const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  createFriend,
  deleteUser,
  deleteFriend,
} = require("../../controllers/UserController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:id/friends/:friendId").post(createFriend).delete(deleteFriend);

module.exports = router;
