"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 54:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Banner)
/* harmony export */ });
class Banner {
    constructor(){
        this.bannerDuration = {
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
        };
    }
    getDate = (patch, half, timestamp)=>{
        return this.bannerDuration[patch][half][timestamp];
    };
} //patch = "3.5", half = "1", timestamp = "startingDate"


/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kF": () => (/* binding */ SetEndingPatch),
/* harmony export */   "ne": () => (/* binding */ SetEndOfPatch),
/* harmony export */   "oJ": () => (/* binding */ SetEndingHalf)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_bannerDuration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);


const bannerDuration = new _functions_bannerDuration_js__WEBPACK_IMPORTED_MODULE_1__/* .Banner */ .j();
const endingPatchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "endingPatch",
    initialState: {
        patch: 3.4,
        half: 2,
        endOfPatch: false,
        timestamp: {
            day: 7,
            month: 1,
            year: 2023,
            hour: 18,
            minute: 0
        }
    },
    reducers: {
        SetEndingPatch: (state = initialState, action)=>{
            const date = new Date(bannerDuration.getDate(action.payload, state.half, state.endOfPatch == false ? "startingDate" : "endingDate"));
            return {
                ...state,
                patch: action.payload,
                timestamp: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minute: date.getMinutes()
                }
            };
        },
        SetEndingHalf: (state = initialState, action)=>{
            const date = new Date(bannerDuration.getDate(state.patch, action.payload, state.endOfPatch == false ? "startingDate" : "endingDate"));
            return {
                ...state,
                half: action.payload,
                timestamp: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minute: date.getMinutes()
                }
            };
        },
        SetEndOfPatch: (state, action)=>{
            const date = new Date(bannerDuration.getDate(state.patch, state.half, action.payload == false ? "startingDate" : "endingDate"));
            return {
                ...state,
                endOfPatch: action.payload,
                timestamp: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minute: date.getMinutes()
                }
            };
        }
    }
});
const { SetEndingPatch  } = endingPatchSlice.actions;
const { SetEndingHalf  } = endingPatchSlice.actions;
const { SetEndOfPatch  } = endingPatchSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endingPatchSlice.reducer);


/***/ }),

/***/ 500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RQ": () => (/* binding */ SetFloorEleven),
/* harmony export */   "Wg": () => (/* binding */ SetFloorNine),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "iS": () => (/* binding */ SetFloorTen),
/* harmony export */   "od": () => (/* binding */ SetFloorTwelve)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const spiralAbyssSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "spiralAbyss",
    initialState: {
        totalStars: 0,
        nine: 0,
        ten: 0,
        eleven: 0,
        twelve: 0
    },
    reducers: {
        SetFloorNine: (state, action)=>{
            return {
                ...state,
                nine: action.payload,
                totalStars: action.payload + state.ten + state.eleven + state.twelve
            };
        },
        SetFloorTen: (state, action)=>{
            return {
                ...state,
                ten: action.payload,
                totalStars: state.nine + action.payload + state.eleven + state.twelve
            };
        },
        SetFloorEleven: (state, action)=>{
            return {
                ...state,
                eleven: action.payload,
                totalStars: state.nine + state.ten + action.payload + state.twelve
            };
        },
        SetFloorTwelve: (state, action)=>{
            return {
                ...state,
                twelve: action.payload,
                totalStars: state.nine + state.ten + state.eleven + action.payload
            };
        }
    }
});
const { SetFloorNine  } = spiralAbyssSlice.actions;
const { SetFloorTen  } = spiralAbyssSlice.actions;
const { SetFloorEleven  } = spiralAbyssSlice.actions;
const { SetFloorTwelve  } = spiralAbyssSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spiralAbyssSlice.reducer);


/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y4": () => (/* binding */ SetStartingHalf),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ay": () => (/* binding */ SetStartingDate),
/* harmony export */   "k6": () => (/* binding */ revertToNotToday),
/* harmony export */   "rd": () => (/* binding */ SetStartingPatch)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_bannerDuration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);



const bannerDuration = new _functions_bannerDuration_js__WEBPACK_IMPORTED_MODULE_2__/* .Banner */ .j();
const startingPatchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "startingPatch",
    initialState: {
        patch: 3.3,
        half: 1,
        timestamp: {
            day: 7,
            month: 11,
            year: 2022,
            hour: 6,
            minute: 0
        }
    },
    reducers: {
        SetStartingPatch: (state = initialState, action)=>{
            const date = new Date(bannerDuration.getDate(action.payload, state.half, "startingDate"));
            return {
                ...state,
                patch: action.payload,
                timestamp: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minute: date.getMinutes()
                }
            };
        },
        SetStartingHalf: (state, action)=>{
            const date = new Date(bannerDuration.getDate(state.patch, action.payload, "startingDate"));
            return {
                ...state,
                half: action.payload,
                timestamp: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minute: date.getMinutes()
                }
            };
        },
        revertToNotToday: (state)=>{
            const totalDays = (state.patch * 10 - 33) * 42 + (state.half - 1) * 21;
            const date = new Date(2022, 11, 7 + totalDays);
            return {
                ...state
            };
        }
    }
});
const { SetStartingPatch  } = startingPatchSlice.actions;
const { SetStartingHalf  } = startingPatchSlice.actions;
const { SetStartingDate  } = startingPatchSlice.actions;
const { revertToNotToday  } = startingPatchSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startingPatchSlice.reducer);


/***/ })

};
;