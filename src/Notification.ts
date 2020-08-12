export class Notification {
    jsonrpc: string;
    method: string;
    params?: Array<unknown> | { [key: string]: unknown };

    constructor(method: string, params?: Array<unknown> | { [key: string]: unknown }, version = "2.0") {
        this.jsonrpc = version;
        this.method = method;
        this.params = params;
    }

    stringify(): string {
        return "";
    }
}