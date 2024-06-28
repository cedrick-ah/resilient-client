var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Request from "../src/request";
let request;
describe("[request.ts]", () => {
    jest.mock("../src/request");
    beforeEach(() => {
        request = new Request({ method: "get", url: "http://www.google.com" });
    });
    it("should make a http request", () => __awaiter(void 0, void 0, void 0, function* () {
        const abortController = new AbortController();
        request.exec(abortController.signal).then((data) => {
            expect(data.status).toBe(200);
        });
    }));
});
