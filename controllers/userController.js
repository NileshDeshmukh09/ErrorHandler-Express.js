import ErrorHandler from '../utils/errorHandler.js'

export const newUser = ( req, res , next ) => {

    const userExist = true;

    if ( userExist ) {
        // return next(new ErrorHandler("user Already Exist", 400))
        return next(new ErrorHandler())
    }

    res
        .status(201)
        .json({
            message: "User Created Successfully !",
        });
}