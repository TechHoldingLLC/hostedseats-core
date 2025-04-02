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
exports.DraftOrder = void 0;
var DraftOrder = /** @class */ (function () {
    /**
     * @ignore
     */
    function DraftOrder(client) {
        this.client = client;
    }
    /**
     * This method retrieves a draft order by its ID. It sends a request to the
     * [Get Draft Order](https://docs.medusajs.com/api/admin#draft-orders_getdraftordersid)
     * API route.
     *
     * @param id - The draft order's ID.
     * @param query - Configure the fields to retrieve in the draft order.
     * @param headers - Headers to pass in the request
     * @returns The draft order's details.
     *
     * @example
     * To retrieve a draft order by its ID:
     *
     * ```ts
     * sdk.admin.draftOrder.retrieve("draft_order_123")
     * .then(({ draft_order }) => {
     *   console.log(draft_order)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.draftOrder.retrieve("draft_order_123", {
     *   fields: "id,*items"
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    DraftOrder.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/draft-orders/".concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a paginated list of draft orders. It sends a request to the
     * [List Draft Orders](https://docs.medusajs.com/api/admin#draft-orders_getdraftorders) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of draft orders.
     *
     * @example
     * To retrieve the list of draft orders:
     *
     * ```ts
     * sdk.admin.draftOrder.list()
     * .then(({ draft_orders, count, limit, offset }) => {
     *   console.log(draft_orders)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.draftOrder.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ draft_orders, count, limit, offset }) => {
     *   console.log(draft_orders)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each draft order:
     *
     * ```ts
     * sdk.admin.draftOrder.list({
     *   fields: "id,*items"
     * })
     * .then(({ draft_orders, count, limit, offset }) => {
     *   console.log(draft_orders)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    DraftOrder.prototype.list = function (queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/draft-orders", {
                            query: queryParams,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a draft order. It sends a request to the
     * [Create Draft Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftorders) API route.
     *
     * @param body - The data to create the draft order.
     * @param query - Configure the fields to retrieve in the draft order.
     * @param headers - Headers to pass in the request.
     *
     * @example
     * To create a draft order:
     *
     * ```ts
     * sdk.admin.draftOrder.create({
     *   email: "test@test.com",
     *   items: [
     *     {
     *       variant_id: "variant_123",
     *       quantity: 1,
     *     },
     *   ],
     *   region_id: "region_123",
     *   sales_channel_id: "sales_channel_123",
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order)
     * })
     * ```
     */
    DraftOrder.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/draft-orders", {
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
     * This method updates a draft order. It sends a request to the
     * [Update Draft Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersid) API route.
     *
     * @param id - The draft order's ID.
     * @param body - The data to update the draft order.
     * @param query - Configure the fields to retrieve in the draft order.
     * @param headers - Headers to pass in the request.
     *
     * @example
     * To update a draft order:
     *
     * ```ts
     * sdk.admin.draftOrder.update("draft_order_123", {
     *   email: "test@test.com",
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order)
     * })
     * ```
     */
    DraftOrder.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/draft-orders/".concat(id), {
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
    return DraftOrder;
}());
exports.DraftOrder = DraftOrder;
