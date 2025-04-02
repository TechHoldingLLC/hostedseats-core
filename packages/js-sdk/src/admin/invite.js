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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invite = void 0;
var Invite = /** @class */ (function () {
    /**
     * @ignore
     */
    function Invite(client) {
        this.client = client;
    }
    /**
     * This method accepts an invite. It requires sending a previous request to
     * the {@link Auth.register}.
     *
     * This method sends a request to the [Accept Invite]
     * (https://docs.medusajs.com/api/admin#invites_postinvitesaccept)
     * API route.
     *
     * @param input - The details of the user to create.
     * @param query - Configure the fields to retrieve in the user.
     * @param headers - Headers to pass in the request
     * @returns The user's details.
     *
     * @example
     * const token = await sdk.auth.register("user", "emailpass", {
     *   email: "user@gmail.com",
     *   password: "supersecret"
     * })
     *
     * sdk.admin.invite.accept(
     *   {
     *     email: "user@gmail.com",
     *     first_name: "John",
     *     last_name: "Smith",
     *     invite_token: "12345..."
     *   },
     *   {
     *     Authorization: `Bearer ${token}`
     *   }
     * )
     * .then(({ user }) => {
     *   console.log(user)
     * })
     */
    Invite.prototype.accept = function (input, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            var invite_token, rest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invite_token = input.invite_token, rest = __rest(input, ["invite_token"]);
                        return [4 /*yield*/, this.client.fetch("/admin/invites/accept?token=".concat(input.invite_token), {
                                method: "POST",
                                headers: headers,
                                body: rest,
                                query: query,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates an invite. It sends a request to the
     * [Create Invite](https://docs.medusajs.com/api/admin#invites_postinvites)
     * API route.
     *
     * @param body - The invite's details.
     * @param query - Configure the fields to retrieve in the invite.
     * @param headers - Headers to pass in the request
     * @returns The invite's details.
     *
     * @example
     * sdk.admin.invite.create({
     *   email: "user@gmail.com",
     * })
     * .then(({ invite }) => {
     *   console.log(invite)
     * })
     */
    Invite.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/invites", {
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
     * This method retrieves an invite by its ID. It sends a request to the
     * [Get Invite](https://docs.medusajs.com/api/admin#invites_getinvitesid)
     * API route.
     *
     * @param id - The invite's ID.
     * @param query - Configure the fields to retrieve in the invite.
     * @param headers - Headers to pass in the request
     * @returns The invite's details.
     *
     * @example
     * To retrieve an invite its ID:
     *
     * ```ts
     * sdk.admin.invite.retrieve("invite_123")
     * .then(({ invite }) => {
     *   console.log(invite)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.invite.retrieve("invite_123", {
     *   fields: "id,email"
     * })
     * .then(({ invite }) => {
     *   console.log(invite)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Invite.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/invites/".concat(id), {
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a paginated list of invites. It sends a request to the
     * [List Invites](https://docs.medusajs.com/api/admin#invites_getinvites)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of invites.
     *
     * @example
     * To retrieve the list of invites:
     *
     * ```ts
     * sdk.admin.invite.list()
     * .then(({ invites, count, limit, offset }) => {
     *   console.log(invites)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.invite.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ invites, count, limit, offset }) => {
     *   console.log(invites)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each invite:
     *
     * ```ts
     * sdk.admin.invite.list({
     *   fields: "id,email"
     * })
     * .then(({ invites, count, limit, offset }) => {
     *   console.log(invites)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Invite.prototype.list = function (queryParams, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/invites", {
                            headers: headers,
                            query: queryParams,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method refreshes the token of an invite. It sends a request to the
     * [Refresh Invite Token](https://docs.medusajs.com/api/admin#invites_postinvitesidresend)
     * API route.
     *
     * @param id - The invite's ID.
     * @param headers - Headers to pass in the request.
     * @returns The invite's details.
     *
     * @example
     * sdk.admin.invite.resend("invite_123")
     * .then(({ invite }) => {
     *   console.log(invite)
     * })
     */
    Invite.prototype.resend = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/invites/".concat(id, "/resend"), {
                            method: "POST",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes an invite. It sends a request to the
     * [Delete Invite](https://docs.medusajs.com/api/admin#invites_deleteinvitesid)
     * API route.
     *
     * @param id - The invite's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.invite.delete("invite_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Invite.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/invites/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Invite;
}());
exports.Invite = Invite;
