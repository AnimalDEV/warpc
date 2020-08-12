enum ErrorCodes {
    ParseError = -32700,
    MissingMethod = -32601,
    InvalidRequest = -32600,
    InvalidParams = -32602,
    InternalError = -32603
}

export class RpcError extends Error {
    readonly code: number;
    readonly message: string;
    readonly data?: any;

    constructor(code: number, message: string, data?: any) {
        super(message);
        this.code = code;
        this.message = message;
        this.data = data;
        this.name = "RpcError";
    }

    toJSON() {
        return {
            code: this.code,
            message: this.message,
            data: this.data
        }
    }
}

export class ParseError extends RpcError {
    constructor(data?: any) {
        super(ErrorCodes.ParseError, "Parse error", data);
        this.name = "ParseError";
    }
}

export class InvalidRequestError extends RpcError {
    constructor(data?: any) {
        super(ErrorCodes.InvalidRequest, "Invalid Request", data);
        this.name = "InvalidRequestError";
    }
}

export class MissingMethodError extends RpcError {
    constructor(data?: any) {
        super(ErrorCodes.MissingMethod, "Method not found", data);
        this.name = "MissingMethodError";
    }
}

export class InvalidParamsError extends RpcError {
    constructor(data?: any) {
        super(ErrorCodes.InvalidParams, "Invalid params", data);
        this.name = "InvalidParamsError";
    }
}

export class InternalError extends RpcError {
    constructor(data?: any) {
        super(ErrorCodes.InternalError, "Internal error", data);
        this.name = "InternalError";
    }
}
