# resilient-client

A resilience http client, fail and recover fast.

## Installation

```
npm i resilient-client
```

## Usage

```
import ResilientClient from "../index.ts";

const client = new ResilientClient({ timeout: 10000 });

client
    .fetch(
        {
            method: "get",
            url: "url",
        },
        () => "Sorry, out of service right now"
    )
    .then(console.log)
    .catch(console.error);
```
