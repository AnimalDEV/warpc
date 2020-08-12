import {RpcError} from "./RpcError.ts";

export class Response {
    jsonrpc: string;
    id: number | string | null;
    result?: any;
    error?: RpcError;

    constructor(id: number | string | null, result?: unknown, error?: RpcError, version = "2.0") {
        this.jsonrpc = version;
        this.id = id;
        this.result = result;
        this.error = error;
    }

    toJSON() {
        return {
            jsonrpc: this.jsonrpc,
            id: this.id,
            result: this.result || undefined,
            error: this.error
        };
    }

    stringify(): string {
        return "";
    }
}