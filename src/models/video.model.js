import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      rquired: true,
    },
    thumbnail: {
      type: String,
      rquired: true,
    },
    title: {
      type: String,
      rquired: true,
    },
    description: {
      type: String,
      rquired: true,
    },
    duration: {
      type: Number, // with the help of cloudinary
      rquired: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Vidoe = mongoose.model("Video", videoSchema);
