import mongoose, { Schema, Document, Model } from "mongoose";

// Define the Car interface extending Document
export interface Car extends Document {
    title: string;
    description: string;
    make: string;
    carModel: string;
    variant: string;
    year: number;
    price: string;
    color: string;
    gear: string;
    fuel: string;
    mileage: string;
    images: object[];
}

// Define the Car schema
const CarSchema: Schema<Car> = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    make: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gear: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    images: {
        type: [
            {
                url: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true
    }
}, {
    timestamps: true
});

// Create the Car model using the schema
const CarModel: Model<Car> = mongoose.model<Car>('Car', CarSchema);

export default CarModel;
