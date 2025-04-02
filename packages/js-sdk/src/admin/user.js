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
exports.User = void 0;
var User = /** @class */ (function () {
    /**
     * @ignore
     */
    function User(client) {
        this.client = client;
    }
    /**
     * This method updates a user. It sends a request to the
     * [Update User](https://docs.medusajs.com/api/admin#users_postusersid)
     * API route.
     *
     * @param id - The ID of the user to update.
     * @param body - The details of the user to update.
     * @param query - Configure the fields and relations to retrieve in the tax region.
     * @param headers - Headers to pass in the request.
     * @returns The user's details.
     *
     * @example
     * sdk.admin.user.update("user_123", {
     *   first_name: "John",
     *   last_name: "Doe",
     * })
     * .then(({ user }) => {
     *   console.log(user)
     * })
     */
    User.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/users/".concat(id), {
                        method: "POST",
                        headers: headers,
                        body: body,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method retrieves a list of users. It sends a request to the
     * [List Users](https://docs.medusajs.com/api/admin#users_getusers)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of users.
     *
     * @example
     * To retrieve the list of users:
     *
     * ```ts
     * sdk.admin.user.list()
     * .then(({ users, count, limit, offset }) => {
     *   console.log(users)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.user.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ users, count, limit, offset }) => {
     *   console.log(users)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each user:
     *
     * ```ts
     * sdk.admin.user.list({
     *   fields: "id,email"
     * })
     * .then(({ users, count, limit, offset }) => {
     *   console.log(users)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    User.prototype.list = function (queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/users", {
                        headers: headers,
                        query: queryParams,
                    })];
            });
        });
    };
    /**
     * This method retrieves a user. It sends a request to the
     * [Get User](https://docs.medusajs.com/api/admin#users_getusersid)
     * API route.
     *
     * @param id - The ID of the user to retrieve.
     * @param query - Configure the fields and relations to retrieve in the user.
     * @param headers - Headers to pass in the request.
     * @returns The user's details.
     *
     * @example
     * To retrieve a user by its ID:
     *
     * ```ts
     * sdk.admin.user.retrieve("user_123")
     * .then(({ user }) => {
     *   console.log(user)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.user.retrieve("user_123", {
     *   fields: "id,email"
     * })
     * .then(({ user }) => {
     *   console.log(user)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    User.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/users/".concat(id), {
                        query: query,
                        headers: headers,
                    })];
            });
        });
    };
    /**
     * This method deletes a user. It sends a request to the
     * [Delete User](https://docs.medusajs.com/api/admin#users_deleteusersid)
     * API route.
     *
     * @param id - The ID of the user to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.user.delete("user_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    User.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/users/".concat(id), {
                        method: "DELETE",
                        headers: headers,
                    })];
            });
        });
    };
    /**
     * This method retrieves the currently authenticated user. It sends a request to the
     * [Get Logged-In User](https://docs.medusajs.com/api/admin#users_getusersme)
     * API route.
     *
     * @param query - Configure the fields and relations to retrieve in the user.
     * @param headers - Headers to pass in the request.
     * @returns The user's details.
     *
     * @example
     * To retrieve the currently authenticated user:
     *
     * ```ts
     * sdk.admin.user.me()
     * .then(({ user }) => {
     *   console.log(user)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.user.me({
     *   fields: "id,email"
     * })
     * .then(({ user }) => {
     *   console.log(user)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */
    User.prototype.me = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/users/me", {
                        query: query,
                        headers: headers,
                    })];
            });
        });
    };
    return User;
}());
exports.User = User;
