import CircuitBreaker from "opossum";
import Request from "./request.ts";
import { AxiosRequestConfig } from "axios";

class Client {
    _options;
    _breaker: CircuitBreaker | null;

    constructor(options: CircuitBreaker.Options) {
        this._options = options;
        this._breaker = null;
    }

    fetch = (requestConfig: AxiosRequestConfig, fb?: () => any) => {
        const abortController = new AbortController();
        const circuitBreakerOptions = {
            abortController,
            ...this._options,
        };

        const request = new Request(requestConfig);
        let breaker: CircuitBreaker;
        if (this._breaker) {
            breaker = this._breaker;
        } else {
            breaker = new CircuitBreaker(request.exec, circuitBreakerOptions);
            this._breaker = breaker;
        }

        fb && breaker.fallback(fb);
        return breaker.fire(circuitBreakerOptions.abortController.signal);
    };
}

export default Client;
