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
exports.ShippingOption = void 0;
var ShippingOption = /** @class */ (function () {
    /**
     * @ignore
     */
    function ShippingOption(client) {
        this.client = client;
    }
    /**
     * This method creates a shipping option. It sends a request to the
     * [Create Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptions)
     * API route.
     *
     * @param body - The details of the shipping option to create.
     * @param query - Configure the fields and relations to retrieve in the shipping option.
     * @param headers - Headers to pass in the request.
     * @returns The shipping option's details.
     *
     * @example
     * sdk.admin.shippingOption.create({
     *   name: "Standard Shipping",
     *   profile_id: "shp_123",
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     */
    ShippingOption.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-options", {
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
     * This method retrieves a shipping option. It sends a request to the
     * [Get Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_getshippingoptionsid)
     * API route.
     *
     * @param id - The ID of the shipping option to retrieve.
     * @param query - Configure the fields and relations to retrieve in the shipping option.
     * @param headers - Headers to pass in the request.
     * @returns The shipping option's details.
     *
     * @example
     * To retrieve a shipping option by its ID:
     *
     * ```ts
     * sdk.admin.shippingOption.retrieve("so_123")
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.shippingOption.retrieve("so_123", {
     *   fields: "id,*service_zone"
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    ShippingOption.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-options/".concat(id), {
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
     * This method updates a shipping option. It sends a request to the
     * [Update Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptionsid)
     * API route.
     *
     * @param id - The ID of the shipping option to update.
     * @param body - The details of the shipping option to update.
     * @param query - Configure the fields and relations to retrieve in the shipping option.
     * @param headers - Headers to pass in the request.
     * @returns The shipping option's details.
     *
     * @example
     * sdk.admin.shippingOption.update("so_123", {
     *   name: "Standard Shipping",
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     */
    ShippingOption.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-options/".concat(id), {
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
     * This method deletes a shipping option. It sends a request to the
     * [Delete Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_deleteshippingoptionsid)
     * API route.
     *
     * @param id - The ID of the shipping option to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.shippingOption.delete("so_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    ShippingOption.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-options/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a list of shipping options. It sends a request to the
     * [List Shipping Options](https://docs.medusajs.com/api/admin#shipping-options_getshippingoptions)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of shipping options.
     *
     * @example
     * To retrieve the list of shipping options:
     *
     * ```ts
     * sdk.admin.shippingOption.list()
     * .then(({ shipping_options, count, limit, offset }) => {
     *   console.log(shipping_options)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.shippingOption.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ shipping_options, count, limit, offset }) => {
     *   console.log(shipping_options)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each shipping option:
     *
     * ```ts
     * sdk.admin.shippingOption.list({
     *   fields: "id,*service_zone"
     * })
     * .then(({ shipping_options, count, limit, offset }) => {
     *   console.log(shipping_options)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    ShippingOption.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-options", {
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
     * This method manages the rules of a shipping option to create, update, or remove them. It sends a request to the
     * [Manage Rules of a Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptionsidrulesbatch)
     * API route.
     *
     * @param id - The ID of the shipping option to manage the rules for.
     * @param body - The details of the shipping option rules to manage.
     * @param headers - Headers to pass in the request.
     * @returns The shipping option's details.
     *
     * @example
     * sdk.admin.shippingOption.updateRules("so_123", {
     *   create: [{ attribute: "enabled_in_store", operator: "eq", value: "true" }],
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     */
    ShippingOption.prototype.updateRules = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-options/".concat(id, "/rules/batch"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ShippingOption;
}());
exports.ShippingOption = ShippingOption;
