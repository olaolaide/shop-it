import mongoose from 'mongoose'

// @ts-check
/**
 * Product Schema
 * @typedef {Object} Product
 * @property {string} name - The name of the product
 * @property {number} price - The price of the product
 * @property {Array<Object>} images - The images of the product
 * @property {string} description - The description of the product
 * @property {number} ratings - The ratings of the product
 * @property {string} category - The category of the product
 * @property {string} seller - The seller of the product
 * @property {number} stock - The stock of the product
 * @property {number} noOfReviews - The number of reviews for the product
 * @property {Array<Object>} reviews - The reviews for the product
 * @property {mongoose.Schema.Types.ObjectId} user - The user who added the product
 */
/** @type {mongoose.Schema<Product>} */
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [200, 'The name is too long. It should be at most 200 characters.'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price should be a positive number'],

    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        }
    ],
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlength: [1000, 'The description is too long. It should be at most 1000 characters.'],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        enum: {
            values: [
                "Electronics",
                "Computers & Accessories",
                "Smartphones",
                "Fashion",
                "Men's Clothing",
                "Women's Clothing",
                "Shoes",
                "Beauty & Personal Care",
                "Health & Wellness",
                "Home & Kitchen",
                "Furniture",
                "Appliances",
                "Books",
                "Toys & Games",
                "Sports & Outdoors",
                "Automotive",
                "Pet Supplies",
                "Groceries",
                "Jewellery",
                "Watches",
                "Office Supplies",
                "Baby Products",
                "Garden & Outdoor",
                "Music & Instruments",
                "Gaming",
                "Cameras & Photography"
            ],
            message: "Please select a category",
        }
    },
    seller: {
        type: String,
        required: [true, 'Product seller is required'],
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        min: [0, 'Current stock is required'],
    },
    noOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true})

/** @type {import("mongoose").Model<Product>} */
const productModel = new mongoose.model('Product', productSchema)

export default productModel