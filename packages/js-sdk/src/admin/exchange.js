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
exports.Exchange = void 0;
var Exchange = /** @class */ (function () {
    /**
     * @ignore
     */
    function Exchange(client) {
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of exchanges. It sends a request to the
     * [List Exchanges](https://docs.medusajs.com/api/admin#exchanges_getexchanges)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of exchanges.
     *
     * @example
     * To retrieve the list of exchanges:
     *
     * ```ts
     * sdk.admin.exchange.list()
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.exchange.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each exchange:
     *
     * ```ts
     * sdk.admin.exchange.list({
     *   fields: "id,*order"
     * })
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Exchange.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges", {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves an exchange by its ID. It sends a request to the
     * [Get Exchange](https://docs.medusajs.com/api/admin#exchanges_getexchangesid)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * To retrieve an exchange by its ID:
     *
     * ```ts
     * sdk.admin.exchange.retrieve("exchange_123")
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.exchange.retrieve("exchange_123", {
     *   fields: "id,*order"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Exchange.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates an admin exchange. It sends a request to the
     * [Create Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchanges) API route.
     *
     * @param body - The exchange's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * sdk.admin.exchange.create({
     *   order_id: "order_123"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges", {
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
     * This method cancels an exchange. It sends a request to the
     * [Cancel Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidcancel) API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * sdk.admin.exchange.cancel("exchange_123")
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.cancel = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/cancel"), {
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
     * This method adds inbound (or return) items to an exchange. These inbound items will
     * have the action `RETURN_ITEM`.
     *
     * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditems)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addInboundItems("exchange_123", {
     *   items: [{
     *     id: "orli_123",
     *     quantity: 1
     *   }]
     * })
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Exchange.prototype.addInboundItems = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/inbound/items"), {
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
     * This method updates an inbound (or return) item from an exchange using the ID of
     * the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can
     * check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the return item's `RETURN_ITEM` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateInboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Exchange.prototype.updateInboundItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/inbound/items/").concat(actionId), {
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
     * This method removes an inbound (or return) item from an exchange using the ID of the
     * item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the return item's `RETURN_ITEM` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.removeInboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Exchange.prototype.removeInboundItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/inbound/items/").concat(actionId), {
                            method: "DELETE",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method adds an inbound (or return) shipping method to an exchange.
     * The inbound shipping method will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
     * API route.
     *
     * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addInboundShipping("exchange_123", {
     *   shipping_option_id: "so_123"
     * })
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Exchange.prototype.addInboundShipping = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/inbound/shipping-method"), {
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
     * This method updates the shipping method for returning items in the exchange using the ID
     * of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateInboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     *    {
     *     custom_amount: 10
     *   }
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Exchange.prototype.updateInboundShipping = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/inbound/shipping-method/").concat(actionId), {
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
     * This method removes the shipping method for returning items in the exchange using the ID
     * of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.deleteInboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Exchange.prototype.deleteInboundShipping = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/inbound/shipping-method/").concat(actionId), {
                            method: "DELETE",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method adds outbound (or new) items to an exchange.
     * These outbound items will have the action `ITEM_ADD`.
     *
     * This method sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditems)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addOutboundItems("exchange_123", {
     *   items: [{
     *     id: "variant_123",
     *     quantity: 1
     *   }]
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.addOutboundItems = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/outbound/items"), {
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
     * This method updates an outbound (or new) item from an exchange using the ID
     * of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
     * @param body - The item's details to update.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateOutboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.updateOutboundItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/outbound/items/").concat(actionId), {
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
     * This method removes an outbound (or new) item from an exchange using the ID
     * of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.removeOutboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.removeOutboundItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/outbound/items/").concat(actionId), {
                            method: "DELETE",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method adds an outbound shipping method to an exchange. The outbound shipping method
     * will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the [Add Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethod)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addOutboundShipping("exchange_123", {
     *   shipping_option_id: "so_123"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.addOutboundShipping = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/outbound/shipping-method"), {
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
     * This method updates the shipping method for delivering outbound items in the exchange using
     * the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateOutboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     custom_amount: 10
     *   }
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.updateOutboundShipping = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/outbound/shipping-method/").concat(actionId), {
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
     * This method removes the shipping method for delivering outbound items in the exchange using
     * the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.deleteOutboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.deleteOutboundShipping = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/outbound/shipping-method/").concat(actionId), {
                            method: "DELETE",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method confirms an exchange request, applying its changes on the associated order.
     *
     * This method sends a request to the [Confirm Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidrequest)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The confirmation's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange and associated return's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.request("exchange_123", {})
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */
    Exchange.prototype.request = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/request"), {
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
     * This method cancels an exchange request. It sends a request to the
     * [Cancel Exchange Request](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidrequest)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The cancelation's details.
     *
     * @example
     * sdk.admin.exchange.cancel("exchange_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Exchange.prototype.cancelRequest = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/exchanges/".concat(id, "/request"), {
                            method: "DELETE",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Exchange;
}());
exports.Exchange = Exchange;
