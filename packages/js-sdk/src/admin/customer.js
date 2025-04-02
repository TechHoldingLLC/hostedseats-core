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
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    /**
     * @ignore
     */
    function Customer(client) {
        this.client = client;
    }
    /**
     * This method creates a customer. It sends a request to the
     * [Create Customer](https://docs.medusajs.com/api/admin#customers_postcustomers) API route.
     *
     * @param body - The customer's details.
     * @param query - Configure the fields to retrieve in the customer.
     * @param headers - Headers to pass in the request.
     * @returns The customer's details.
     *
     * @example
     * sdk.admin.customer.create({
     *   email: "customer@gmail.com"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */
    Customer.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/customers", {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method updates a customer's details. It sends a request to the
     * [Update Customer](https://docs.medusajs.com/api/admin#customers_postcustomersid) API route.
     *
     * @param id - The customer's ID.
     * @param body - The details to update of the customer.
     * @param query - Configure the fields to retrieve in the customer.
     * @param headers - Headers to pass in the request.
     * @returns The customer's details.
     *
     * @example
     * sdk.admin.customer.update("cus_123", {
     *   first_name: "John"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */
    Customer.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/customers/".concat(id), {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method retrieves a paginated list of customers. It sends a request to the
     * [List Customers](https://docs.medusajs.com/api/admin#customers_getcustomers)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of customers.
     *
     * @example
     * To retrieve the list of customers:
     *
     * ```ts
     * sdk.admin.customer.list()
     * .then(({ customers, count, limit, offset }) => {
     *   console.log(customers)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.customer.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ customers, count, limit, offset }) => {
     *   console.log(customers)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each customer:
     *
     * ```ts
     * sdk.admin.customer.list({
     *   fields: "id,*groups"
     * })
     * .then(({ customers, count, limit, offset }) => {
     *   console.log(customers)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Customer.prototype.list = function (queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/customers", {
                        headers: headers,
                        query: queryParams,
                    })];
            });
        });
    };
    /**
     * This method retrieves a customer by its ID. It sends a request to the
     * [Get Customer](https://docs.medusajs.com/api/admin#customers_getcustomersid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param query - Configure the fields to retrieve in the customer.
     * @param headers - Headers to pass in the request.
     * @returns The customer's details.
     *
     * @example
     * To retrieve a customer by its ID:
     *
     * ```ts
     * sdk.admin.customer.retrieve("cus_123")
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.customer.retrieve("cus_123", {
     *   fields: "id,*groups"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Customer.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/customers/".concat(id), {
                        query: query,
                        headers: headers,
                    })];
            });
        });
    };
    /**
     * This method deletes a customer by its ID. It sends a request to the
     * [Delete Customer](https://docs.medusajs.com/api/admin#customers_deletecustomersid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.customer.delete("cus_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Customer.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/customers/".concat(id), {
                        method: "DELETE",
                        headers: headers,
                    })];
            });
        });
    };
    /**
     * This method manages customer groups for a customer.
     * It sends a request to the [Manage Customers](https://docs.medusajs.com/api/admin#customers_postcustomersidcustomergroups)
     * API route.
     *
     * @param id - The customer's ID.
     * @param body - The groups to add customer to or remove customer from.
     * @param headers - Headers to pass in the request
     * @returns The customers details.
     *
     * @example
     * sdk.admin.customer.batchCustomerGroups("cus_123", {
     *   add: ["cusgroup_123"],
     *   remove: ["cusgroup_321"]
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */
    Customer.prototype.batchCustomerGroups = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customers/".concat(id, "/customer-groups"), {
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
     * This method creates a customer address. It sends a request to the
     * [Create Customer Address](https://docs.medusajs.com/api/admin#customers_postcustomersidaddresses)
     * API route.
     *
     * @param id - The customer's ID.
     * @param body - The customer address's details.
     * @param headers - Headers to pass in the request.
     * @returns The customer address's details.
     *
     * @example
     * sdk.admin.customer.createAddress("cus_123", {
     *   address_1: "123 Main St",
     *   city: "Anytown",
     *   country_code: "US",
     *   postal_code: "12345"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */
    Customer.prototype.createAddress = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customers/".concat(id, "/addresses"), {
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
     * This method updates a customer address. It sends a request to the
     * [Update Customer Address](https://docs.medusajs.com/api/admin#customers_postcustomersidaddressesaddressid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param addressId - The customer address's ID.
     * @param body - The customer address's details.
     * @param headers - Headers to pass in the request.
     * @returns The customer address's details.
     *
     * @example
     * sdk.admin.customer.updateAddress("cus_123", "cus_addr_123", {
     *   address_1: "123 Main St",
     *   city: "Anytown",
     *   country_code: "US",
     *   postal_code: "12345"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */
    Customer.prototype.updateAddress = function (id, addressId, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customers/".concat(id, "/addresses/").concat(addressId), {
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
     * This method deletes a customer address. It sends a request to the
     * [Delete Customer Address](https://docs.medusajs.com/api/admin#customers_deletecustomersidaddressesaddressid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param addressId - The customer address's ID.
     * @param headers - Headers to pass in the request.
     * @returns The customer address's details.
     *
     * @example
     * sdk.admin.customer.deleteAddress("cus_123", "cus_addr_123")
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */
    Customer.prototype.deleteAddress = function (id, addressId, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customers/".concat(id, "/addresses/").concat(addressId), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a customer address by its ID. It sends a request to the
     * [Get Customer Address](https://docs.medusajs.com/api/admin#customers_getcustomersidaddressesaddressid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param addressId - The customer address's ID.
     * @param headers - Headers to pass in the request.
     * @returns The customer address's details.
     *
     * @example
     * sdk.admin.customer.retrieveAddress("cus_123", "cus_addr_123")
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */
    Customer.prototype.retrieveAddress = function (id, addressId, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customers/".concat(id, "/addresses/").concat(addressId), {
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a list of customer addresses. It sends a request to the
     * [List Customer Addresses](https://docs.medusajs.com/api/admin#customers_getcustomersidaddresses)
     * API route.
     *
     * @param id - The customer's ID.
     * @param headers - Headers to pass in the request.
     * @returns The list of customer addresses.
     *
     * @example
     * sdk.admin.customer.listAddresses("cus_123")
     * .then(({ addresses }) => {
     *   console.log(addresses)
     * })
     */
    Customer.prototype.listAddresses = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/customers/".concat(id, "/addresses"), {
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Customer;
}());
exports.Customer = Customer;
