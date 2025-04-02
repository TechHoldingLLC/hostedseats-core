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
exports.StockLocation = void 0;
var StockLocation = /** @class */ (function () {
    /**
     * @ignore
     */
    function StockLocation(client) {
        this.client = client;
    }
    /**
     * This method creates a new stock location. It sends a request to the
     * [Create Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocations)
     * API route.
     *
     * @param body - The details of the stock location to create.
     * @param query - Configure the fields and relations to retrieve in the stock location.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.create({
     *   name: "Main Warehouse",
     *   address_id: "addr_123",
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */
    StockLocation.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/stock-locations", {
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
     * This method updates a stock location. It sends a request to the
     * [Update Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsid)
     * API route.
     *
     * @param id - The ID of the stock location to update.
     * @param body - The details of the stock location to update.
     * @param query - Configure the fields and relations to retrieve in the stock location.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.update("sloc_123", {
     *   name: "European Warehouse",
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */
    StockLocation.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/stock-locations/".concat(id), {
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
     * This method deletes a stock location. It sends a request to the
     * [Delete Stock Location](https://docs.medusajs.com/api/admin#stock-locations_deletestocklocationsid)
     * API route.
     *
     * @param id - The ID of the stock location to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.stockLocation.delete("sloc_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    StockLocation.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/stock-locations/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a stock location. It sends a request to the
     * [Get Stock Location](https://docs.medusajs.com/api/admin#stock-locations_getstocklocationsid)
     * API route.
     *
     * @param id - The ID of the stock location to retrieve.
     * @param query - Configure the fields and relations to retrieve in the stock location.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * To retrieve a stock location by its ID:
     *
     * ```ts
     * sdk.admin.stockLocation.retrieve("sloc_123")
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.stockLocation.retrieve("sloc_123", {
     *   fields: "id,*sales_channels"
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    StockLocation.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/stock-locations/".concat(id), {
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
     * This method retrieves a list of stock locations. It sends a request to the
     * [List Stock Locations](https://docs.medusajs.com/api/admin#stock-locations_getstocklocations)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of stock locations.
     *
     * @example
     * To retrieve the list of stock locations:
     *
     * ```ts
     * sdk.admin.stockLocation.list()
     * .then(({ stock_locations, count, limit, offset }) => {
     *   console.log(stock_locations)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.stockLocation.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ stock_locations, count, limit, offset }) => {
     *   console.log(stock_locations)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each stock location:
     *
     * ```ts
     * sdk.admin.stockLocation.list({
     *   fields: "id,*sales_channels"
     * })
     * .then(({ stock_locations, count, limit, offset }) => {
     *   console.log(stock_locations)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    StockLocation.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/stock-locations", {
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
     * This method manages the sales channels of a stock location by adding or removing them. It sends a request to the
     * [Manage Stock Location Sales Channels](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidsaleschannels)
     * API route.
     *
     * @param id - The ID of the stock location to update the sales channels for.
     * @param body - The details of the sales channels to update.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.updateSalesChannels("sloc_123", {
     *   add: ["sc_123"],
     *   remove: ["sc_456"],
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */
    StockLocation.prototype.updateSalesChannels = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/stock-locations/".concat(id, "/sales-channels"), {
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
     * This method adds a new fulfillment set to a stock location. It sends a request to the
     * [Add Fulfillment Set to Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidfulfillmentsets)
     * API route.
     *
     * @param id - The ID of the stock location to add the fulfillment set to.
     * @param body - The details of the fulfillment set to add.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.createFulfillmentSet("sloc_123", {
     *   name: "Shipping",
     *   type: "shipping",
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */
    StockLocation.prototype.createFulfillmentSet = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/stock-locations/".concat(id, "/fulfillment-sets"), {
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
     * This method manages the fulfillment providers of a stock location by adding or removing them. It sends a request to the
     * [Manage Fulfillment Providers of Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidfulfillmentproviders)
     * API route.
     *
     * @param id - The ID of the stock location to manage the fulfillment providers for.
     * @param body - The details of the fulfillment providers to manage.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.updateFulfillmentProviders("sloc_123", {
     *   add: ["fp_manual_manual"],
     *   remove: ["fp_shipstation_shipstation"],
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */
    StockLocation.prototype.updateFulfillmentProviders = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/stock-locations/".concat(id, "/fulfillment-providers"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return StockLocation;
}());
exports.StockLocation = StockLocation;
