const mongoose = require("mongoose");
const { Schema } = mongoose;

const hatchingEggsSchema = mongoose.Schema(
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

const HatchingEggs = mongoose.model("HatchingEggs", hatchingEggsSchema);
module.exports = { HatchingEggs };
