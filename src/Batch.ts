import {Request} from "./Request.ts";
import {Response} from "./Response.ts";
import {Notification} from "./Notification.ts";
import {InvalidRequestError} from "./RpcError.ts";

export class Batch extends Array<Request | Notification | Response> {
    constructor(...requests: (Request | Notification | Response)[]) {
        super(...requests);
        for(const [i, request] of requests.entries()) {
            if(!(request instanceof Request || request instanceof Notification)) {
                this[i] = new Response(null, null, new InvalidRequestError());
            }
        }
    }

    stringify(): string {
        return "";
    }
}