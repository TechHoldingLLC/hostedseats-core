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
exports.TaxRegion = void 0;
var taxRegionUrl = "/admin/tax-regions";
/**
 * @privateRemarks
 *
 * TODO: Add support for updating a tax region
 */
var TaxRegion = /** @class */ (function () {
    /**
     * @ignore
     */
    function TaxRegion(client) {
        this.client = client;
    }
    /**
     * This method creates a tax region. It sends a request to the
     * [Create Tax Region](https://docs.medusajs.com/api/admin#tax-regions_posttaxregions)
     * API route.
     *
     * @param body - The details of the tax region to create.
     * @param query - Configure the fields and relations to retrieve in the tax region.
     * @param headers - Headers to pass in the request.
     * @returns The tax region's details.
     *
     * @example
     * sdk.admin.taxRegion.create({
     *   country_code: "us",
     *   province_code: "ca",
     *   default_tax_rate: {
     *     code: "VAT",
     *     name: "VAT",
     *     rate: 20, // 20%
     *     is_combinable: true,
     *   },
     * })
     * .then(({ tax_region }) => {
     *   console.log(tax_region)
     * })
     */
    TaxRegion.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch(taxRegionUrl, {
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
     * This method deletes a tax region. It sends a request to the
     * [Delete Tax Region](https://docs.medusajs.com/api/admin#tax-regions_deletetaxregionsid)
     * API route.
     *
     * @param id - The ID of the tax region to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.taxRegion.delete("txreg_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    TaxRegion.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("".concat(taxRegionUrl, "/").concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a tax region. It sends a request to the
     * [Get Tax Region](https://docs.medusajs.com/api/admin#tax-regions_gettaxregionsid)
     * API route.
     *
     * @param id - The ID of the tax region to retrieve.
     * @param query - Configure the fields and relations to retrieve in the tax region.
     * @param headers - Headers to pass in the request.
     * @returns The tax region's details.
     *
     * @example
     * To retrieve a tax region by its ID:
     *
     * ```ts
     * sdk.admin.taxRegion.retrieve("txreg_123")
     * .then(({ tax_region }) => {
     *   console.log(tax_region)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.taxRegion.retrieve("txreg_123", {
     *   fields: "id,*tax_rates"
     * })
     * .then(({ tax_region }) => {
     *   console.log(tax_region)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    TaxRegion.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("".concat(taxRegionUrl, "/").concat(id), {
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
     * This method retrieves a list of tax regions. It sends a request to the
     * [List Tax Regions](https://docs.medusajs.com/api/admin#tax-regions_gettaxregions)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of tax regions.
     *
     * @example
     * To retrieve the list of tax regions:
     *
     * ```ts
     * sdk.admin.taxRegion.list()
     * .then(({ tax_regions, count, limit, offset }) => {
     *   console.log(tax_regions)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.taxRegion.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ tax_regions, count, limit, offset }) => {
     *   console.log(tax_regions)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each tax region:
     *
     * ```ts
     * sdk.admin.taxRegion.list({
     *   fields: "id,*tax_rates"
     * })
     * .then(({ tax_regions, count, limit, offset }) => {
     *   console.log(tax_regions)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    TaxRegion.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch(taxRegionUrl, {
                            method: "GET",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TaxRegion;
}());
exports.TaxRegion = TaxRegion;
