'use strict';

class AppError extends Error {
    constructor(msg, status) {
        super(msg);
        this.status = status;
    }

    static get ERROR_BAD_REQUEST()     { return 400; }
    static get ERROR_UNAUTHORIZED()    { return 401; }
    static get ERROR_FORBIDDEN()       { return 403; }
    static get ERROR_NOT_FOUND()       { return 404; }
    static get ERROR_INTERNAL_SERVER() { return 500; }

    static badRequest(msg) {
        return new AppError(msg || 'Bad Request', AppError.ERROR_BAD_REQUEST);
    }

    static unauthorized(msg) {
        return new AppError(msg || 'Unauthorized', AppError.ERROR_UNAUTHORIZED);
    }

    static forbidden(msg) {
        return new AppError(msg || 'Forbidden', AppError.ERROR_FORBIDDEN);
    }

    static notFound(msg) {
        return new AppError(msg || 'Not Found', AppError.ERROR_NOT_FOUND);
    }

    static internalServer(msg) {
        return new AppError(msg || 'Internal Server Error', AppError.ERROR_INTERNAL_SERVER);
    }
}

module.exports = AppError;