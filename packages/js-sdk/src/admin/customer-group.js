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
exports.CustomerGroup = void 0;
var CustomerGroup = /** @class */ (function () {
    /**
     * @ignore
     */
    function CustomerGroup(client) {
        this.client = client;
    }
    /**
     * This method retrieves a customer group by its ID. It sends a request to the
     * [Get Customer Group](https://docs.medusajs.com/api/admin#customer-groups_getcustomergroupsid) API route.
     *
     * @param id - The customer group's ID.
     * @param query - Configure the fields to retrieve in the customer group.
     * @param headers - Headers to pass in the request
     * @returns The group's details.
     *
     * @example
     * To retrieve a customer group by its ID:
     *
     * ```ts
     * sdk.admin.customerGroup.retrieve("cusgroup_123")
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.customerGroup.retrieve("cusgroup_123", {
     *   fields: "id,*customer"
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    CustomerGroup.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customer-groups/".concat(id), {
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
     * This method retrieves a paginated list of customer groups. It sends a request to the
     * [List Customer Groups](https://docs.medusajs.com/api/admin#customer-groups_getcustomergroups)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of customer groups.
     *
     * @example
     * To retrieve the list of customer groups:
     *
     * ```ts
     * sdk.admin.customerGroup.list()
     * .then(({ customer_groups, count, limit, offset }) => {
     *   console.log(customer_groups)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.customerGroup.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ customer_groups, count, limit, offset }) => {
     *   console.log(customer_groups)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each customer group:
     *
     * ```ts
     * sdk.admin.customerGroup.list({
     *   fields: "id,*customer"
     * })
     * .then(({ customer_groups, count, limit, offset }) => {
     *   console.log(customer_groups)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    CustomerGroup.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customer-groups", {
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
     * This method creates a customer group. It sends a request to the
     * [Create Customer Group](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroups)
     * API route.
     *
     * @param body - The customer group's details.
     * @param query - Configure the fields to retrieve in the customer group.
     * @param headers - Headers to pass in the request.
     * @returns The customer group's details.
     *
     * @example
     * sdk.admin.customerGroup.create({
     *   name: "VIP"
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     */
    CustomerGroup.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customer-groups", {
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
     * This method updates a customer group's details. It sends a request to the
     * [Update Customer](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroupsid)
     * API route.
     *
     * @param id - The customer group's ID.
     * @param body - The details to update in the group.
     * @param query - Configure the fields to retrieve in the customer group.
     * @param headers - Headers to pass in the request.
     * @returns The customer group's details.
     *
     * @example
     * sdk.admin.customerGroup.update("cusgroup_123", {
     *   name: "VIP"
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     */
    CustomerGroup.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customer-groups/".concat(id), {
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
     * This method deletes a customer group. This method sends a request to the
     * [Delete Customer Group](https://docs.medusajs.com/api/admin#customer-groups_deletecustomergroupsid)
     * API route.
     *
     * @param id - The customer group's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.customerGroup.delete("cusgroup_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    CustomerGroup.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customer-groups/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages customers of a group to add or remove them from the group.
     * It sends a request to the [Manage Customers](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroupsidcustomers)
     * API route.
     *
     * @param id - The group's ID.
     * @param body - The customers to add or remove from the group.
     * @param headers - Headers to pass in the request
     * @returns The customer group's details.
     *
     * @example
     * sdk.admin.customerGroup.batchCustomers("cusgroup_123", {
     *   add: ["cus_123"],
     *   remove: ["cus_321"]
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     */
    CustomerGroup.prototype.batchCustomers = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customer-groups/".concat(id, "/customers"), {
                            method: "POST",
                            headers: headers,
                            body: body,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CustomerGroup;
}());
exports.CustomerGroup = CustomerGroup;
