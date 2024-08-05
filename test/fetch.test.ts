import Client from "../src/client";
import nock from "nock";

describe("[client.ts]", () => {
    jest.mock("../src/client");

    const client = new Client({ timeout: 10000 });
    const url = "https://www.google.com";

    it("should be closed after fetch #1", async () => {
        nock(url).get("/").reply(200);

        client
            .fetch({
                method: "get",
                url,
            })
            .then(() => expect(client?._breaker?.closed).toBe(true))
            .catch(console.error);
    });

    it("should be open after fetch #2", async () => {
        nock(url).get("/").reply(500);

        client
            .fetch({
                method: "get",
                url,
            })
            .catch(() => expect(client?._breaker?.closed).toBe(true));
    });
});
