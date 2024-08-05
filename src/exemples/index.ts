import ResilientClient from "../index.ts";

const client = new ResilientClient({ timeout: 10000 });

client
    .fetch({
        method: "get",
        url: "https://www.google.com",
    })
    .then(console.log)
    .catch(console.error);
