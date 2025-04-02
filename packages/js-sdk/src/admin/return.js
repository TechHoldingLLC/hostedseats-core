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
exports.Return = void 0;
var Return = /** @class */ (function () {
    /**
     * @ignore
     */
    function Return(client) {
        this.client = client;
    }
    /**
     * This method retrieves a list of returns. It sends a request to the
     * [List Returns](https://docs.medusajs.com/api/admin#returns_getreturns)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of returns.
     *
     * @example
     * To retrieve the list of returns:
     *
     * ```ts
     * sdk.admin.return.list()
     * .then(({ returns, count, limit, offset }) => {
     *   console.log(returns)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.return.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ returns, count, limit, offset }) => {
     *   console.log(returns)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each return:
     *
     * ```ts
     * sdk.admin.return.list({
     *   fields: "id,*items"
     * })
     * .then(({ returns, count, limit, offset }) => {
     *   console.log(returns)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    Return.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns", {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a return by ID. It sends a request to the
     * [Get Return](https://docs.medusajs.com/api/admin#returns_getreturnsid)
     * API route.
     *
     * @param id - The ID of the return to retrieve.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * To retrieve a return by its ID:
     *
     * ```ts
     * sdk.admin.return.retrieve("return_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.return.retrieve("return_123", {
     *   fields: "id,*items"
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    Return.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method initiates a return request by creating a return. It sends a request to the
     * [Create Return](https://docs.medusajs.com/api/admin#returns_postreturns)
     * API route.
     *
     * @param body - The details of the return to create.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.initiateRequest({
     *   order_id: "order_123",
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.initiateRequest = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns", {
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
     * This method cancels a return. It sends a request to the
     * [Cancel Return](https://docs.medusajs.com/api/admin#returns_postreturnsidcancel)
     * API route.
     *
     * @param id - The ID of the return to cancel.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.cancel("return_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.cancel = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/cancel"), {
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
     * This method cancels a return request. It sends a request to the
     * [Cancel Return Request](https://docs.medusajs.com/api/admin#returns_deletereturnsidrequest)
     * API route.
     *
     * @param id - The ID of the return to cancel.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.cancelRequest("return_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.cancelRequest = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/request"), {
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
     * This method adds an item to a return request. It sends a request to the
     * [Add Return Item](https://docs.medusajs.com/api/admin#returns_postreturnsidrequestitems)
     * API route.
     *
     * @param id - The ID of the return to add the item to.
     * @param body - The details of the item to add to the return.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.addReturnItem("return_123", {
     *   id: "orlitem_123",
     *   quantity: 1,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.addReturnItem = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/request-items"), {
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
     * This method updates an item in a return request by the ID of the item's `RETURN_ITEM` action.
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property. For example,
     * `item.actions.find((action) => action.action === "RETURN_ITEM")?.id` is the ID of an item's `RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Update Requested Return Item](https://docs.medusajs.com/api/admin#returns_postreturnsidrequestitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to update the item in.
     * @param actionId - The ID of the item's `RETURN_ITEM` action.
     * @param body - The details of the item to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateReturnItem("return_123", "orchach_123", {
     *   quantity: 2,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.updateReturnItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/request-items/").concat(actionId), {
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
     * This method removes an item from a return request by the ID of the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property. For example,
     * `item.actions.find((action) => action.action === "RETURN_ITEM")?.id` is the ID of an item's `RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Remove Item from Return](https://docs.medusajs.com/api/admin#returns_deletereturnsidrequestitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to remove the item from.
     * @param actionId - The ID of the item's `RETURN_ITEM` action.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.removeReturnItem("return_123", "orchach_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.removeReturnItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/request-items/").concat(actionId), {
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
     * This method adds a shipping method to a return request. It sends a request to the
     * [Add Shipping Method to Return](https://docs.medusajs.com/api/admin#returns_postreturnsidshippingmethod)
     * API route.
     *
     * @param id - The ID of the return to add the shipping method to.
     * @param body - The details of the shipping method to add to the return.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.addReturnShipping("return_123", {
     *   shipping_option_id: "so_123",
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.addReturnShipping = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/shipping-method"), {
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
     * This method updates a shipping method in a return request by the ID of the shipping method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `shipping_method.actions.find((action) => action.action === "SHIPPING_ADD")?.id` is
     * the ID of a shipping method's `SHIPPING_ADD` action.
     *
     * This method sends a request to the
     * [Update Shipping Method in Return](https://docs.medusajs.com/api/admin#returns_postreturnsidshippingmethodaction_id)
     * API route.
     *
     * @param id - The ID of the return to update the shipping method in.
     * @param actionId - The ID of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details of the shipping method to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateReturnShipping("return_123", "orchach_123", {
     *   custom_amount: 100,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.updateReturnShipping = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/shipping-method/").concat(actionId), {
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
     * This method removes a shipping method from a return request by the ID of the shipping method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `shipping_method.actions.find((action) => action.action === "SHIPPING_ADD")?.id` is
     * the ID of a shipping method's `SHIPPING_ADD` action.
     *
     * This method sends a request to the
     * [Remove Shipping Method from Return](https://docs.medusajs.com/api/admin#returns_deletereturnsidshippingmethodaction_id)
     * API route.
     *
     * @param id - The ID of the return to remove the shipping method from.
     * @param actionId - The ID of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.deleteReturnShipping("return_123", "orchach_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.deleteReturnShipping = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/shipping-method/").concat(actionId), {
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
     * This method updates a return request. It sends a request to the
     * [Update Return](https://docs.medusajs.com/api/admin#returns_postreturnsid)
     * API route.
     *
     * @param id - The ID of the return to update.
     * @param body - The details of the return to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateRequest("return_123", {
     *   location_id: "sloc_123",
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.updateRequest = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id), {
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
     * This method confirms a return request. The return's changes are applied on the inventory quantity of the return
     * items and the order only after the return has been confirmed as received using the
     * [Confirm Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveconfirm)
     * API route.
     *
     * This method sends a request to the
     * [Confirm Return Request](https://docs.medusajs.com/api/admin#returns_postreturnsidrequest)
     * API route.
     *
     * @param id - The ID of the return to confirm.
     * @param body - The details of the return to confirm.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.confirmRequest("return_123", {
     *   no_notification: true,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.confirmRequest = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/request"), {
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
     * This method starts the return receival process. It sends a request to the
     * [Start Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceive)
     * API route.
     *
     * @param id - The ID of the return to start the receival process.
     * @param body - The details of the return to start the receival process.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.initiateReceive("return_123", {
     *   internal_note: "Return received by the customer",
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.initiateReceive = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/receive"), {
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
     * This method adds received items to a return. These items will have the action `RECEIVE_RETURN_ITEM`.
     *
     * The method sends a request to the
     * [Add Received Items](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveitems)
     * API route.
     *
     * @param id - The ID of the return to add the received items to.
     * @param body - The details of the received items to add to the return.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.receiveItems("return_123", {
     *   items: [
     *     { id: "item_123", quantity: 1 },
     *   ],
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.receiveItems = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/receive-items"), {
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
     * This method updates a received item in the return by the ID of the item's `RECEIVE_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `received_item.actions.find((action) => action.action === "RECEIVE_RETURN_ITEM")?.id` is
     * the ID of a received item's `RECEIVE_RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Update Received Item](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to update the received item in.
     * @param actionId - The ID of the received item's `RECEIVE_RETURN_ITEM` action.
     * @param body - The details of the received item to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateReceiveItem("return_123", "orchach_123", {
     *   quantity: 2,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.updateReceiveItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/receive-items/").concat(actionId), {
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
     * This method removes a received item from the return by the ID of the item's `RECEIVE_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `received_item.actions.find((action) => action.action === "RECEIVE_RETURN_ITEM")?.id` is
     * the ID of a received item's `RECEIVE_RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Remove Received Item](https://docs.medusajs.com/api/admin#returns_deletereturnsidreceiveitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to remove the received item from.
     * @param actionId - The ID of the received item's `RECEIVE_RETURN_ITEM` action.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.removeReceiveItem("return_123", "orchach_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.removeReceiveItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/receive-items/").concat(actionId), {
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
     * This method adds damaged items to the return. These items will have the action `RECEIVE_DAMAGED_RETURN_ITEM`.
     *
     * A damaged item's quantity is not added back to the associated inventory item's quantity in the
     * stock location where the return is initiated from.
     *
     * The method sends a request to the
     * [Add Damaged Items](https://docs.medusajs.com/api/admin#returns_postreturnsiddismissitems)
     * API route.
     *
     * @param id - The ID of the return to add the damaged items to.
     * @param body - The details of the damaged items to add to the return.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.dismissItems("return_123", {
     *   items: [
     *     { id: "orli_123", quantity: 1 },
     *   ],
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.dismissItems = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/dismiss-items"), {
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
     * This method updates a damaged item in the return by the ID of the item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `item.actions.find((action) => action.action === "RECEIVE_DAMAGED_RETURN_ITEM")?.id` is
     * the ID of a damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Update Damaged Item](https://docs.medusajs.com/api/admin#returns_postreturnsiddismissitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to update the damaged item in.
     * @param actionId - The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param body - The details of the damaged item to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateDismissItem("return_123", "orchach_123", {
     *   quantity: 2,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.updateDismissItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/dismiss-items/").concat(actionId), {
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
     * This method removes a damaged item from the return by the ID of the item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `item.actions.find((action) => action.action === "RECEIVE_DAMAGED_RETURN_ITEM")?.id` is
     * the ID of a damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Remove Damaged Item](https://docs.medusajs.com/api/admin#returns_deletereturnsiddismissitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to remove the damaged item from.
     * @param actionId - The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.removeDismissItem("return_123", "orchach_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.removeDismissItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/dismiss-items/").concat(actionId), {
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
     * This method confirms the return receival. It sends a request to the
     * [Confirm Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveconfirm)
     * API route.
     *
     * @param id - The ID of the return to confirm the receival of.
     * @param body - The details of the receival confirmation.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.confirmReceive("return_123", {
     *   no_notification: true,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.confirmReceive = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/receive/confirm"), {
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
     * This method cancels a return receival. It sends a request to the
     * [Cancel Return Receival](https://docs.medusajs.com/api/admin#returns_deletereturnsidreceive)
     * API route.
     *
     * @param id - The ID of the return to cancel the receival of.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.cancelReceive("return_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */
    Return.prototype.cancelReceive = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/returns/".concat(id, "/receive"), {
                            method: "DELETE",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Return;
}());
exports.Return = Return;
