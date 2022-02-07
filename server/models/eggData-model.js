const mongoose = require("mongoose");
const { Schema } = mongoose;

const eggDataSchema = mongoose.Schema(
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

const EggData = mongoose.model("EggData", eggDataSchema);
module.exports = { EggData };
