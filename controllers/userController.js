import ErrorHandler from '../utils/errorHandler.js'

export const newUser = ( req, res , next ) => {

    const userExist = true;

    if ( userExist ) {
        return next(new ErrorHandler("user Already Exist", 400))
    }

    res
        .status(201)
        .json({
            message: "User Created Successfully !",
        });
}