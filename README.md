# resilient-client

A resilience http client, fail and recover fast. This package is in beta. Contributions are welcome.

## Installation

```
npm i resilient-client
```

## Usage

```
import ResilientClient from "resilient-client";

const client = new ResilientClient({ timeout: 10000 });

client
    .fetch(
        {
            method: "get",
            url: "url",
        }
    )
    .then(console.log)
    .catch(console.error);
```
