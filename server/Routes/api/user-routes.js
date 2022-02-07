const express = require("express");
let router = express.Router();
require("dotenv").config();
const { User } = require("../../models/user-models");
const { grantAccess } = require("../../middleware/roles");

const { CheckUserExist } = require("../../middleware/auth");
router.route("/register")
.post( CheckUserExist, grantAccess("createAny", "profile") , async (req, res) => {
  try {
    if (await User.userTaken(req.body.username)) {
      return res.status(400).json({ message: "Sorry User taken" }); //if email taken kill the process with this return
    }
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });

    const token = user.GenerateToken();
    const doc = await user.save();

    console.log(doc);
    res.status(200).send({
      username: doc.username,
      role: doc.role,
      id: doc._id,
    });
  } catch (error) {
    res.status(400).json({
      message: "error here",
      error,
    });
  }
});

router.route("/signin").post(async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json({ message: " wrong User" });

    const compare = await user.deCryptPassword(req.body.password);
    if (!compare)
      return res
        .status(400)
        .json({ message: "password not valid for this User " });

    const token = user.GenerateToken();

    res
    .cookie("x-access-token", token)
    .status(200)
    .send({
      username: user.username,
      role: user.role,
      id : user._id
    });
  } catch (error) {
    res.status(400).json({ message: "Error", error: error });
  }
});

router
  .route("/profile")
  .get(CheckUserExist, grantAccess("readOwn", "profile"), async (req, res) => {
    const permission = res.locals.permission;
    res.json(permission.filter(req.user._doc));
  })
  .patch(
    CheckUserExist,
    grantAccess("updateOwn", "profile"),
    async (req, res) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          {
            _id: req.user._id,
          },
          {
            $set: {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              age: req.body.age,
            },
          },
          {
            new: true,
          }
        );
        if (!updatedUser) return res.status(401).json("please sign in");
        const permission = res.locals.permission;
        res.json(permission.filter(updatedUser._doc));
      } catch (error) {
        res.status(401).json({
          message: "can't update profile",
          error: error,
        });
      }
    }
  );

router.route("/isauthed").get(CheckUserExist, async (req, res) => {
  res.status(200).json({
    username: req.user.username,
    role: req.user.role,
    id : req.user._id

  });
});

router.route("/View-users")
  .get(CheckUserExist, grantAccess("readAny", "user"), async (req, res) => {
    try {
    
      const users = await User.find({role:"user"}).select('username _id')
      if(!users|| users.length === 0) return res.status(400).json("users not found")
    
      res.status(200).json(users)
  } catch (error) {
      res.status(400).json({ message: "can't get users please try again", error: error });

  }
  
  })

module.exports = router;
