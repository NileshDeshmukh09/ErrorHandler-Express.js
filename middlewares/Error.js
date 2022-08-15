const errorMiddleware = ( err ,req , res , next ) => {

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    res.status( err.statusCode ).json({
        status : err.statusCode,
        success : false,
        message : err.message,
    });
}


export default errorMiddleware;