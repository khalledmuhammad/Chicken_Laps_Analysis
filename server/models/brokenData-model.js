const mongoose = require("mongoose");
const { Schema } = mongoose;

const BrokenEggSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    Data: {},
    Labs :{
      type: Schema.Types.ObjectId,
      ref: "Labs" 
    }
   
  },
  { timestamps: true }
);

const BrokenEgg = mongoose.model("BrokenEgg", BrokenEggSchema);
module.exports = { BrokenEgg };