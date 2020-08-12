import {assertEquals} from "https://deno.land/std@0.63.0/testing/asserts.ts";
import {Request} from "../src/Request.ts";

Deno.test("Test Assert", () => {
    const request = new Request(1, "foo", {bar: 2}, "3.1");
    assertEquals(request.stringify(), `{"jsonrpc":"3.1","id":1,"method":"foo","params":{"bar":2}}`);
});