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
var Reservation = /** @class */ (function () {
    /**
     * @ignore
     */
    function Reservation(client) {
        this.client = client;
    }
    /**
     * This method retrieves a reservation by ID. It sends a request to the
     * [Get Reservation](https://docs.medusajs.com/api/admin#reservations_getreservationsid)
     * API route.
     *
     * @param id - The reservation's ID.
     * @param query - Configure the fields and relations to retrieve in the reservation.
     * @param headers - Headers to pass in the request.
     * @returns The reservation's details.
     *
     * @example
     * To retrieve a reservation by its ID:
     *
     * ```ts
     * sdk.admin.reservation.retrieve("res_123")
     * .then(({ reservation }) => {
     *   console.log(reservation)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.reservation.retrieve("res_123", {
     *   fields: "id,name"
     * })
     * .then(({ reservation }) => {
     *   console.log(reservation)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    Reservation.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/reservations/".concat(id), {
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
     * This method retrieves a list of reservations. It sends a request to the
     * [List Reservations](https://docs.medusajs.com/api/admin#reservations_getreservations)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of reservations.
     *
     * @example
     * To retrieve the list of reservations:
     *
     * ```ts
     * sdk.admin.reservation.list()
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.reservation.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each reservation:
     *
     * ```ts
     * sdk.admin.reservation.list({
     *   fields: "id,*inventory_item"
     * })
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    Reservation.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/reservations", {
                            method: "GET",
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a reservation. It sends a request to the
     * [Create Reservation](https://docs.medusajs.com/api/admin#reservations_postreservations)
     * API route.
     *
     * @param body - The details of the reservation to create.
     * @param query - Configure the fields and relations to retrieve in the reservation.
     * @param headers - Headers to pass in the request.
     * @returns The reservation's details.
     *
     * @example
     * sdk.admin.reservation.create({
     *   inventory_item_id: "iitem_123",
     *   location_id: "sloc_123",
     *   quantity: 10,
     * })
     * .then(({ reservation }) => {
     *   console.log(reservation)
     * })
     */
    Reservation.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/reservations", {
                            method: "POST",
                            body: body,
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates a reservation. It sends a request to the
     * [Update Reservation](https://docs.medusajs.com/api/admin#reservations_postreservationsid)
     * API route.
     *
     * @param id - The reservation's ID.
     * @param body - The details of the reservation to update.
     * @param query - Configure the fields and relations to retrieve in the reservation.
     * @param headers - Headers to pass in the request.
     * @returns The reservation's details.
     *
     * @example
     * sdk.admin.reservation.update("res_123", {
     *   quantity: 20,
     * })
     * .then(({ reservation }) => {
     *   console.log(reservation)
     * })
     */
    Reservation.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/reservations/".concat(id), {
                            method: "POST",
                            body: body,
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes a reservation by ID. It sends a request to the
     * [Delete Reservation](https://docs.medusajs.com/api/admin#reservations_deletereservationsid)
     * API route.
     *
     * @param id - The reservation's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.reservation.delete("res_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Reservation.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/reservations/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Reservation;
}());
exports.default = Reservation;
