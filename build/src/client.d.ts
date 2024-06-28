import CircuitBreaker from "opossum";
import { AxiosRequestConfig } from "axios";
declare class Client {
    _options: CircuitBreaker.Options<unknown[]>;
    _breaker: CircuitBreaker | null;
    constructor(options: CircuitBreaker.Options);
    fetch: (requestConfig: AxiosRequestConfig, fb?: () => any) => Promise<unknown>;
}
export default Client;
