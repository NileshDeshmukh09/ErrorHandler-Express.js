import ErrorHandler from '../utils/errorHandler.js';
import { User } from "../models/user.js";

export const newUser = async (req, res, next) => {

    try {
        
        const  user = await User.findOne({ email : "nileshDeshmukh@gmail.com" });

        if ( user ) {
            return next(new ErrorHandler("user Already Exist", 400))
            // return next(new ErrorHandler())
        }

        await User.create({
            name: "Nilesh",
            email: "nileshDeshmukh@gmail.com"
        })

        res
            .status(201)
            .json({
                message: "User Created Successfully !",
            });

    } catch (error) {
        return next( error );
    }
}