"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Upload = void 0;
var Upload = /** @class */ (function () {
    /**
     * @ignore
     */
    function Upload(client) {
        this.client = client;
    }
    /**
     * This method creates a new upload. It sends a request to the
     * [Upload Files](https://docs.medusajs.com/api/admin#uploads_postuploads)
     * API route.
     *
     * @param body - The details of the files to upload.
     * @param query - Configure the fields and relations to retrieve in the uploaded files.
     * @param headers - Headers to pass in the request.
     * @returns The upload files' details.
     *
     * @privateRemarks
     *
     * Note: The creation/upload flow be made more advanced, with support for streaming and progress, but for now we keep it simple
     *
     * @example
     * sdk.admin.upload.create(
     *   {
     *     files: [
     *        // file uploaded as a base64 string
     *       {
     *         name: "test.txt",
     *         content: "test", // Should be the base64 content of the file
     *       },
     *       // file uploaded as a File object
     *       new File(["test"], "test.txt", { type: "text/plain" })
     *     ],
     *   }
     * )
     * .then(({ files }) => {
     *   console.log(files)
     * })
     */
    Upload.prototype.create = function (body, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                form = new FormData();
                if (body instanceof FileList) {
                    Array.from(body).forEach(function (file) {
                        form.append("files", file);
                    });
                }
                else {
                    body.files.forEach(function (file) {
                        form.append("files", "content" in file
                            ? new Blob([file.content], {
                                type: "text/plain",
                            })
                            : file, file.name);
                    });
                }
                return [2 /*return*/, this.client.fetch("/admin/uploads", {
                        method: "POST",
                        headers: __assign(__assign({}, headers), { 
                            // Let the browser determine the content type.
                            "content-type": null }),
                        body: form,
                        query: query,
                    })];
            });
        });
    };
    /**
     * This method retrieves a file's details by its ID. It sends a request to the
     * [Get File](https://docs.medusajs.com/api/admin#uploads_getuploadsid)
     * API route.
     *
     * @param id - The ID of the file to retrieve.
     * @param query - Query parameters to pass in the request.
     * @param headers - Headers to pass in the request.
     * @returns The file's details.
     *
     * @example
     * sdk.admin.upload.retrieve("test.txt")
     * .then(({ file }) => {
     *   console.log(file)
     * })
     */
    Upload.prototype.retrieve = function (id, query, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/uploads/".concat(id), {
                        query: query,
                        headers: headers,
                    })];
            });
        });
    };
    /**
     * This method deletes a file by its ID from the configured File Module Provider. It sends a request to the
     * [Delete File](https://docs.medusajs.com/api/admin#uploads_deleteuploadsid)
     * API route.
     *
     * @param id - The ID of the file to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.upload.delete("test.txt")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    Upload.prototype.delete = function (id, headers) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.fetch("/admin/uploads/".concat(id), {
                        method: "DELETE",
                        headers: headers,
                    })];
            });
        });
    };
    return Upload;
}());
exports.Upload = Upload;
