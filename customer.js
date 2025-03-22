

import mongoose from 'mongoose';

import {randomUUID} from "crypto"

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model("customer", CustomerSchema);
export {Customer}

