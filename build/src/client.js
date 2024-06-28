import CircuitBreaker from "opossum";
import Request from "./request.ts";
class Client {
    constructor(options) {
        this.fetch = (requestConfig, fb) => {
            const abortController = new AbortController();
            const circuitBreakerOptions = Object.assign({ abortController }, this._options);
            const request = new Request(requestConfig);
            let breaker;
            if (this._breaker) {
                breaker = this._breaker;
            }
            else {
                breaker = new CircuitBreaker(request.exec, circuitBreakerOptions);
                this._breaker = breaker;
            }
            fb && breaker.fallback(fb);
            return breaker.fire(circuitBreakerOptions.abortController.signal);
        };
        this._options = options;
        this._breaker = null;
    }
}
export default Client;
