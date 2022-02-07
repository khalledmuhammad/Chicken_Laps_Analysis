const { Labs } = require("../../models/Labs-model");
const express = require("express");
let router = express.Router();
require("dotenv").config();
const { grantAccess } = require("../../middleware/roles");
const { CheckUserExist } = require("../../middleware/auth");

router.route("/").get((req, res) => {
  res.send("welcome Waha lab ");
});


/*                         const LabData = [
                          {
                        
                          name: "معمل الواحات معمل تسمين",
                        },
                        {
                        
                          name: "معمل الجدود راس غارب ",
                        },
                        {
                        
                          name: "معمل التسمين كفر الجبل",
                        }
                      ]
Labs.insertMany(LabData)
    .then(value => {
        console.log("Saved Successfully");
    })
    .catch(error => {
        console.log(error);
    })
   */
    router.route("/get-labs")
  .get(async(req,res)=>{
    try {
        
        const labs = await Labs.find()
        if(!labs|| labs.length === 0) return res.status(400).json("labs not found")
        res.status(200).json(labs)
    } catch (error) {
        res.status(400).json({ message: "can't get labs please try again", error: error });

    }
})

 
    

module.exports = router;
