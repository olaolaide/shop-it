import productModel from "../models/product.model.js";
import { Response, Request } from "express";
// @ts-check

/**
 * Get all products
 * @param {Request} req
 * @param {Response} res
 */
export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get single product
/**
 * Get a single product by ID
 * @param {Request} req
 * @param {Response} res
 */
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    req.checkParams("id", "Invalid product ID").isMongoId();

    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Add product
/**
 * Add a new product
 * @param {Request} req
 * @param {Response} res
 */
export const addProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete product
/**
 * Delete a product by ID
 * @param {Request} req
 * @param {Response} res
 */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update product
/**
 * Update a product by ID
 * @param {Request} req
 * @param {Response} res
 */
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
