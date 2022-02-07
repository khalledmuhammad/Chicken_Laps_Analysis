const mongoose = require("mongoose");
const { Schema } = mongoose;

const fertilizationSchema = mongoose.Schema(
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

const Fertilization = mongoose.model("Fertilization", fertilizationSchema);
module.exports = { Fertilization };
