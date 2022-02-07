const {Fertilization } = require("../../models/fertilizationData-model")
const express = require("express");
let router = express.Router();
require("dotenv").config();
const { grantAccess } = require("../../middleware/roles");
const { CheckUserExist } = require("../../middleware/auth");

router.route("/").get((req,res)=>{
    res.send("welcome Fert ")
})

router
  .route("/savefert/:mid")
  .post(CheckUserExist, grantAccess("createOwn", "data"), async (req, res) => {
    try {
      const mid = req.params.mid;
      const fertilization = new Fertilization({
        user: req.user._id,
        Data: { ...req.body },
        Labs: mid,
      });
      const result = await fertilization.save();

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        message: "can't add fertlization data please try again",
        error: error,
      });
    }
  });


  router
  .route("/admin/:Uid/:Mid")
  .get(CheckUserExist, grantAccess("readAny", "data"), async (req, res) => {
    try {
      const mid = req.params.Mid;
      const fertilization = await Fertilization.find({ user: req.params.Uid })
        .where({Labs : mid})
        .populate("user", "username role");

      if (!fertilization || fertilization.length === 0)
        return res.status(400).json("fertilization not found");
      res.status(200).json(fertilization);
    } catch (error) {
      res
        .status(400)
        .json({
          message: "can't get fertilization please try again",
          error: error,
        });
    }
  });

module.exports = router;
