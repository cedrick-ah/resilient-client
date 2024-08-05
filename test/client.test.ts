import Client from "../src/client";

describe("[client.ts]", () => {
    jest.mock("../src/client");

    it("should create new Client", async () => {
        const client = new Client({ timeout: 10000 });
        expect(client).toBeInstanceOf(Client);
    });
});
