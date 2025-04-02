"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var msw_1 = require("msw");
var node_1 = require("msw/node");
var client_1 = require("../client");
var baseUrl = "https://someurl.com";
var token = "token-123";
var jwtTokenStorageKey = "medusa_auth_token";
// This is just a network-layer mocking, it doesn't start an actual server
var server = (0, node_1.setupServer)(msw_1.http.get("".concat(baseUrl, "/test"), function (_a) {
    var request = _a.request, params = _a.params, cookies = _a.cookies;
    return msw_1.HttpResponse.json({
        test: "test",
    });
}), msw_1.http.get("".concat(baseUrl, "/some/path/test"), function (_a) {
    var request = _a.request, params = _a.params, cookies = _a.cookies;
    return msw_1.HttpResponse.json({
        test: "test",
    });
}), msw_1.http.get("".concat(baseUrl, "/throw"), function (_a) {
    var request = _a.request, params = _a.params, cookies = _a.cookies;
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get("".concat(baseUrl, "/header"), function (_a) {
    var request = _a.request;
    if (request.headers.get("X-custom-header") === "test" &&
        request.headers.get("Content-Type") === "application/json") {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get("".concat(baseUrl, "/replaced-header"), function (_a) {
    var request = _a.request;
    if (request.headers.get("Content-Type") === "application/xml") {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get("".concat(baseUrl, "/apikey"), function (_a) {
    var _b;
    var request = _a.request;
    if ((_b = request.headers.get("authorization")) === null || _b === void 0 ? void 0 : _b.startsWith("Basic")) {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get("".concat(baseUrl, "/pubkey"), function (_a) {
    var request = _a.request;
    if (request.headers.get(client_1.PUBLISHABLE_KEY_HEADER) === "test-pub-key") {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.post("".concat(baseUrl, "/create"), function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var _c, _d;
    var request = _b.request, params = _b.params, cookies = _b.cookies;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _d = (_c = msw_1.HttpResponse).json;
                return [4 /*yield*/, request.json()];
            case 1: return [2 /*return*/, _d.apply(_c, [_e.sent()])];
        }
    });
}); }), msw_1.http.delete("".concat(baseUrl, "/delete/123"), function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var request = _b.request, params = _b.params, cookies = _b.cookies;
    return __generator(this, function (_c) {
        return [2 /*return*/, msw_1.HttpResponse.json({ test: "test" })];
    });
}); }), msw_1.http.get("".concat(baseUrl, "/jwt"), function (_a) {
    var request = _a.request;
    if (request.headers.get("authorization") === "Bearer ".concat(token)) {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get("".concat(baseUrl, "/nostore"), function (_a) {
    var request = _a.request;
    if (!request.headers.get("authorization")) {
        return msw_1.HttpResponse.json({
            test: "test",
        });
    }
    return new msw_1.HttpResponse(null, {
        status: 500,
        statusText: "Internal Server Error",
    });
}), msw_1.http.get("https://test.com/baseUrl", function (_a) {
    var request = _a.request, params = _a.params, cookies = _a.cookies;
    return msw_1.HttpResponse.json({
        test: "test",
    });
}), msw_1.http.all("*", function (_a) {
    var request = _a.request, params = _a.params, cookies = _a.cookies;
    return new msw_1.HttpResponse(null, {
        status: 404,
        statusText: "Not Found",
    });
}));
describe("Client", function () {
    var client;
    beforeAll(function () {
        client = new client_1.Client({
            baseUrl: baseUrl,
        });
        server.listen();
    });
    afterEach(function () { return server.resetHandlers(); });
    afterAll(function () { return server.close(); });
    describe("configuration", function () {
        it("should allow passing custom request headers while the defaults are preserved", function () { return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.fetch("header", {
                            headers: { "X-custom-header": "test" },
                        })];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should allow replacing a default header", function () { return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.fetch("replaced-header", {
                            headers: { "content-Type": "application/xml" },
                        })];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should allow passing global headers", function () { return __awaiter(void 0, void 0, void 0, function () {
            var headClient, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headClient = new client_1.Client({
                            baseUrl: baseUrl,
                            globalHeaders: {
                                "X-custom-header": "test",
                            },
                        });
                        return [4 /*yield*/, headClient.fetch("header")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should allow setting an API key", function () { return __awaiter(void 0, void 0, void 0, function () {
            var authClient, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authClient = new client_1.Client({
                            baseUrl: baseUrl,
                            apiKey: "test-api-key",
                        });
                        return [4 /*yield*/, authClient.fetch("apikey")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should allow setting a publishable key", function () { return __awaiter(void 0, void 0, void 0, function () {
            var pubClient, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pubClient = new client_1.Client({
                            baseUrl: baseUrl,
                            publishableKey: "test-pub-key",
                        });
                        return [4 /*yield*/, pubClient.fetch("pubkey")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should gracefully handle a root base URL", function () { return __awaiter(void 0, void 0, void 0, function () {
            var pubClient, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        global.window = {
                            location: {
                                origin: "https://test.com",
                            },
                        };
                        pubClient = new client_1.Client({
                            baseUrl: "/",
                        });
                        return [4 /*yield*/, pubClient.fetch("baseUrl")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        global.window = undefined;
                        return [2 /*return*/];
                }
            });
        }); });
        it("should handle baseUrl with path correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
            var pathClient, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathClient = new client_1.Client({
                            baseUrl: "".concat(baseUrl, "/some/path"),
                        });
                        return [4 /*yield*/, pathClient.fetch("test")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should handle baseUrl with trailing slash path correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
            var pathClient, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathClient = new client_1.Client({
                            baseUrl: "".concat(baseUrl, "/some/path/"),
                        });
                        return [4 /*yield*/, pathClient.fetch("test")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should handle baseUrl with just origin", function () { return __awaiter(void 0, void 0, void 0, function () {
            var originClient, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originClient = new client_1.Client({
                            baseUrl: baseUrl,
                        });
                        return [4 /*yield*/, originClient.fetch("test")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should handle baseUrl with just origin and trailing slash", function () { return __awaiter(void 0, void 0, void 0, function () {
            var originClient, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originClient = new client_1.Client({
                            baseUrl: "".concat(baseUrl, "/"),
                        });
                        return [4 /*yield*/, originClient.fetch("test")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("GET requests", function () {
        it("should fire a simple GET request and get back a JSON response by default", function () { return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.fetch("test")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should throw an exception if a non-2xx status is received", function () { return __awaiter(void 0, void 0, void 0, function () {
            var err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.fetch("throw").catch(function (e) { return e; })];
                    case 1:
                        err = _a.sent();
                        expect(err.status).toEqual(500);
                        expect(err.message).toEqual("Internal Server Error");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("POST requests", function () {
        it("should fire a simple POST request and get back a JSON response", function () { return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.fetch("create", {
                            body: { test: "test" },
                            method: "POST",
                        })];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("DELETE requests", function () {
        it("should fire a simple DELETE request and get back a JSON response", function () { return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.fetch("delete/123", {
                            method: "DELETE",
                        })];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Authorized requests", function () {
        it("should not store the token by default", function () { return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client.setToken(token);
                        return [4 /*yield*/, client.fetch("nostore")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should set the token in local storage if in browser", function () { return __awaiter(void 0, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // We are mimicking a browser environment here
                        global.window = {
                            localStorage: { setItem: jest.fn(), getItem: function () { return token; } },
                        };
                        client.setToken(token);
                        return [4 /*yield*/, client.fetch("jwt")];
                    case 1:
                        resp = _a.sent();
                        expect(resp).toEqual({ test: "test" });
                        expect(global.window.localStorage.setItem).toHaveBeenCalledWith(jwtTokenStorageKey, token);
                        // Cleaning up after this specific test
                        global.window = undefined;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("Custom Storage", function () {
        var mockSyncStorage = {
            storage: new Map(),
            getItem: jest.fn(function (key) { return mockSyncStorage.storage.get(key) || null; }),
            setItem: jest.fn(function (key, value) {
                return mockSyncStorage.storage.set(key, value);
            }),
            removeItem: jest.fn(function (key) { return mockSyncStorage.storage.delete(key); }),
        };
        var mockAsyncStorage = {
            storage: new Map(),
            getItem: jest.fn(function (key) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, mockAsyncStorage.storage.get(key) || null];
            }); }); }),
            setItem: jest.fn(function (key, value) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, mockAsyncStorage.storage.set(key, value)];
            }); }); }),
            removeItem: jest.fn(function (key) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, mockAsyncStorage.storage.delete(key)];
            }); }); }),
        };
        describe("Synchronous Custom Storage", function () {
            var client;
            beforeEach(function () {
                mockSyncStorage.storage.clear();
                client = new client_1.Client({
                    baseUrl: baseUrl,
                    auth: {
                        type: "jwt",
                        jwtTokenStorageMethod: "custom",
                        storage: mockSyncStorage,
                    },
                });
            });
            it("should store and retrieve token", function () { return __awaiter(void 0, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, client.setToken(token)];
                        case 1:
                            _a.sent();
                            expect(mockSyncStorage.setItem).toHaveBeenCalledWith(jwtTokenStorageKey, token);
                            return [4 /*yield*/, client.fetch("jwt")];
                        case 2:
                            resp = _a.sent();
                            expect(resp).toEqual({ test: "test" });
                            expect(mockSyncStorage.getItem).toHaveBeenCalledWith(jwtTokenStorageKey);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should clear token", function () { return __awaiter(void 0, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, client.setToken(token)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, client.clearToken()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, client.fetch("nostore")];
                        case 3:
                            resp = _a.sent();
                            expect(resp).toEqual({ test: "test" });
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe("Asynchronous Custom Storage", function () {
            var client;
            beforeEach(function () {
                mockAsyncStorage.storage.clear();
                jest.clearAllMocks();
                client = new client_1.Client({
                    baseUrl: baseUrl,
                    auth: {
                        type: "jwt",
                        jwtTokenStorageMethod: "custom",
                        storage: mockAsyncStorage,
                    },
                });
            });
            it("should store and retrieve token asynchronously", function () { return __awaiter(void 0, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, client.setToken(token)];
                        case 1:
                            _a.sent();
                            expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(jwtTokenStorageKey, token);
                            return [4 /*yield*/, client.fetch("jwt")];
                        case 2:
                            resp = _a.sent();
                            expect(resp).toEqual({ test: "test" });
                            expect(mockAsyncStorage.getItem).toHaveBeenCalled();
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should clear token asynchronously", function () { return __awaiter(void 0, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, client.setToken(token)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, client.clearToken()];
                        case 2:
                            _a.sent();
                            expect(mockAsyncStorage.removeItem).toHaveBeenCalledWith(jwtTokenStorageKey);
                            return [4 /*yield*/, client.fetch("nostore")];
                        case 3:
                            resp = _a.sent();
                            expect(resp).toEqual({ test: "test" });
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
});
