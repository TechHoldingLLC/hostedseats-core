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
exports.SalesChannel = void 0;
var SalesChannel = /** @class */ (function () {
    /**
     * @ignore
     */
    function SalesChannel(client) {
        this.client = client;
    }
    /**
     * This method creates a new sales channel. It sends a request to the
     * [Create Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannels)
     * API route.
     *
     * @param body - The details of the sales channel to create.
     * @param query - Configure the fields and relations to retrieve in the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * sdk.admin.salesChannel.create({
     *   name: "Storefront",
     * })
     * .then(({ salesChannel }) => {
     *   console.log(salesChannel)
     * })
     */
    SalesChannel.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/sales-channels", {
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
     * This method updates a sales channel. It sends a request to the
     * [Update Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsid)
     * API route.
     *
     * @param id - The ID of the sales channel to update.
     * @param body - The details of the sales channel to update.
     * @param query - Configure the fields and relations to retrieve in the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * sdk.admin.salesChannel.update(
     *   "sc_123",
     *   {
     *     name: "Storefront",
     *   }
     * )
     * .then(({ salesChannel }) => {
     *   console.log(salesChannel)
     * })
     */
    SalesChannel.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/sales-channels/".concat(id), {
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
     * This method deletes a sales channel. It sends a request to the
     * [Delete Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_deletesaleschannelsid)
     * API route.
     *
     * @param id - The ID of the sales channel to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.salesChannel.delete("sc_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    SalesChannel.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/sales-channels/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a sales channel. It sends a request to the
     * [Retrieve Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_getsaleschannelsid)
     * API route.
     *
     * @param id - The ID of the sales channel to retrieve.
     * @param query - Configure the fields and relations to retrieve in the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * To retrieve a sales channel by its ID:
     *
     * ```ts
     * sdk.admin.salesChannel.retrieve("sc_123")
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.salesChannel.retrieve("sc_123", {
     *   fields: "id,*products"
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    SalesChannel.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/sales-channels/".concat(id), {
                            method: "GET",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a list of sales channels. It sends a request to the
     * [List Sales Channels](https://docs.medusajs.com/api/admin#sales-channels_getsaleschannels)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of sales channels.
     *
     * @example
     * To retrieve the list of sales channels:
     *
     * ```ts
     * sdk.admin.salesChannel.list()
     * .then(({ sales_channels, count, limit, offset }) => {
     *   console.log(sales_channels)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.salesChannel.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ sales_channels, count, limit, offset }) => {
     *   console.log(sales_channels)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each sales channel:
     *
     * ```ts
     * sdk.admin.salesChannel.list({
     *   fields: "id,*products"
     * })
     * .then(({ sales_channels, count, limit, offset }) => {
     *   console.log(sales_channels)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    SalesChannel.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/sales-channels", {
                            method: "GET",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages the products in a sales channel to add or remove them. It sends a request to the
     * [Manage Products in Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsidproducts)
     * API route.
     *
     * @param id - The ID of the sales channel to manage the products for.
     * @param body - The details of the products to add or remove from the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * sdk.admin.salesChannel.updateProducts("sc_123", {
     *   add: ["prod_123", "prod_456"],
     *   remove: ["prod_789"]
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel)
     * })
     *
     * @deprecated Use {@link batchProducts} instead
     */
    SalesChannel.prototype.updateProducts = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/sales-channels/".concat(id, "/products"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages the products in a sales channel to add or remove them. It sends a request to the
     * [Manage Products in Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsidproducts)
     * API route.
     *
     * @param id - The ID of the sales channel to manage the products for.
     * @param body - The details of the products to add or remove from the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * sdk.admin.salesChannel.batchProducts("sc_123", {
     *   add: ["prod_123", "prod_456"],
     *   remove: ["prod_789"]
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel)
     * })
     */
    SalesChannel.prototype.batchProducts = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/sales-channels/".concat(id, "/products"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SalesChannel;
}());
exports.SalesChannel = SalesChannel;
