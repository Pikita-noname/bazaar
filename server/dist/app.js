"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 1234;
app.get("/", function (request, response) {
    response.send("by NDK");
});
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
