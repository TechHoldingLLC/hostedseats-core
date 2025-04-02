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
exports.ShippingProfile = void 0;
var ShippingProfile = /** @class */ (function () {
    /**
     * @ignore
     */
    function ShippingProfile(client) {
        this.client = client;
    }
    /**
     * This method creates a new shipping profile. It sends a request to the
     * [Create Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_postshippingprofiles)
     * API route.
     *
     * @param body - The details of the shipping profile to create.
     * @param query - Configure the fields and relations to retrieve in the shipping profile.
     * @param headers - Headers to pass in the request.
     * @returns The shipping profile's details.
     *
     * @example
     * sdk.admin.shippingProfile.create({
     *   name: "Default Shipping Profile",
     * })
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile)
     * })
     */
    ShippingProfile.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-profiles", {
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
     * This method updates a shipping profile. It sends a request to the
     * [Update Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_postshippingprofilesid)
     * API route.
     *
     * @param id - The ID of the shipping profile to update.
     * @param body - The details of the shipping profile to update.
     * @param query - Configure the fields and relations to retrieve in the shipping profile.
     * @param headers - Headers to pass in the request.
     * @returns The shipping profile's details.
     *
     * @example
     * sdk.admin.shippingProfile.update("sp_123", {
     *   name: "Updated Shipping Profile",
     * })
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile)
     * })
     */
    ShippingProfile.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-profiles/".concat(id), {
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
     * This method deletes a shipping profile. It sends a request to the
     * [Delete Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_deleteshippingprofilesid)
     * API route.
     *
     * @param id - The ID of the shipping profile to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.shippingProfile.delete("sp_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    ShippingProfile.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-profiles/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a list of shipping profiles. It sends a request to the
     * [List Shipping Profiles](https://docs.medusajs.com/api/admin#shipping-profiles_getshippingprofiles)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of shipping profiles.
     *
     * @example
     * To retrieve the list of shipping profiles:
     *
     * ```ts
     * sdk.admin.shippingProfile.list()
     * .then(({ shipping_profiles, count, limit, offset }) => {
     *   console.log(shipping_profiles)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.shippingProfile.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ shipping_profiles, count, limit, offset }) => {
     *   console.log(shipping_profiles)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each shipping profile:
     *
     * ```ts
     * sdk.admin.shippingProfile.list({
     *   fields: "id,name"
     * })
     * .then(({ shipping_profiles, count, limit, offset }) => {
     *   console.log(shipping_profiles)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    ShippingProfile.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-profiles", {
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
     * This method retrieves a shipping profile. It sends a request to the
     * [Get Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_getshippingprofilesid)
     * API route.
     *
     * @param id - The ID of the shipping profile to retrieve.
     * @param query - Configure the fields and relations to retrieve in the shipping profile.
     * @param headers - Headers to pass in the request.
     * @returns The shipping profile's details.
     *
     * @example
     * To retrieve a shipping profile by its ID:
     *
     * ```ts
     * sdk.admin.shippingProfile.retrieve("sp_123")
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.shippingProfile.retrieve("sp_123", {
     *   fields: "id,name"
     * })
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    ShippingProfile.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/shipping-profiles/".concat(id), {
                            method: "GET",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ShippingProfile;
}());
exports.ShippingProfile = ShippingProfile;
