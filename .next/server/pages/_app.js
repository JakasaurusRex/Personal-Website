"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./styles/theme.js
// Importing the chakra ui stuff



const breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
    sm: "40em",
    md: "52em",
    lg: "64em",
    lg: "62em"
});
//Array holding all of the theme items we are overriding
const overrides = {
    ...react_.theme,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 400,
        bold: 700
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px"
    }
};
const customTheme = (0,react_.extendTheme)(overrides);
/* harmony default export */ const theme = (customTheme);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        resetCSS: true,
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(962));
module.exports = __webpack_exports__;

})();