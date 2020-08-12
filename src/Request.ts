export class Request {
    jsonrpc: string;
    id: string | number;
    method: string;
    params?: Array<any> | { [key: string]: any };

    constructor(id: number | string, method: string, params?: Array<any> | { [key: string]: any }, version = "2.0") {
        this.jsonrpc = version;
        this.id = id;
        this.method = method;
        this.params = params;
    }

    stringify(): string {
        return JSON.stringify(this);
    }
}