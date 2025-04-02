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
exports.Order = void 0;
var Order = /** @class */ (function () {
    /**
     * @ignore
     */
    function Order(client) {
        this.client = client;
    }
    /**
     * This method retrieves an order by its ID. It sends a request to the
     * [Get Order](https://docs.medusajs.com/api/admin#orders_getordersid)
     * API route.
     *
     * @param id - The order's ID.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * To retrieve an order by its ID:
     *
     * ```ts
     * sdk.admin.order.retrieve("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.order.retrieve("order_123", {
     *   fields: "id,*items"
     * })
     * .then(({ order }) => {
     *   console.log(order)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Order.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates an order. It sends a request to the
     * [Update Order Email](https://docs.medusajs.com/api/admin#orders_postordersid)
     * API route.
     *
     * @param id - The order's ID.
     * @param body - The update details.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.update(
     *   "order_123",
     *   {
     *     email: "new_email@example.com",
     *     shipping_address: {
     *       first_name: "John",
     *       last_name: "Doe",
     *       address_1: "123 Main St",
     *     }
     *   }
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.update = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id), {
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
     * This method retrieves the preview of an order based on its last associated change. It sends a request to the
     * [Get Order Preview](https://docs.medusajs.com/api/admin#orders_getordersidpreview) API route.
     *
     * @param id - The order's ID.
     * @param query - Query parameters.
     * @param headers - Headers to pass in the request
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.order.retrievePreview("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.retrievePreview = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/preview"), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a paginated list of orders. It sends a request to the
     * [List Orders](https://docs.medusajs.com/api/admin#orders_getorders) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of orders.
     *
     * @example
     * To retrieve the list of orders:
     *
     * ```ts
     * sdk.admin.order.list()
     * .then(({ orders, count, limit, offset }) => {
     *   console.log(orders)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.order.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ orders, count, limit, offset }) => {
     *   console.log(orders)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each order:
     *
     * ```ts
     * sdk.admin.order.list({
     *   fields: "id,*items"
     * })
     * .then(({ orders, count, limit, offset }) => {
     *   console.log(orders)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Order.prototype.list = function (queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders", {
                            query: queryParams,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method cancels an order. It sends a request to the
     * [Cancel Order](https://docs.medusajs.com/api/admin#orders_postordersidcancel)
     * API route.
     *
     * @param id - The order's ID.
     * @param headers - Headers to pass in the request.
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.cancel("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.cancel = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/cancel"), {
                            method: "POST",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method requests an order transfer. It sends a request to the
     * [Request Order Transfer](https://docs.medusajs.com/api/admin#orders_postordersidrequesttransfer)
     * API route.
     *
     * @param id - The order's ID.
     * @param headers - Headers to pass in the request.
     * @param body - The transfer's details - the id of the next owner.
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.requestTransfer("order_123", {
     *   customer_id: "cus_123",
     *   internal_note: "Internal note",
     * })
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.requestTransfer = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/transfer"), {
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
     * This method cancels an order transfer request. It sends a request to the
     * [Cancel Order Transfer Request](https://docs.medusajs.com/api/admin#orders_postordersidcanceltransferrequest)
     * API route.
     *
     * @param id - The order's ID.
     * @param headers - Headers to pass in the request.
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.cancelTransfer("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.cancelTransfer = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/transfer/cancel"), {
                            method: "POST",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a fulfillment for an order. It sends a request to the
     * [Create Fulfillment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillments)
     * API route.
     *
     * @param id - The order's ID.
     * @param body - The fulfillment's details.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.createFulfillment("order_123", {
     *   items: [
     *     {
     *       id: "orli_123",
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.createFulfillment = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/fulfillments"), {
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
     * This method cancels an order's fulfillment. It sends a request to the
     * [Cancel Fulfillment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idcancel)
     * API route.
     *
     * @param id - The order's ID.
     * @param fulfillmentId - The ID of the fulfillment to cancel.
     * @param body - The cancelation's details.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.cancelFulfillment(
     *   "order_123",
     *   "ful_123",
     *   {
     *     no_notification: false
     *   }
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.cancelFulfillment = function (id, fulfillmentId, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/fulfillments/").concat(fulfillmentId, "/cancel"), {
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
     * This method creates a shipment for an order's fulfillment. It sends a request to the
     * [Create Shipment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idshipments)
     * API route.
     *
     * @param id - The order's ID.
     * @param fulfillmentId - The ID of the fulfillment.
     * @param body - The shipment's details.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.createShipment(
     *   "order_123",
     *   "ful_123",
     *   {
     *     items: [
     *       {
     *         id: "fulit_123",
     *         quantity: 1
     *       }
     *     ]
     *   }
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.createShipment = function (id, fulfillmentId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/fulfillments/").concat(fulfillmentId, "/shipments"), {
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
     * This method marks an order's fulfillment as delivered. It sends a request to the
     * [Mark Delivered ](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idmarkasdelivered)
     * API route.
     *
     * @param id - The order's ID.
     * @param fulfillmentId - The fulfillment's ID.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.markAsDelivered(
     *   "order_123",
     *   "ful_123",
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */
    Order.prototype.markAsDelivered = function (id, fulfillmentId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/fulfillments/").concat(fulfillmentId, "/mark-as-delivered"), {
                            method: "POST",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a list of changes made on an order, including returns, exchanges, etc...
     *
     * This method sends a request to the [List Changes](https://docs.medusajs.com/api/admin#orders_getordersidchanges)
     * API route.
     *
     * @param id - The order's ID.
     * @param queryParams - Configure the fields to retrieve in each order change.
     * @param headers - Headers to pass in the request
     * @returns The list of order changes.
     *
     * @example
     * sdk.admin.order.listChanges("order_123")
     * .then(({ order_changes }) => {
     *   console.log(order_changes)
     * })
     */
    Order.prototype.listChanges = function (id, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/changes"), {
                            query: queryParams,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves the order's line items. It sends a request to the
     * [List Line Items](https://docs.medusajs.com/api/admin#orders_getordersidlineitems)
     * API routes.
     *
     * @param id - The order's ID.
     * @param queryParams - Configure the fields to retrieve in each line item.
     * @param headers - Headers to pass in the request
     * @returns The list of line items.
     *
     * @example
     * sdk.admin.order.listLineItems("order_123")
     * .then(({ order_items }) => {
     *   console.log(order_items)
     * })
     */
    Order.prototype.listLineItems = function (id, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(id, "/line-items"), {
                            query: queryParams,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Order.prototype.createCreditLine = function (orderId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/orders/".concat(orderId, "/credit-lines"), {
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
    return Order;
}());
exports.Order = Order;
