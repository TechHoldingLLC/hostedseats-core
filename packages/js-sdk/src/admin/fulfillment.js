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
exports.Fulfillment = void 0;
var Fulfillment = /** @class */ (function () {
    /**
     * @ignore
     */
    function Fulfillment(client) {
        this.client = client;
    }
    /**
     * This method creates a fulfillment. It sends a request to the
     * [Create Fulfillment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillments)
     * API route.
     *
     * @param body - The fulfillment's details.
     * @param query - Configure the fields to retrieve in the fulfillment.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment's details.
     *
     * @example
     * sdk.admin.fulfillment.create({
     *   location_id: "sloc_123",
     *   provider_id: "my_fulfillment",
     *   delivery_address: {
     *     country_code: "us"
     *   },
     *   items: [
     *     {
     *       title: "Shirt",
     *       sku: "SHIRT",
     *       quantity: 1,
     *       barcode: "123"
     *     }
     *   ],
     *   labels: [],
     *   order: {},
     *   order_id: "order_123"
     * })
     * .then(({ fulfillment }) => {
     *   console.log(fulfillment)
     * })
     */
    Fulfillment.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/fulfillments", {
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
     * This method cancels a fulfillment. It sends a request to the
     * [Cancel Fulfillment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillmentsidcancel)
     * API route.
     *
     * @param id - The fulfillment's ID.
     * @param query - Configure the fields to retrieve in the fulfillment.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment's details.
     *
     * @example
     * sdk.admin.fulfillment.cancel("ful_123")
     * .then(({ fulfillment }) => {
     *   console.log(fulfillment)
     * })
     */
    Fulfillment.prototype.cancel = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/fulfillments/".concat(id, "/cancel"), {
                            method: "POST",
                            body: {},
                            headers: headers,
                            query: query
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a shipment for a fulfillment. It sends a request to the
     * [Create Shipment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillmentsidshipment)
     * API route.
     *
     * @param id - The fulfillment's ID.
     * @param body - The shipment's details.
     * @param query - Configure the fields to retrieve in the fulfillment.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment's details.
     *
     * @example
     * sdk.admin.fulfillment.createShipment("ful_123", {
     *   labels: [
     *     {
     *       tracking_number: "123",
     *       tracking_url: "example.com",
     *       label_url: "example.com"
     *     }
     *   ]
     * })
     * .then(({ fulfillment }) => {
     *   console.log(fulfillment)
     * })
     */
    Fulfillment.prototype.createShipment = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/fulfillments/".concat(id, "/shipment"), {
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
    return Fulfillment;
}());
exports.Fulfillment = Fulfillment;
