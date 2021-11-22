"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
// Components
var App_1 = __importDefault(require("./components/App"));
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root
// node in the body element before rendering into it
var root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
// Now we can render our application into it
(0, react_dom_1.render)((0, jsx_runtime_1.jsx)(App_1.default, {}, void 0), document.getElementById('root'));
//# sourceMappingURL=index.js.map