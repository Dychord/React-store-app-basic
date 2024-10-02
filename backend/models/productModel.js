import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  rate: {
    type: Number,
    default: 0,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: ratingSchema, // Using a subdocument for rating
      default: {
        rate: 0,
        count: 0,
      },
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);
export default productModel;
