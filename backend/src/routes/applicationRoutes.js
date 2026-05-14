const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");

// Define routes
router.get("/", applicationController.getApplications);
router.post("/", applicationController.createApplication);
router.put("/:id", applicationController.updateApplication);
router.delete("/:id", applicationController.deleteApplication);

module.exports = router;