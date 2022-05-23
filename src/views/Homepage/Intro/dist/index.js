"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var intro_illu_svg_1 = require("../../../../public/img/intro-illu.svg");
var intro_divider_svg_1 = require("../../../../public/img/intro-divider.svg");
var styles_module_sass_1 = require("./styles.module.sass");
var Intro = function () {
    return (React.createElement("section", { className: styles_module_sass_1["default"].intro },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12 p-0" },
                    React.createElement("div", { className: styles_module_sass_1["default"].illu },
                        React.createElement("figure", { className: "text-end" },
                            React.createElement(image_1["default"], { className: "img-fluid", src: intro_illu_svg_1["default"], alt: "Intro Illustration" })))),
                React.createElement("div", { className: "col-md-5" },
                    React.createElement("div", { className: styles_module_sass_1["default"].divider },
                        React.createElement("figure", null,
                            React.createElement(image_1["default"], { className: "img-fluid", src: intro_divider_svg_1["default"], alt: "Intro Divider" }))),
                    React.createElement("div", { className: styles_module_sass_1["default"].title },
                        React.createElement("h1", { className: styles_module_sass_1["default"].bar },
                            "The Space: ",
                            React.createElement("br", null),
                            "World\u2019s First NFT Pixel Art Game Governed by Radical Markets")),
                    React.createElement("div", { className: styles_module_sass_1["default"].text },
                        React.createElement("p", null, "Inspired by r/place, The Space is the world\u2019s NFT pixel art graffiti wall where players can own, color, and trade pixels under Harberger Tax and Universal Basic Income (UBI). Pixels are minted as ERC-721 tokens, $SPACE, and are fractional NFTs under common ownership.")))),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-8" },
                    React.createElement("div", { className: styles_module_sass_1["default"].buttons + " buttons" },
                        React.createElement("a", { className: "btn fill", href: "https://discord.gg/thespace", target: "_blank", rel: "noreferrer" }, "Join Discord"))),
                React.createElement("div", { className: "col-md-4 position-relative" },
                    React.createElement("div", { className: styles_module_sass_1["default"].tips },
                        React.createElement("span", { className: styles_module_sass_1["default"].icon })))))));
};
exports["default"] = Intro;
