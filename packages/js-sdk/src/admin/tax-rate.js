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
exports.TaxRate = void 0;
var taxRateUrl = "/admin/tax-rates";
var TaxRate = /** @class */ (function () {
    /**
     * @ignore
     */
    function TaxRate(client) {
        this.client = client;
    }
    /**
     * This method creates a tax rate. It sends a request to the
     * [Create Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_posttaxrates)
     * API route.
     *
     * @param body - The details of the tax rate to create.
     * @param query - Configure the fields and relations to retrieve in the tax rate.
     * @param headers - Headers to pass in the request.
     * @returns The tax rate's details.
     *
     * @example
     * sdk.admin.taxRate.create({
     *   name: "VAT",
     *   tax_region_id: "txreg_123",
     *   code: "VAT",
     *   rate: 2, // 2%
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate)
     * })
     */
    TaxRate.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch(taxRateUrl, {
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
     * This method updates a tax rate. It sends a request to the
     * [Update Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_posttaxratesid)
     * API route.
     *
     * @param id - The ID of the tax rate to update.
     * @param body - The details of the tax rate to update.
     * @param query - Configure the fields and relations to retrieve in the tax rate.
     * @param headers - Headers to pass in the request.
     * @returns The tax rate's details.
     *
     * @example
     * sdk.admin.taxRate.update("txrat_123", {
     *   name: "VAT",
     *   code: "VAT",
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate)
     * })
     */
    TaxRate.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("".concat(taxRateUrl, "/").concat(id), {
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
     * This method deletes a tax rate. It sends a request to the
     * [Delete Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_deletetaxratesid)
     * API route.
     *
     * @param id - The ID of the tax rate to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.taxRate.delete("txrat_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    TaxRate.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("".concat(taxRateUrl, "/").concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a tax rate. It sends a request to the
     * [Get Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_gettaxratesid)
     * API route.
     *
     * @param id - The ID of the tax rate to retrieve.
     * @param query - Configure the fields and relations to retrieve in the tax rate.
     * @param headers - Headers to pass in the request.
     * @returns The tax rate's details.
     *
     * @example
     * To retrieve a tax rate by its ID:
     *
     * ```ts
     * sdk.admin.taxRate.retrieve("txrat_123")
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.taxRate.retrieve("txrat_123", {
     *   fields: "id,*tax_region"
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    TaxRate.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("".concat(taxRateUrl, "/").concat(id), {
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
     * This method retrieves a list of tax rates. It sends a request to the
     * [List Tax Rates](https://docs.medusajs.com/api/admin#tax-rates_gettaxrates)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of tax rates.
     *
     * @example
     * To retrieve the list of tax rates:
     *
     * ```ts
     * sdk.admin.taxRate.list()
     * .then(({ tax_rates, count, limit, offset }) => {
     *   console.log(tax_rates)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.taxRate.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ tax_rates, count, limit, offset }) => {
     *   console.log(tax_rates)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each tax rate:
     *
     * ```ts
     * sdk.admin.taxRate.list({
     *   fields: "id,*tax_region"
     * })
     * .then(({ tax_rates, count, limit, offset }) => {
     *   console.log(tax_rates)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    TaxRate.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch(taxRateUrl, {
                            method: "GET",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TaxRate;
}());
exports.TaxRate = TaxRate;
