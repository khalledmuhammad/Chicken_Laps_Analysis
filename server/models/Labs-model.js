const mongoose = require("mongoose");
const { Schema } = mongoose;

const labsSchema = mongoose.Schema(
  {
  
    Data: {
        EggData: {
            type: Schema.Types.ObjectId,
            ref: "EggData",
          },
          Fertilization: {
            type: Schema.Types.ObjectId,
            ref: "Fertilization",
          },
          HatchingEggs: {
            type: Schema.Types.ObjectId,
            ref: "HatchingEggs",
          },
          BrokenEgg: {
            type: Schema.Types.ObjectId,
            ref: "BrokenEgg",
          },
    },

   
  },
  { timestamps: true }
);

const Labs = mongoose.model("Labs", labsSchema);
module.exports = { Labs };
