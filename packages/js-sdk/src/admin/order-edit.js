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
exports.OrderEdit = void 0;
var OrderEdit = /** @class */ (function () {
    /**
     * @ignore
     */
    function OrderEdit(client) {
        this.client = client;
    }
    /**
     * This method creates an order edit request. It sends a HTTP request to the
     * [Create Order Edit](https://docs.medusajs.com/api/admin#order-edits_postorderedits)
     * API route.
     *
     * @param body - The order edit's details.
     * @param query - Configure the fields to retrieve in the order edit.
     * @param headers - Headers to pass in the request.
     * @returns The order edit's details.
     *
     * @example
     * sdk.admin.orderEdit.initiateRequest({
     *   order_id: "order_123"
     * })
     * .then(({ order_change }) => {
     *   console.log(order_change)
     * })
     */
    OrderEdit.prototype.initiateRequest = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/order-edits", {
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
     * This method changes an order edit to requested. It sends a request to the
     * [Request Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidrequest)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.request("ordch_123")
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    OrderEdit.prototype.request = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/order-edits/".concat(id, "/request"), {
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
     * This method confirms an order edit and applies it on the order. It sends a request
     * to the [Confirm Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidconfirm)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.confirm("ordch_123")
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    OrderEdit.prototype.confirm = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/order-edits/".concat(id, "/confirm"), {
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
     * This method cancels a requested order edit. It sends a request to the
     * [Cancel Order Edit](https://docs.medusajs.com/api/admin#order-edits_deleteordereditsid)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param query - Query parameters
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.orderEdit.cancelRequest("ordch_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    OrderEdit.prototype.cancelRequest = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/order-edits/".concat(id), {
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
     * This method adds items to an order edit. These items will have the action `ITEM_ADD`.
     *
     * The method sends a request to the [Add Items](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditems)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.addItems("ordch_123", {
     *   items: [
     *     {
     *       variant_id: "variant_123",
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    OrderEdit.prototype.addItems = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/order-edits/".concat(id, "/items"), {
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
     * This method updates the quantity and other details of an item in an order. It sends a request to the
     * [Update Item Quantity](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsitemitem_id)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param itemId - The item's ID in the order.
     * @param body - The data to edit in the item.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.updateOriginalItem(
     *   "ordch_123",
     *   "orli_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    OrderEdit.prototype.updateOriginalItem = function (id, itemId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/order-edits/".concat(id, "/items/item/").concat(itemId), {
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
     * This method updates an added item in the order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * It sends a request
     * to the [Update Item](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsaction_id)
     * API route.
     *
     * @param id - The order edit's ID.
     * @param actionId - The id of the new item's `ITEM_ADD` action.
     * @param body - The data to update.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.updateAddedItem(
     *   "ordch_123",
     *   "orli_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    OrderEdit.prototype.updateAddedItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/order-edits/".concat(id, "/items/").concat(actionId), {
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
     * This method removes an added item in the order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The order edit's ID.
     * @param actionId - The id of the new item's `ITEM_ADD` action.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.removeAddedItem(
     *   "ordch_123",
     *   "orli_123",
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */
    OrderEdit.prototype.removeAddedItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/order-edits/".concat(id, "/items/").concat(actionId), {
                            method: "DELETE",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return OrderEdit;
}());
exports.OrderEdit = OrderEdit;
