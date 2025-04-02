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
exports.FulfillmentSet = void 0;
var FulfillmentSet = /** @class */ (function () {
    /**
     * @ignore
     */
    function FulfillmentSet(client) {
        this.client = client;
    }
    /**
     * This method deletes a fulfillment set. It sends a request to the
     * [Delete Fulfillment Set](https://docs.medusajs.com/api/admin#fulfillment-sets_deletefulfillmentsetsid)
     * API route.
     *
     * @param id - The fulfillment set's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.fulfillmentSet.delete("fset_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    FulfillmentSet.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/fulfillment-sets/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method adds a service zone to a fulfillment set. It uses the
     * [Add Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_postfulfillmentsetsidservicezones)
     * API route.
     *
     * @param id - The fulfillment set's ID.
     * @param body - The service zone's details.
     * @param query - Configure the fields to retrieve in the fulfillment set.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment set's details.
     *
     * @example
     * sdk.admin.fulfillmentSet.createServiceZone("fset_123", {
     *   name: "Europe Service Zone",
     *   geo_zones: [{
     *     type: "country",
     *     country_code: "us"
     *   }]
     * })
     * .then(({ fulfillment_set }) => {
     *   console.log(fulfillment_set)
     * })
     */
    FulfillmentSet.prototype.createServiceZone = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/fulfillment-sets/".concat(id, "/service-zones"), {
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
     * This method retrieves a fulfillment set's service zone's details. It sends a request to the
     * [Get Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_getfulfillmentsetsidservicezoneszone_id)
     * API route.
     *
     * @param fulfillmentSetId - The fulfillment set's ID.
     * @param serviceZoneId - The service zone's ID.
     * @param query - Configure the fields to retrieve in the service zone.
     * @param headers - Headers to pass in the request.
     * @returns The service zone's details.
     *
     * @example
     * To retrieve a fulfillment set's service zone by its ID:
     *
     * ```ts
     * sdk.admin.fulfillmentSet.retrieveServiceZone(
     *   "fset_123",
     *   "serzo_123"
     * )
     * .then(({ service_zone }) => {
     *   console.log(service_zone)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.fulfillmentSet.retrieveServiceZone(
     *   "fset_123",
     *   "serzo_123",
     *   {
     *     fields: "id,*geo_zones"
     *   }
     * )
     * .then(({ service_zone }) => {
     *   console.log(service_zone)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    FulfillmentSet.prototype.retrieveServiceZone = function (fulfillmentSetId, serviceZoneId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/fulfillment-sets/".concat(fulfillmentSetId, "/service-zones/").concat(serviceZoneId), {
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
     * This method updates a service zone in a fulfillment set. It sends a request to the
     * [Update Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_postfulfillmentsetsidservicezoneszone_id)
     * API route.
     *
     * @param fulfillmentSetId - The fulfillment set's ID.
     * @param serviceZoneId - The service zone's ID.
     * @param body - The data to update in the service zone.
     * @param query - Configure the fields to retrieve in the fulfillment set.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment set's details.
     *
     * @example
     * sdk.admin.fulfillmentSet.updateServiceZone(
     *   "fset_123",
     *   "serzo_123",
     *   {
     *     name: "Europe Service Zone",
     *   }
     * )
     * .then(({ fulfillment_set }) => {
     *   console.log(fulfillment_set)
     * })
     */
    FulfillmentSet.prototype.updateServiceZone = function (fulfillmentSetId, serviceZoneId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/fulfillment-sets/".concat(fulfillmentSetId, "/service-zones/").concat(serviceZoneId), {
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
     * This method deletes a service zone in a fulfillment set. It sends a request to the
     * [Remove Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_deletefulfillmentsetsidservicezoneszone_id)
     * API route.
     *
     * @param fulfillmentSetId - The fulfullment set's ID.
     * @param serviceZoneId - The service zone's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.fulfillmentSet.deleteServiceZone(
     *   "fset_123",
     *   "serzo_123",
     * )
     * .then(({ deleted, parent: fulfillmentSet }) => {
     *   console.log(deleted, fulfillmentSet)
     * })
     */
    FulfillmentSet.prototype.deleteServiceZone = function (fulfillmentSetId, serviceZoneId, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/fulfillment-sets/".concat(fulfillmentSetId, "/service-zones/").concat(serviceZoneId), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return FulfillmentSet;
}());
exports.FulfillmentSet = FulfillmentSet;
