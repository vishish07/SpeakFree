const express = require("express");
const {
  allComplaints,
  postComplaint
} = require("../controllers/complaintControllers");

const router = express.Router();

router.route("/").get(allComplaints);
router.route("/").post(postComplaint);

module.exports = router;