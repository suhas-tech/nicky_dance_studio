const express = require("express");
const router = express.Router();

const { register, authenticate, checkToken, slack } = require("../controller/user");
const { withAuth } = require("../middleware");

router.post("/api/register", register);

router.post("/api/authenticate", authenticate);

router.get("/api/checkToken", withAuth, checkToken);

router.post("api/slack-action-server", slack)

module.exports = router;
