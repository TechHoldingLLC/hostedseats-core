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
exports.Campaign = void 0;
var Campaign = /** @class */ (function () {
    /**
     * @ignore
     */
    function Campaign(client) {
        this.client = client;
    }
    /**
     * This method retrieves a campaign by its ID. It sends a request to the
     * [Get Campaign](https://docs.medusajs.com/api/admin#campaigns_getcampaignsid) API route.
     *
     * @param id - The campaign's ID.
     * @param query - Configure the fields to retrieve in the campaign.
     * @param headers - Headers to pass in the request
     * @returns The campaign's details.
     *
     * @example
     * To retrieve a campaign by its ID:
     *
     * ```ts
     * sdk.admin.campaign.retrieve("procamp_123")
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.campaign.retrieve("procamp_123", {
     *   fields: "id,*budget"
     * })
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Campaign.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/campaigns/".concat(id), {
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a paginated list of campaigns. It sends a request to the
     * [List Campaigns](https://docs.medusajs.com/api/admin#campaigns_getcampaigns) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of campaigns.
     *
     * @example
     * To retrieve the list of campaigns:
     *
     * ```ts
     * sdk.admin.campaign.list()
     * .then(({ campaigns, count, limit, offset }) => {
     *   console.log(campaigns)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.campaign.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ campaigns, count, limit, offset }) => {
     *   console.log(campaigns)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each campaign:
     *
     * ```ts
     * sdk.admin.campaign.list({
     *   fields: "id,*budget"
     * })
     * .then(({ campaigns, count, limit, offset }) => {
     *   console.log(campaigns)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    Campaign.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/campaigns", {
                            headers: headers,
                            query: query,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method creates a campaign. It sends a request to the
     * [Create Campaign](https://docs.medusajs.com/api/admin#campaigns_postcampaigns) API route.
     *
     * @param payload - The details of the campaign to create.
     * @param headers - Headers to pass in the request
     * @returns The campaign's details.
     *
     * @example
     * sdk.admin.campaign.create({
     *   name: "Summer Campaign"
     * })
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     */
    Campaign.prototype.create = function (payload, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/campaigns", {
                            method: "POST",
                            headers: headers,
                            body: payload,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates a campaign. It sends a request to the
     * [Update Campaign](https://docs.medusajs.com/api/admin#campaigns_postcampaignsid) API route.
     *
     * @param id - The campaign's ID.
     * @param payload - The data to update in the campaign.
     * @param headers - Headers to pass in the request
     * @returns The campaign's details.
     *
     * @example
     * sdk.admin.campaign.update("procamp_123", {
     *   name: "Summer Campaign"
     * })
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     */
    Campaign.prototype.update = function (id, payload, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/campaigns/".concat(id), {
                            method: "POST",
                            headers: headers,
                            body: payload,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes a campaign by its ID. It sends a request to the
     * [Delete Campaign](https://docs.medusajs.com/api/admin#campaigns_deletecampaignsid) API route.
     *
     * @param id - The campaign's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.campaign.delete("procamp_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Campaign.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/campaigns/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages the promotions of a campaign to either add or remove the association between them.
     * It sends a request to the [Manage Promotions](https://docs.medusajs.com/api/admin#campaigns_postcampaignsidpromotions)
     * API route.
     *
     * @param id - The campaign's ID.
     * @param payload - The promotions to add or remove associations to them.
     * @param headers - Headers to pass in the request
     * @returns The campaign's details.
     *
     * @example
     * sdk.admin.campaign.batchPromotions("procamp_123", {
     *   add: ["prom_123", "prom_456"],
     *   remove: ["prom_789"]
     * })
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     */
    Campaign.prototype.batchPromotions = function (id, payload, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/campaigns/".concat(id, "/promotions"), {
                            method: "POST",
                            headers: headers,
                            body: payload,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Campaign;
}());
exports.Campaign = Campaign;
