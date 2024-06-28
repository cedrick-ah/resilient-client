import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

class Request {
    _config;

    constructor(requestConfig: AxiosRequestConfig) {
        this._config = requestConfig;
    }

    exec = (abortSignal: AbortSignal): Promise<AxiosResponse> => {
        return new Promise<AxiosResponse>((resolve, reject) => {
            axios({ ...this._config, signal: abortSignal })
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
}

export default Request;
