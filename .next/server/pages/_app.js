(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./src/state/slices/startingPatchReducer.js
var startingPatchReducer = __webpack_require__(814);
// EXTERNAL MODULE: ./src/state/slices/endingPatchReducer.js
var endingPatchReducer = __webpack_require__(364);
// EXTERNAL MODULE: ./src/state/slices/spiralAbyssReducer.js
var spiralAbyssReducer = __webpack_require__(500);
;// CONCATENATED MODULE: ./src/state/slices/bannerReducer.js

const bannerSlice = (0,toolkit_.createSlice)({
    name: "banner",
    initialState: {
        3.3: {
            1: {
                startingDate: new Date(Date.UTC(2022, 11, 7, 6, 0)),
                endingDate: new Date(Date.UTC(2022, 11, 27, 17, 59))
            },
            2: {
                startingDate: new Date(Date.UTC(2022, 11, 27, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 0, 17, 14, 59))
            }
        },
        3.4: {
            1: {
                startingDate: new Date(Date.UTC(2023, 0, 18, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 1, 7, 17, 59))
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 1, 7, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 1, 28, 14, 59))
            }
        },
        3.5: {
            1: {
                startingDate: new Date(Date.UTC(2023, 2, 1, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 2, 21, 17, 59))
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 2, 21, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 3, 11, 14, 59))
            }
        },
        3.6: {
            1: {
                startingDate: new Date(Date.UTC(2023, 3, 12, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 4, 2, 17, 59))
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 4, 2, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 4, 23, 14, 59))
            }
        },
        3.7: {
            1: {
                startingDate: new Date(Date.UTC(2023, 4, 24, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 4, 13, 17, 59))
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 5, 13, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 6, 4, 14, 59))
            }
        },
        3.8: {
            1: {
                startingDate: new Date(Date.UTC(2023, 6, 5, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 6, 25, 17, 59))
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 6, 25, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 7, 15, 14, 59))
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/state/store.js





const store = (0,toolkit_.configureStore)({
    reducer: {
        startingPatch: startingPatchReducer/* default */.ZP,
        endingPatch: endingPatchReducer/* default */.ZP,
        spiralAbyss: spiralAbyssReducer/* default */.ZP
    }
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: ./src/pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [310], () => (__webpack_exec__(99)));
module.exports = __webpack_exports__;

})();