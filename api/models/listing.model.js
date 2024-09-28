import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    college_name: {
      type: String,
      required: true,
    },
    doi: {
      type: Date,
      required: true,
    },
    description:{
      type:String,
      required:true,
    },
    tips:{
      type:String,
      require:false
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
