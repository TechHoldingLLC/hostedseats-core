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
exports.InventoryItem = void 0;
var InventoryItem = /** @class */ (function () {
    /**
     * @ignore
     */
    function InventoryItem(client) {
        this.client = client;
    }
    /**
     * This method creates an inventory item. It sends a request to the
     * [Create Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitems)
     * API route.
     *
     * @param body - The inventory item's details.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request.
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.create({
     *   sku: "SHIRT"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */
    InventoryItem.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items", {
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
     * This method updates an inventory level. It sends a request to the
     * [Update Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsid)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param body - The data to update.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request.
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.update("iitem_123", {
     *   sku: "SHIRT"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */
    InventoryItem.prototype.update = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/".concat(id), {
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
     * This method retrieves a paginated list of inventory items. It sends a request to the
     * [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of inventory items.
     *
     * @example
     * To retrieve the list of inventory items:
     *
     * ```ts
     * sdk.admin.inventoryItem.list()
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.inventoryItem.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each inventory item:
     *
     * ```ts
     * sdk.admin.inventoryItem.list({
     *   fields: "id,*location_levels"
     * })
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    InventoryItem.prototype.list = function (query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items", {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves an inventory item by its ID. It sends a request to the
     * [Get Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitemsid) API route.
     *
     * @param id - The inventory item's ID.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * To retrieve an inventory item by its ID:
     *
     * ```ts
     * sdk.admin.inventoryItem.retrieve("iitem_123")
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.inventoryItem.retrieve("iitem_123", {
     *   fields: "id,*location_levels"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    InventoryItem.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/".concat(id), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method deletes an inventory item. This sends a request to the
     * [Delete Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsid)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.inventoryItem.delete("iitem_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    InventoryItem.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/".concat(id), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method retrieves a paginated list of inventory levels that belong to an inventory item.
     * It sends a request to the [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of inventory levels.
     *
     * @example
     * To retrieve the list of inventory levels:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123")
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123", {
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each inventory level:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123", {
     *   fields: "id,*inventory_item"
     * })
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    InventoryItem.prototype.listLevels = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/".concat(id, "/location-levels"), {
                            query: query,
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method updates the inventory level of the specified inventory item and
     * stock location.
     *
     * This method sends a request to the
     * [Update Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelslocation_id)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param locationId - The stock location's ID.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.updateLevel(
     *   "iitem_123",
     *   "sloc_123",
     *   {
     *     stocked_quantity: 10
     *   }
     * )
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */
    InventoryItem.prototype.updateLevel = function (id, locationId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/".concat(id, "/location-levels/").concat(locationId), {
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
     * This method deletes an inventory level associated with an inventory item
     * and a stock location.
     *
     * This method sends a request to the
     * [Remove Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsidlocationlevelslocation_id)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param locationId - The stock location's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.inventoryItem.deleteLevel(
     *   "iitem_123",
     *   "sloc_123",
     * )
     * .then(({ deleted, parent: inventoryItem }) => {
     *   console.log(deleted, inventoryItem)
     * })
     */
    InventoryItem.prototype.deleteLevel = function (id, locationId, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/".concat(id, "/location-levels/").concat(locationId), {
                            method: "DELETE",
                            headers: headers,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method manages the inventory levels of an inventory item. It sends a request to the
     * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
     * API route.
     *
     * @deprecated Use `batchInventoryItemLocationLevels` instead.
     *
     * @param id - The inventory item's ID.
     * @param body - The inventory levels to create or delete.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.batchUpdateLevels("iitem_123", {
     *   create: [{
     *     location_id: "sloc_123",
     *     stocked_quantity: 10
     *   }],
     *   delete: ["ilvl_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */
    InventoryItem.prototype.batchUpdateLevels = function (id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/".concat(id, "/location-levels/batch"), {
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
     * This method manages the inventory levels of an inventory item. It sends a request to the
     * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param body - The inventory levels to create, update or delete, and an optional `force` flag.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.batchInventoryItemLocationLevels("iitem_123", {
     *   create: [{
     *     location_id: "sloc_123",
     *     stocked_quantity: 10
     *   }],
     *   delete: ["ilvl_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */
    InventoryItem.prototype.batchInventoryItemLocationLevels = function (id, body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/".concat(id, "/location-levels/batch"), {
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
     * This method manages the inventory levels of multiple inventory items.
     *
     * @param body - The inventory levels to create, update or delete, and an optional `force` flag.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.batchInventoryItemsLocationLevels({
     *   create: [{
     *     inventory_item_id: "iitem_123",
     *     location_id: "sloc_123",
     *     stocked_quantity: 10
     *   }],
     *   delete: ["ilvl_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */
    InventoryItem.prototype.batchInventoryItemsLocationLevels = function (body, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.fetch("/admin/inventory-items/location-levels/batch", {
                            method: "POST",
                            headers: headers,
                            body: body,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return InventoryItem;
}());
exports.InventoryItem = InventoryItem;
