const appMiddleware =(req,res,next)=>{
    console.log("Inside the application middleware");
    next()
}

module.exports = appMiddleware