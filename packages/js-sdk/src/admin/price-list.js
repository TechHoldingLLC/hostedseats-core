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
exports.PriceList = void 0;
var PriceList = /** @class */ (function () {
    /**
     * @ignore
     */
    function PriceList(client) {
        this.client = client;
    }
    /**
     * This method retrieves a price list. It sends a request to the
     * [Get Price List](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelistsid)
     * API route.
     *
     * @param id - The price list's ID.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * To retrieve a price list by its ID:
     *
     * ```ts
     * sdk.admin.priceList.retrieve("plist_123")
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.priceList.retrieve("plist_123", {
     *   fields: "id,*prices"
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/v2/api/store#select-fields-and-relations).
     */
    PriceList.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/price-lists/".concat(id), {
                        method: "GET",
                        headers: headers,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method retrieves a paginated list of price lists. It sends a request to the
     * [List Price Lists](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelists) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of price lists.
     *
     * @example
     * To retrieve the list of price lists:
     *
     * ```ts
     * sdk.admin.priceList.list()
     * .then(({ price_lists, count, limit, offset }) => {
     *   console.log(price_lists)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.priceList.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ price_lists, count, limit, offset }) => {
     *   console.log(price_lists)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each price list:
     *
     * ```ts
     * sdk.admin.priceList.list({
     *   fields: "id,*prices"
     * })
     * .then(({ price_lists, count, limit, offset }) => {
     *   console.log(price_lists)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/v2/api/store#select-fields-and-relations).
     */
    PriceList.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/price-lists", {
                        method: "GET",
                        headers: headers,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method creates a price list. It sends a request to the
     * [Create Price List](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelists)
     * API route.
     *
     * @param body - The details of the price list to create.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * sdk.admin.priceList.create({
     *   title: "My Price List",
     *   status: "active",
     *   type: "sale",
     *   prices: [
     *     {
     *       variant_id: "variant_123",
     *       amount: 10,
     *       currency_code: "usd",
     *       rules: {
     *         region_id: "reg_123"
     *       }
     *     }
     *   ]
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     */
    PriceList.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/price-lists", {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method updates a price list. It sends a request to the
     * [Update Price List](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsid)
     * API route.
     *
     * @param id - The price list's ID.
     * @param body - The data to update in the price list.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * sdk.admin.priceList.update("plist_123", {
     *   title: "My Price List",
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     */
    PriceList.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/price-lists/".concat(id), {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method deletes a price list. It sends a request to the
     * [Delete Price List](https://docs.medusajs.com/v2/api/admin#price-lists_deletepricelistsid)
     * API route.
     *
     * @param id - The price list's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.priceList.delete("plist_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    PriceList.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/price-lists/".concat(id), {
                        method: "DELETE",
                        headers: headers,
                    })];
            });
        });
    };
    /**
     * This method manages the prices of a price list to create, update, or delete them.
     * It sends a request to the [Manage Prices](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsidpricesbatch)
     * API route.
     *
     * @param id - The price list's ID.
     * @param body - The prices to create, update, or delete.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * sdk.admin.priceList.batchPrices("plist_123", {
     *   create: [{
     *     variant_id: "variant_123",
     *     currency_code: "usd",
     *     amount: 10,
     *     rules: {
     *       region_id: "reg_123"
     *     }
     *   }],
     *   update: [{
     *     id: "price_123",
     *     variant_id: "variant_123",
     *     amount: 20,
     *   }],
     *   delete: ["price_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */
    PriceList.prototype.batchPrices = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/price-lists/".concat(id, "/prices/batch"), {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method removes products from a price list. It sends a request to the
     * [Remove Product](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsidproducts)
     * API route.
     *
     * @param id - The price list's ID.
     * @param body - The details of the products to remove.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * sdk.admin.priceList.linkProducts("plist_123", {
     *   remove: ["prod_123"]
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     */
    PriceList.prototype.linkProducts = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/price-lists/".concat(id, "/products"), {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    return PriceList;
}());
exports.PriceList = PriceList;
