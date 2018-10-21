const errorHandler = (response, err) => {
    const statusCode = err.status || 500;
    response.status(statusCode).json({
        success: false,
        error: err.message
    });
};

const successHandler = (response, data) => {
    response.json({
        success: true,
        data
    });
};

export const asyncHandler = fn => {
    return async function(request, response) {
        try {
            const data = await fn(request, response);
            successHandler(response, data);
        } catch (err) {
            if (!process.env.NODE_ENV === 'test' || !err.status) {
                console.log(err);
            }
            errorHandler(response, err);
        }
    };
};
