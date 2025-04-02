"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Client = exports.FetchError = exports.PUBLISHABLE_KEY_HEADER = void 0;
var fetch_event_stream_1 = require("fetch-event-stream");
var qs_1 = require("qs");
exports.PUBLISHABLE_KEY_HEADER = "x-publishable-api-key";
// We want to explicitly retrieve the base URL instead of relying on relative paths that differ in behavior between browsers.
var getBaseUrl = function (passedBaseUrl) {
    if (typeof window === "undefined") {
        return passedBaseUrl;
    }
    // If the passed base URL is empty or "/", we use the current origin from the browser.
    if (passedBaseUrl === "" || passedBaseUrl === "/") {
        return window.location.origin;
    }
    return passedBaseUrl;
};
var hasStorage = function (storage) {
    if (typeof window !== "undefined") {
        return storage in window;
    }
    return false;
};
var toBase64 = function (str) {
    if (typeof window !== "undefined") {
        return window.btoa(str);
    }
    return Buffer.from(str).toString("base64");
};
var sanitizeHeaders = function (headers) {
    return __assign(__assign({}, Object.fromEntries(headers.entries())), { authorization: "<REDACTED>" });
};
var normalizeRequest = function (init, headers, config) {
    var _a, _b, _c;
    var body = init === null || init === void 0 ? void 0 : init.body;
    if (body && ((_a = headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.includes("application/json"))) {
        body = JSON.stringify(body);
    }
    // "credentials" is not supported in some environments (eg. on the backend), and it might throw an exception if the field is set.
    var isFetchCredentialsSupported = "credentials" in Request.prototype;
    // Oftentimes the server will be on a different origin, so we want to default to include
    // Note that the cookie's SameSite attribute takes precedence over this setting.
    var credentials = ((_b = config.auth) === null || _b === void 0 ? void 0 : _b.type) === "session"
        ? ((_c = config.auth) === null || _c === void 0 ? void 0 : _c.fetchCredentials) || "include"
        : "omit";
    return __assign(__assign(__assign({}, init), { headers: headers, credentials: isFetchCredentialsSupported ? credentials : undefined }), (body ? { body: body } : {}));
};
var normalizeResponse = function (resp, reqHeaders) { return __awaiter(void 0, void 0, void 0, function () {
    var jsonError, isJsonRequest, _a;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!(resp.status >= 300)) return [3 /*break*/, 2];
                return [4 /*yield*/, resp.json().catch(function () { return ({}); })];
            case 1:
                jsonError = (_d.sent());
                throw new FetchError((_b = jsonError.message) !== null && _b !== void 0 ? _b : resp.statusText, resp.statusText, resp.status);
            case 2:
                isJsonRequest = (_c = reqHeaders.get("accept")) === null || _c === void 0 ? void 0 : _c.includes("application/json");
                if (!isJsonRequest) return [3 /*break*/, 4];
                return [4 /*yield*/, resp.json()];
            case 3:
                _a = _d.sent();
                return [3 /*break*/, 5];
            case 4:
                _a = resp;
                _d.label = 5;
            case 5: return [2 /*return*/, _a];
        }
    });
}); };
var FetchError = /** @class */ (function (_super) {
    __extends(FetchError, _super);
    function FetchError(message, statusText, status) {
        var _this = _super.call(this, message) || this;
        _this.statusText = statusText;
        _this.status = status;
        return _this;
    }
    return FetchError;
}(Error));
exports.FetchError = FetchError;
var Client = /** @class */ (function () {
    function Client(config) {
        var _this = this;
        this.DEFAULT_JWT_STORAGE_KEY = "medusa_auth_token";
        this.token = "";
        this.getApiKeyHeader_ = function () {
            return _this.config.apiKey
                ? { Authorization: "Basic " + toBase64(_this.config.apiKey + ":") }
                : {};
        };
        this.getPublishableKeyHeader_ = function () {
            var _a;
            return _this.config.publishableKey
                ? (_a = {}, _a[exports.PUBLISHABLE_KEY_HEADER] = _this.config.publishableKey, _a) : {};
        };
        this.getTokenStorageInfo_ = function () {
            var _a, _b, _c;
            var hasLocal = hasStorage("localStorage");
            var hasSession = hasStorage("sessionStorage");
            var hasCustom = Boolean((_a = _this.config.auth) === null || _a === void 0 ? void 0 : _a.storage);
            var storageMethod = ((_b = _this.config.auth) === null || _b === void 0 ? void 0 : _b.jwtTokenStorageMethod) ||
                (hasLocal ? "local" : "nostore");
            var storageKey = ((_c = _this.config.auth) === null || _c === void 0 ? void 0 : _c.jwtTokenStorageKey) || _this.DEFAULT_JWT_STORAGE_KEY;
            if (!hasLocal && storageMethod === "local") {
                _this.throwError_("Local JWT storage is only available in the browser");
            }
            if (!hasSession && storageMethod === "session") {
                _this.throwError_("Session JWT storage is only available in the browser");
            }
            if (!hasCustom && storageMethod === "custom") {
                _this.throwError_("Custom storage was not provided in the config");
            }
            return {
                storageMethod: storageMethod,
                storageKey: storageKey,
            };
        };
        this.config = __assign(__assign({}, config), { baseUrl: getBaseUrl(config.baseUrl) });
        var logger = config.logger || {
            error: console.error,
            warn: console.warn,
            info: console.info,
            debug: console.debug,
        };
        this.logger = __assign(__assign({}, logger), { debug: config.debug ? logger.debug : function () { } });
        this.fetch_ = this.initClient();
    }
    /**
     * `fetch` closely follows (and uses under the hood) the native `fetch` API. There are, however, few key differences:
     * - Non 2xx statuses throw a `FetchError` with the status code as the `status` property, rather than resolving the promise
     * - You can pass `body` and `query` as objects, and they will be encoded and stringified.
     * - The response gets parsed as JSON if the `accept` header is set to `application/json`, otherwise the raw Response object is returned
     *
     * Since the response is dynamically determined, we cannot know if it is JSON or not. Therefore, it is important to pass `Response` as the return type
     *
     * @param input: FetchInput
     * @param init: FetchArgs
     * @returns Promise<T>
     */
    Client.prototype.fetch = function (input, init) {
        return this.fetch_(input, init);
    };
    /**
     * `fetchStream` is a helper method to deal with server-sent events. It returns an object with a stream and an abort function.
     * It follows a very similar interface to `fetch`, with the return value being an async generator.
     * The stream is an async generator that yields `ServerSentEventMessage` objects, which contains the event name, stringified data, and few other properties.
     * The caller is responsible for handling `disconnect` events and aborting the stream. The caller is also responsible for parsing the data field.
     *
     * @param input: FetchInput
     * @param init: FetchArgs
     * @returns FetchStreamResponse
     */
    Client.prototype.fetchStream = function (input, init) {
        return __awaiter(this, void 0, void 0, function () {
            var abortController, abortFunc, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        abortController = new AbortController();
                        abortFunc = abortController.abort.bind(abortController);
                        return [4 /*yield*/, this.fetch_(input, __assign(__assign({}, init), { signal: abortController.signal, headers: __assign(__assign({}, init === null || init === void 0 ? void 0 : init.headers), { accept: "text/event-stream" }) }))];
                    case 1:
                        res = _a.sent();
                        if (res.ok) {
                            return [2 /*return*/, { stream: (0, fetch_event_stream_1.events)(res, abortController.signal), abort: abortFunc }];
                        }
                        return [2 /*return*/, { stream: null, abort: abortFunc }];
                }
            });
        });
    };
    Client.prototype.setToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setToken_(token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.clearToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearToken_()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.clearToken_ = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, storageMethod, storageKey, _b;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.getTokenStorageInfo_(), storageMethod = _a.storageMethod, storageKey = _a.storageKey;
                        _b = storageMethod;
                        switch (_b) {
                            case "local": return [3 /*break*/, 1];
                            case "session": return [3 /*break*/, 2];
                            case "custom": return [3 /*break*/, 3];
                            case "memory": return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        {
                            window.localStorage.removeItem(storageKey);
                            return [3 /*break*/, 6];
                        }
                        _e.label = 2;
                    case 2:
                        {
                            window.sessionStorage.removeItem(storageKey);
                            return [3 /*break*/, 6];
                        }
                        _e.label = 3;
                    case 3: return [4 /*yield*/, ((_d = (_c = this.config.auth) === null || _c === void 0 ? void 0 : _c.storage) === null || _d === void 0 ? void 0 : _d.removeItem(storageKey))];
                    case 4:
                        _e.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        {
                            this.token = "";
                            return [3 /*break*/, 6];
                        }
                        _e.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.initClient = function () {
        var _this = this;
        var defaultHeaders = new Headers(__assign(__assign({ "content-type": "application/json", accept: "application/json" }, this.getApiKeyHeader_()), this.getPublishableKeyHeader_()));
        this.logger.debug("Initiating Medusa client with default headers:\n", "".concat(JSON.stringify(sanitizeHeaders(defaultHeaders), null, 2), "\n"));
        return function (input, init) { return __awaiter(_this, void 0, void 0, function () {
            var headers, customHeaders, _a, normalizedInput, baseUrl, fullPath, params, stringifiedQuery;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = new Headers(defaultHeaders);
                        _a = [__assign({}, this.config.globalHeaders)];
                        return [4 /*yield*/, this.getJwtHeader_()];
                    case 1:
                        customHeaders = __assign.apply(void 0, [__assign.apply(void 0, _a.concat([(_b.sent())])), init === null || init === void 0 ? void 0 : init.headers]);
                        // We use `headers.set` in order to ensure headers are overwritten in a case-insensitive manner.
                        Object.entries(customHeaders).forEach(function (_a) {
                            var key = _a[0], value = _a[1];
                            if (value === null) {
                                headers.delete(key);
                            }
                            else {
                                headers.set(key, value);
                            }
                        });
                        normalizedInput = input;
                        if (input instanceof URL || typeof input === "string") {
                            baseUrl = new URL(this.config.baseUrl);
                            fullPath = "".concat(baseUrl.pathname.replace(/\/$/, ""), "/").concat(input
                                .toString()
                                .replace(/^\//, ""));
                            normalizedInput = new URL(fullPath, baseUrl.origin);
                            if (init === null || init === void 0 ? void 0 : init.query) {
                                params = Object.fromEntries(normalizedInput.searchParams.entries());
                                stringifiedQuery = (0, qs_1.stringify)(__assign(__assign({}, params), init.query));
                                normalizedInput.search = stringifiedQuery;
                            }
                        }
                        this.logger.debug("Performing request to:\n", "URL: ".concat(normalizedInput.toString(), "\n"), "Headers: ".concat(JSON.stringify(sanitizeHeaders(headers), null, 2), "\n"));
                        return [4 /*yield*/, fetch(normalizedInput, normalizeRequest(init, headers, this.config)).then(function (resp) {
                                _this.logger.debug("Received response with status ".concat(resp.status, "\n"));
                                return normalizeResponse(resp, headers);
                            })];
                    case 2: 
                    // Any non-request errors (eg. invalid JSON in the response) will be thrown as-is.
                    return [2 /*return*/, _b.sent()];
                }
            });
        }); };
    };
    Client.prototype.getJwtHeader_ = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // If the user has requested for session storage, we don't want to send the JWT token in the header.
                        if (((_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.type) === "session") {
                            return [2 /*return*/, {}];
                        }
                        return [4 /*yield*/, this.getToken_()];
                    case 1:
                        token = _b.sent();
                        return [2 /*return*/, token ? { Authorization: "Bearer ".concat(token) } : {}];
                }
            });
        });
    };
    Client.prototype.setToken_ = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, storageMethod, storageKey, _b;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.getTokenStorageInfo_(), storageMethod = _a.storageMethod, storageKey = _a.storageKey;
                        _b = storageMethod;
                        switch (_b) {
                            case "local": return [3 /*break*/, 1];
                            case "session": return [3 /*break*/, 2];
                            case "custom": return [3 /*break*/, 3];
                            case "memory": return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        {
                            window.localStorage.setItem(storageKey, token);
                            return [3 /*break*/, 6];
                        }
                        _e.label = 2;
                    case 2:
                        {
                            window.sessionStorage.setItem(storageKey, token);
                            return [3 /*break*/, 6];
                        }
                        _e.label = 3;
                    case 3: return [4 /*yield*/, ((_d = (_c = this.config.auth) === null || _c === void 0 ? void 0 : _c.storage) === null || _d === void 0 ? void 0 : _d.setItem(storageKey, token))];
                    case 4:
                        _e.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        {
                            this.token = token;
                            return [3 /*break*/, 6];
                        }
                        _e.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.getToken_ = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, storageMethod, storageKey, _b;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.getTokenStorageInfo_(), storageMethod = _a.storageMethod, storageKey = _a.storageKey;
                        _b = storageMethod;
                        switch (_b) {
                            case "local": return [3 /*break*/, 1];
                            case "session": return [3 /*break*/, 2];
                            case "custom": return [3 /*break*/, 3];
                            case "memory": return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        {
                            return [2 /*return*/, window.localStorage.getItem(storageKey)];
                        }
                        _e.label = 2;
                    case 2:
                        {
                            return [2 /*return*/, window.sessionStorage.getItem(storageKey)];
                        }
                        _e.label = 3;
                    case 3: return [4 /*yield*/, ((_d = (_c = this.config.auth) === null || _c === void 0 ? void 0 : _c.storage) === null || _d === void 0 ? void 0 : _d.getItem(storageKey))];
                    case 4: return [2 /*return*/, _e.sent()];
                    case 5:
                        {
                            return [2 /*return*/, this.token];
                        }
                        _e.label = 6;
                    case 6: return [2 /*return*/, null];
                }
            });
        });
    };
    Client.prototype.throwError_ = function (message) {
        this.logger.error(message);
        throw new Error(message);
    };
    return Client;
}());
exports.Client = Client;
