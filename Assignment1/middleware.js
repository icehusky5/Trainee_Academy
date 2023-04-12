// define loggerMiddleware function that logs request details to the console
let loggerMiddleware = (req, res, next) => {
    let body = "";
    if (req.body) {
        body = JSON.stringify(req.body);
    }
    let time = new Date().toISOString();
    let method = req.method;
    let url = req.url;
  
    console.log(`[${time}] ${method} ${url} ${body}`);
  
    next();
};

// define notFoundMiddleware function that sends a 404 response with an error message
let notFoundMiddleware = (req, res, next) => {
    let error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404).send(error.toString());
};

// export loggerMiddleware and notFoundMiddleware functions for use in other modules
export {loggerMiddleware, notFoundMiddleware};