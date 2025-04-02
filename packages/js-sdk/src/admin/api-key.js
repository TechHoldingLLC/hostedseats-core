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
exports.ApiKey = void 0;
var ApiKey = /** @class */ (function () {
    /**
     * @ignore
     */
    function ApiKey(client) {
        this.client = client;
    }
    /**
     * This methods retrieves a paginated list of API keys. It sends a request to the
     * [List API Keys](https://docs.medusajs.com/api/admin#api-keys_getapikeys) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of API keys.
     *
     * @example
     * To retrieve the list of API keys:
     *
     * ```ts
     * sdk.admin.apiKey.list()
     * .then(({ api_keys, count, limit, offset }) => {
     *   console.log(api_keys)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.apiKey.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ api_keys, count, limit, offset }) => {
     *   console.log(api_keys)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each API key:
     *
     * ```ts
     * sdk.admin.apiKey.list({
     *   fields: "id,*sales_channels"
     * })
     * .then(({ api_keys, count, limit, offset }) => {
     *   console.log(api_keys)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    ApiKey.prototype.list = function (queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/api-keys", {
                            query: queryParams,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates an API key. It sends a request to the [Create API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeys)
     * API route.
     *
     * @param body - The API key's details.
     * @param query - Configure the fields to retrieve in the created API key.
     * @param headers - Headers to pass in the request
     * @returns The created API key
     *
     * @example
     * sdk.admin.apiKey.create({
     *   title: "Development",
     *   type: "publishable"
     * })
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */
    ApiKey.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/api-keys", {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method revokes an API key. It sends a request to the
     * [Revoke API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeysidrevoke) API route.
     *
     * @param id - The API key's ID.
     * @param headers - Headers to pass in the request.
     * @returns The API key's details.
     *
     * @example
     * sdk.admin.apiKey.revoke("apk_123")
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */
    ApiKey.prototype.revoke = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/api-keys/".concat(id, "/revoke"), {
                            method: "POST",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves an API key's details. It sends a request to the
     * [Get API key](https://docs.medusajs.com/api/admin#api-keys_getapikeysid) API route.
     *
     * @param id - The API key's ID.
     * @param headers - Headers to pass in the request.
     * @returns The API key's details.
     *
     * @example
     * sdk.admin.apiKey.retrieve("apk_123")
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */
    ApiKey.prototype.retrieve = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/api-keys/".concat(id), {
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates an API key's details. It sends a request to the
     * [Update API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeysid) API route.
     *
     * @param id - The API key's ID.
     * @param body - The data to update in the API key.
     * @param query - Configure the fields to retrieve in the API key.
     * @param headers - Headers to pass in the request.
     * @returns The API key's details.
     *
     * @example
     * sdk.admin.apiKey.update("apk_123", {
     *   title: "Development"
     * })
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */
    ApiKey.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/api-keys/".concat(id), {
                            method: "POST",
                            headers: headers,
                            body: body,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes an API key by its ID. It sends a request to the
     * [Delete API Key](https://docs.medusajs.com/api/admin#api-keys_deleteapikeysid) API route.
     *
     * @param id - The API key's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.apiKey.delete("apk_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    ApiKey.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/api-keys/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages the sales channels associated with a publishable API key to either add
     * or remove associations. It sends a request to the [Manage Sales Channels](https://docs.medusajs.com/api/admin#api-keys_postapikeysidsaleschannels)
     * API route.
     *
     * @param id - The API key's ID.
     * @param body - The sales channels to add or remove from the API key.
     * @param headers - Headers to pass in the request.
     * @returns The API key's details.
     *
     * @example
     * sdk.admin.apiKey.batchSalesChannels("apk_123", {
     *   add: ["sc_123"],
     *   remove: ["sc_321"]
     * })
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */
    ApiKey.prototype.batchSalesChannels = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/api-keys/".concat(id, "/sales-channels"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ApiKey;
}());
exports.ApiKey = ApiKey;
