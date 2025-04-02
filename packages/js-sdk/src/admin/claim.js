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
exports.Claim = void 0;
var Claim = /** @class */ (function () {
    /**
     * @ignore
     */
    function Claim(client) {
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of claims. It sends a request to the
     * [List Claims](https://docs.medusajs.com/api/admin#claims_getclaims) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of claims.
     *
     * @example
     * To retrieve the list of claims:
     *
     * ```ts
     * sdk.admin.claim.list()
     * .then(({ claims, count, limit, offset }) => {
     *   console.log(claims)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.claim.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ claims, count, limit, offset }) => {
     *   console.log(claims)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each claim:
     *
     * ```ts
     * sdk.admin.claim.list({
     *   fields: "id,*additional_items"
     * })
     * .then(({ claims, count, limit, offset }) => {
     *   console.log(claims)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Claim.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims", {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a claim. It sends a request to the
     * [Get Claim](https://docs.medusajs.com/api/admin#claims_getclaimsid) API route.
     *
     * @param id - The claim's ID.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details.
     *
     * @example
     * To retrieve a claim by its ID:
     *
     * ```ts
     * sdk.admin.claim.retrieve("claim_123")
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.claim.retrieve("claim_123", {
     *   fields: "id,*additional_items"
     * })
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Claim.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a claim. It sends a request to the
     * [Create Claim](https://docs.medusajs.com/api/admin#claims_postclaims) API route.
     *
     * @param body - The claim's details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim and order's details.
     *
     * @example
     * sdk.admin.claim.create({
     *   type: "refund",
     *   order_id: "order_123",
     * })
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims", {
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
     * This method cancels a claim. It sends a request to the
     * [Cancel Claim](https://docs.medusajs.com/api/admin#claims_postclaimsidcancel) API route.
     *
     * @param id - The claim's ID.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details.
     *
     * @example
     * sdk.admin.claim.cancel("claim_123")
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.cancel = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/cancel"), {
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
     * This method adds items to the claim. It sends a request to the
     * [Add Items](https://docs.medusajs.com/api/admin#claims_postclaimsidclaimitems) API route.
     *
     * @param id - The ID of the claim to add the items to.
     * @param body - The items' details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addItems("claim_123", {
     *   items: [
     *     {
     *       id: "orli_123",
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.addItems = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/claim-items"), {
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
     * This method updates a claim item by the ID of the item's `WRITE_OFF_ITEM` action. It
     * sends a request to the [Update Claim Item](https://docs.medusajs.com/api/admin#claims_postclaimsidclaimitemsaction_id) API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the order item's `WRITE_OFF_ITEM` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateItem(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   }
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.updateItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/claim-items/").concat(actionId), {
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
     * This method removes a claim item from a claim by the ID of the item's `WRITE_OFF_ITEM` action.
     * It sends a request to the [Remove Claim Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidclaimitemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the order item's `WRITE_OFF_ITEM` action.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.removeItem(
     *   "claim_123",
     *   "ordchact_123",
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.removeItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/claim-items/").concat(actionId), {
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
     * This method adds inbound (or return) items to the claim. These inbound items will have a `RETURN_ITEM` action.
     *
     * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#claims_postclaimsidinbounditems)
     * API route.
     *
     * @param id - The ID of the claim to add the inbound items to.
     * @param body - The inbound items' details.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated with the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addInboundItems(
     *   "claim_123",
     *   {
     *     items: [
     *       {
     *         id: "orli_123",
     *         quantity: 1
     *       }
     *     ]
     *   },
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Claim.prototype.addInboundItems = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/inbound/items"), {
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
     * This method updates an inbound (or return) item of a claim using the ID of the item's `RETURN_ITEM` action.
     * It sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#claims_postclaimsidinbounditemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the return item's `RETURN_ITEM` action.
     * @param body - The details to update in the inbound item.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateInboundItem(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   },
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Claim.prototype.updateInboundItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/inbound/items/").concat(actionId), {
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
     * This method removes an inbound (or return) item from a claim using the ID of the item's `RETURN_ITEM` action.
     * It sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidinbounditemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The ID of the return item's `RETURN_ITEM` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.removeInboundItem(
     *   "claim_123",
     *   "ordchact_123",
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Claim.prototype.removeInboundItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/inbound/items/").concat(actionId), {
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
     * This method adds an inbound (or return) shipping method to a claim.
     * The inbound shipping method will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidinboundshippingmethod)
     * API route.
     *
     * @param id - The claim's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addInboundShipping(
     *   "claim_123",
     *   {
     *     shipping_option_id: "so_123",
     *     custom_amount: 10
     *   },
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Claim.prototype.addInboundShipping = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/inbound/shipping-method"), {
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
     * This method updates a shipping method for returning items in the claim using the ID of the method's `SHIPPING_ADD` action.
     * It sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidinboundshippingmethodaction_id)
     * API route.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details to update in the shipping method
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateInboundShipping(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     custom_amount: 10
     *   },
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.updateInboundShipping = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/inbound/shipping-method/").concat(actionId), {
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
     * This method deletes a shipping method for returning items in the claim using the ID of the method's `SHIPPING_ADD` action.
     * It sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#claims_deleteclaimsidinboundshippingmethodaction_id)
     * API route.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.deleteInboundShipping(
     *   "claim_123",
     *   "ordchact_123",
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */
    Claim.prototype.deleteInboundShipping = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/inbound/shipping-method/").concat(actionId), {
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
     * This method adds outbound (or new) items to a claim. These outbound items will have an `ITEM_ADD` action.
     * It sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#claims_postclaimsidoutbounditems)
     * API route.
     *
     * @param id - The ID of the claim to add the outbound items to.
     * @param body - The items' details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addOutboundItems(
     *   "claim_123",
     *   {
     *     items: [{
     *       id: "orli_123",
     *       quantity: 1
     *     }]
     *   },
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.addOutboundItems = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/outbound/items"), {
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
     * This method updates an outbound (or new) item of a claim using the ID of the item's `ITEM_ADD` action.
     * It sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#claims_postclaimsidoutbounditemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the new claim item's `ITEM_ADD` action.
     * @param body - The item's details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateOutboundItem(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   },
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.updateOutboundItem = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/outbound/items/").concat(actionId), {
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
     * This method removes an outbound (or new) item from a claim using the ID of the item's `ITEM_ADD` action.
     * It sends a request to the [Remove Outbound Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidoutbounditemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the new claim item's `ITEM_ADD` action.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.removeOutboundItem(
     *   "claim_123",
     *   "ordchact_123",
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.removeOutboundItem = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/outbound/items/").concat(actionId), {
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
     * This method adds outbound an outbound shipping method to a claim.
     * The outbound shipping method will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the
     * [Add Outbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidoutboundshippingmethod)
     * API route.
     *
     * @param id - The claim's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     *    * sdk.admin.claim.addOutboundShipping(
     *   "claim_123",
     *   {
     *     shipping_option_id: "so_123",
     *     custom_amount: 10
     *   },
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.addOutboundShipping = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/outbound/shipping-method"), {
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
     * This method updates the shipping method for delivering outbound items in a claim using the ID of the method's `SHIPPING_ADD` action.
     * It sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidoutboundshippingmethodaction_id)
     * API route.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateOutboundShipping(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     custom_amount: 10
     *   },
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.updateOutboundShipping = function (id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/outbound/shipping-method/").concat(actionId), {
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
     * This method deletes the shipping method for delivering outbound items in the claim using the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.deleteOutboundShipping(
     *   "claim_123",
     *   "ordchact_123",
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.deleteOutboundShipping = function (id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/outbound/shipping-method/").concat(actionId), {
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
     * This method confirms a claim request, applying its changes on the associated order.
     * It sends a request to the [Confirm Claim Request](https://docs.medusajs.com/api/admin#claims_postclaimsidrequest)
     * API route.
     *
     * @param id - The claim's ID.
     * @param body - The confirmation details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim and its associated return, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.request(
     *   "claim_123",
     *   {},
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */
    Claim.prototype.request = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/request"), {
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
     * This method cancels a requested claim. It sends a request to the
     * [Cancel Claim Request](https://docs.medusajs.com/api/admin#claims_deleteclaimsidrequest)
     * API route.
     *
     * @param id - The claim's ID.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The cancelation's details.
     *
     * @example
     * sdk.admin.claim.cancelRequest(
     *   "claim_123",
     * )
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Claim.prototype.cancelRequest = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/claims/".concat(id, "/request"), {
                            method: "DELETE",
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Claim;
}());
exports.Claim = Claim;
