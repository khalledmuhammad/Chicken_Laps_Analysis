const { EggData } = require("../../models/eggData-model");
const express = require("express");
let router = express.Router();
require("dotenv").config();
const { grantAccess } = require("../../middleware/roles");
const { CheckUserExist } = require("../../middleware/auth");

router.route("/").get((req, res) => {
  res.send("welcome egg data ");
});
router
  .route("/eggData/:mid")
  .post(CheckUserExist, grantAccess("createOwn", "data"), async (req, res) => {
    try {
      const mid = req.params.mid;
      const eggData = new EggData({
        user: req.user._id,
        Data: { ...req.body },
        Labs: mid,
      });
      const result = await eggData.save();

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        message: "can't add egg data please try again",
        error: error,
      });
    }
  });

router
  .route("/admin/:Uid/:Mid")
  .get(CheckUserExist, grantAccess("readAny", "data"), async (req, res) => {
    try {
      const mid = req.params.Mid;
      const eggData = await EggData.find({ user: req.params.Uid })
        .where({Labs : mid})
        .populate("user", "username role"); //mongoose remove the capital U from user so mtfkr4 lyh hna user m4 User 3ady m4 m4kla

      if (!eggData || eggData.length === 0)
        return res.status(400).json("eggData not found");
      res.status(200).json(eggData);
    } catch (error) {
      res
        .status(400)
        .json({
          message: "can't get eggData please try again",
          error: error,
        });
    }
  });
module.exports = router;
