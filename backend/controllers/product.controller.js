import {Response, Request} from "express";
import productModel from "../models/product.model.js";


export const getProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        res.status(200).json(products)
    } catch (err) {

    }
}


export const getProduct = async (req, res) => {

    try {
        const {id} = req.params;
        const product = productModel.find({id})
        res.status(200).json({
            message: 'Successfully getting products',
            product: id
        })
    } catch (err) {

    }
}


export const addProduct = async (req, res) => {

}


export const deleteProduct = async (req, res) => {

}

export const updateProduct = async (req, res) => {

}

