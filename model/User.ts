import mongoose, {Schema, Document, Mongoose} from "mongoose";

// Define the User interface extending Document
export interface User extends Document {
    email: string;
    password: string;
    role: "admin";
    forgotPasswordCode: string;
    forgotPasswordExpiry: Date;
}

// Define the User schema
const UserSchema: Schema<User> = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address']  // Validates the email format
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        required: [true, "Role of user is required"],
        default: "admin"
    },
    forgotPasswordCode: {
        type: String,
    },
    forgotPasswordExpiry: {
        type: Date,
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))
export default UserModel;