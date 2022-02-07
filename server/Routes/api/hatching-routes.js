const {HatchingEggs } = require("../../models/hatching-model")
const express = require("express");
let router = express.Router();
require("dotenv").config();
const { grantAccess } = require("../../middleware/roles");
const { CheckUserExist } = require("../../middleware/auth");

router.route("/").get((req,res)=>{
    res.send("welcome hatching ")
})
router
  .route("/savehatching/:mid")
  .post(CheckUserExist, grantAccess("createOwn", "data"), async (req, res) => {
    try {
      const mid = req.params.mid;
      const hatchingEggs = new HatchingEggs({
        user: req.user._id,
        Data: { ...req.body },
        Labs: mid,
      });
      const result = await hatchingEggs.save();

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        message: "can't add hatchingEggs data please try again",
        error: error,
      });
    }
  });


  router
  .route("/admin/:Uid/:Mid")
  .get(CheckUserExist, grantAccess("readAny", "data"), async (req, res) => {
    try {
      const mid = req.params.Mid;
      const hatchingEggs = await HatchingEggs.find({ user: req.params.Uid })
        .where({Labs : mid})
        .populate("user", "username role");

      if (!hatchingEggs || hatchingEggs.length === 0)
        return res.status(400).json("hatchingEggs not found");
      res.status(200).json(hatchingEggs);
    } catch (error) {
      res
        .status(400)
        .json({
          message: "can't get hatchingEggs please try again",
          error: error,
        });
    }
  });



module.exports = router;
