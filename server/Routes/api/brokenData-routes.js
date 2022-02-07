const { BrokenEgg } = require("../../models/brokenData-model");
const express = require("express");
let router = express.Router();
require("dotenv").config();
const { grantAccess } = require("../../middleware/roles");
const { CheckUserExist } = require("../../middleware/auth");

router.route("/").get((req, res) => {
  res.send("welcome broken egg ");
});
router
  .route("/saveBroken/:mid")
  .post(CheckUserExist, grantAccess("createOwn", "data"), async (req, res) => {
    try {
      const mid = req.params.mid;
      const brokenData = new BrokenEgg({
        user: req.user._id,
        Data: { ...req.body },
        Labs: mid,
      });
      const result = await brokenData.save();

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        message: "can't add broken data please try again",
        error: error,
      });
    }
  });

router
  .route("/admin/:Uid/:Mid")
  .get(CheckUserExist, grantAccess("readAny", "data"), async (req, res) => {
    try {
      const mid = req.params.Mid;
      const brokenEgg = await BrokenEgg.find({ user: req.params.Uid })
        .where({Labs : mid})
        .select("Data createdAt")

      if (!brokenEgg || brokenEgg.length === 0)
        return res.status(400).json("brokenEgg not found");
      res.status(200).json(brokenEgg);
    } catch (error) {
      res
        .status(400)
        .json({
          message: "can't get brokenEgg please try again",
          error: error,
        });
    }
  });

module.exports = router;
