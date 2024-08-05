import Request from "../src/request";

describe("[request.ts]", () => {
    jest.mock("../src/request");

    it("should create new Request", async () => {
        const request = new Request({
            method: "get",
            url: "http://www.google.com",
        });
        expect(request).toBeInstanceOf(Request);
    });
});
