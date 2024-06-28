import Request from "../src/request";

let request: Request;

describe("[request.ts]", () => {
    jest.mock("../src/request");

    beforeEach(() => {
        request = new Request({ method: "get", url: "http://www.google.com" });
    });

    it("should make a http request", async () => {
        const abortController = new AbortController();
        request.exec(abortController.signal).then((data) => {
            expect(data.status).toBe(200);
        });
    });
});
