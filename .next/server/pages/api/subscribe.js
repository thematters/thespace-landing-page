"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "(api)/./src/pages/api/subscribe.js":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { email  } = req.body;\n    if (!email) {\n        return res.status(400).json({\n            error: \"Email is required\"\n        });\n    }\n    try {\n        const LIST_ID = process.env.MAILCHIMP_AUDIENCE_ID;\n        const API_KEY = process.env.MAILCHIMP_API_KEY;\n        const DATACENTER = process.env.MAILCHIMP_API_SERVER;\n        const data = {\n            email_address: email,\n            status: \"subscribed\"\n        };\n        const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {\n            body: JSON.stringify(data),\n            headers: {\n                Authorization: `apikey ${API_KEY}`,\n                \"Content-Type\": \"application/json\"\n            },\n            method: \"POST\"\n        });\n        if (response.status >= 400) {\n            return res.status(400).json({\n                error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`\n            });\n        }\n        return res.status(201).json({\n            error: \"\"\n        });\n    } catch (error) {\n        return res.status(500).json({\n            error: error.message || error.toString()\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsT0FBT0EsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBRTFCLElBQUksQ0FBQ0QsS0FBSyxFQUFFO1FBQ1YsT0FBT0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsbUJBQW1CO1NBQUUsQ0FBQyxDQUFDO0tBQzdEO0lBRUQsSUFBSTtRQUNGLE1BQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHFCQUFxQjtRQUNqRCxNQUFNQyxPQUFPLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxpQkFBaUI7UUFDN0MsTUFBTUMsVUFBVSxHQUFHTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBRW5ELE1BQU1DLElBQUksR0FBRztZQUNYQyxhQUFhLEVBQUVkLEtBQUs7WUFDcEJFLE1BQU0sRUFBRSxZQUFZO1NBQ3JCO1FBRUQsTUFBTWEsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDMUIsQ0FBQyxRQUFRLEVBQUVMLFVBQVUsQ0FBQyw2QkFBNkIsRUFBRU4sT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUN0RTtZQUNFSixJQUFJLEVBQUVnQixJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsSUFBSSxDQUFDO1lBQzFCTSxPQUFPLEVBQUU7Z0JBQ1BDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRVgsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRFksTUFBTSxFQUFFLE1BQU07U0FDZixDQUNGO1FBRUQsSUFBSU4sUUFBUSxDQUFDYixNQUFNLElBQUksR0FBRyxFQUFFO1lBQzFCLE9BQU9ILEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQzFCQyxLQUFLLEVBQUUsQ0FBQyxtSEFBbUgsQ0FBQzthQUM3SCxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU9MLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLEVBQUU7U0FBRSxDQUFDLENBQUM7S0FDNUMsQ0FBQyxPQUFPQSxLQUFLLEVBQUU7UUFDZCxPQUFPTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRUEsS0FBSyxDQUFDa0IsT0FBTyxJQUFJbEIsS0FBSyxDQUFDbUIsUUFBUSxFQUFFO1NBQUUsQ0FBQyxDQUFDO0tBQzNFO0NBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZXNwYWNlLy4vc3JjL3BhZ2VzL2FwaS9zdWJzY3JpYmUuanM/MTUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHk7XG5cbiAgaWYgKCFlbWFpbCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBMSVNUX0lEID0gcHJvY2Vzcy5lbnYuTUFJTENISU1QX0FVRElFTkNFX0lEO1xuICAgIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5NQUlMQ0hJTVBfQVBJX0tFWTtcbiAgICBjb25zdCBEQVRBQ0VOVEVSID0gcHJvY2Vzcy5lbnYuTUFJTENISU1QX0FQSV9TRVJWRVI7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW1haWxfYWRkcmVzczogZW1haWwsXG4gICAgICBzdGF0dXM6ICdzdWJzY3JpYmVkJ1xuICAgIH07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vJHtEQVRBQ0VOVEVSfS5hcGkubWFpbGNoaW1wLmNvbS8zLjAvbGlzdHMvJHtMSVNUX0lEfS9tZW1iZXJzYCxcbiAgICAgIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgYXBpa2V5ICR7QVBJX0tFWX1gLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgIGVycm9yOiBgVGhlcmUgd2FzIGFuIGVycm9yIHN1YnNjcmliaW5nIHRvIHRoZSBuZXdzbGV0dGVyLiBTaG9vdCBtZSBhbiBlbWFpbCBhdCBbbWVAbGVlcm9iLmlvXSBhbmQgSSdsbCBhZGQgeW91IHRvIHRoZSBsaXN0LmBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7IGVycm9yOiAnJyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBlcnJvci50b1N0cmluZygpIH0pO1xuICB9XG59OyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJlbWFpbCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJMSVNUX0lEIiwicHJvY2VzcyIsImVudiIsIk1BSUxDSElNUF9BVURJRU5DRV9JRCIsIkFQSV9LRVkiLCJNQUlMQ0hJTVBfQVBJX0tFWSIsIkRBVEFDRU5URVIiLCJNQUlMQ0hJTVBfQVBJX1NFUlZFUiIsImRhdGEiLCJlbWFpbF9hZGRyZXNzIiwicmVzcG9uc2UiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIm1ldGhvZCIsIm1lc3NhZ2UiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.js"));
module.exports = __webpack_exports__;

})();