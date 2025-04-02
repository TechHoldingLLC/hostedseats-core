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
exports.Region = void 0;
var Region = /** @class */ (function () {
    /**
     * @ignore
     */
    function Region(client) {
        this.client = client;
    }
    /**
     * This method creates a new region. It sends a request to the
     * [Create Region](https://docs.medusajs.com/api/admin#regions_postregions)
     * API route.
     *
     * @param body - The details of the region to create.
     * @param query - Configure the fields and relations to retrieve in the region.
     * @param headers - Headers to pass in the request.
     * @returns The created region's details.
     *
     * @example
     * sdk.admin.region.create({
     *   name: "United States",
     *   currency_code: "usd",
     * })
     * .then(({ region }) => {
     *   console.log(region)
     * })
     */
    Region.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/regions", {
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
     * This method updates a region. It sends a request to the
     * [Update Region](https://docs.medusajs.com/api/admin#regions_postregionsid)
     * API route.
     *
     * @param id - The ID of the region to update.
     * @param body - The details of the region to update.
     * @param query - Configure the fields and relations to retrieve in the region.
     * @param headers - Headers to pass in the request.
     * @returns The updated region's details.
     *
     * @example
     * sdk.admin.region.update("region_123", {
     *   name: "United States",
     * })
     * .then(({ region }) => {
     *   console.log(region)
     * })
     */
    Region.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/regions/".concat(id), {
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
     * This method retrieves a list of regions. It sends a request to the
     * [List Regions](https://docs.medusajs.com/api/admin#regions_getregions)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of regions.
     *
     * @example
     * To retrieve the list of regions:
     *
     * ```ts
     * sdk.admin.region.list()
     * .then(({ regions, count, limit, offset }) => {
     *   console.log(regions)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.region.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ regions, count, limit, offset }) => {
     *   console.log(regions)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each region:
     *
     * ```ts
     * sdk.admin.region.list({
     *   fields: "id,*countries"
     * })
     * .then(({ regions, count, limit, offset }) => {
     *   console.log(regions)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    Region.prototype.list = function (queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/regions", {
                            query: queryParams,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a region by ID. It sends a request to the
     * [Get Region](https://docs.medusajs.com/api/admin#regions_getregionsid)
     * API route.
     *
     * @param id - The ID of the region to retrieve.
     * @param query - Configure the fields and relations to retrieve in the region.
     * @param headers - Headers to pass in the request.
     * @returns The region's details.
     *
     * @example
     * To retrieve a region by its ID:
     *
     * ```ts
     * sdk.admin.region.retrieve("region_123")
     * .then(({ region }) => {
     *   console.log(region)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.region.retrieve("region_123", {
     *   fields: "id,*countries"
     * })
     * .then(({ region }) => {
     *   console.log(region)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    Region.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/regions/".concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes a region by ID. It sends a request to the
     * [Delete Region](https://docs.medusajs.com/api/admin#regions_deleteregionsid)
     * API route.
     *
     * @param id - The ID of the region to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.region.delete("region_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Region.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/regions/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Region;
}());
exports.Region = Region;
