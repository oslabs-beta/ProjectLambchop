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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Main = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "main" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Hello!" }, void 0), (0, jsx_runtime_1.jsx)("p", { children: "I hope this  helps you." }, void 0)] }), void 0));
};
exports.default = Main;
//# sourceMappingURL=index.js.map