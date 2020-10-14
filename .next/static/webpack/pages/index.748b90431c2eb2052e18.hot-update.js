webpackHotUpdate_N_E("pages/index",{

/***/ "./components/InfoBox.js":
/*!*******************************!*\
  !*** ./components/InfoBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InfoBox.module.css */ "./components/InfoBox.module.css");
/* harmony import */ var _InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "D:\\Lambda\\Next\\BITZPRICE\\components\\InfoBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var InfoBox = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(InfoBox, _React$Component);

  var _super = _createSuper(InfoBox);

  function InfoBox(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InfoBox);

    _this = _super.call(this, props);
    _this.state = {
      currentPrice: null,
      monthChangeD: null,
      monthChangeP: null,
      updatedAt: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InfoBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getData = function () {
        var data = _this2.props.data;
        var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        fetch(url).then(function (r) {
          return r.json();
        }).then(function (bitcoinData) {
          var price = bitcoinData.bpi.USD.rate_float;
          var change = price - data[0].y;
          var changeP = (price - data[0].y) / data[0].y * 100;

          _this2.setState({
            currentPrice: bitcoinData.bpi.USD.rate_float,
            monthChangeD: change.toLocaleString('us-EN', {
              style: 'currency',
              currency: 'USD'
            }),
            monthChangeP: changeP.toFixed(2) + '%',
            updatedAt: bitcoinData.time.updated
          });
        })["catch"](function (e) {
          console.log(e);
        });
      };

      this.getData();
      this.refresh = setInterval(function () {
        return _this2.getData();
      }, 90000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.refresh);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "data-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }, this.state.currentPrice ? __jsx("div", {
        id: "left",
        className: "box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }, this.state.currentPrice.toLocaleString('us-EN', {
        style: 'currency',
        currency: 'USD'
      })), __jsx("div", {
        className: "subtext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }
      }, 'Updated ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(this.state.updatedAt).fromNow())) : null, this.state.currentPrice ? __jsx("div", {
        id: "middle",
        className: "box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, this.state.monthChangeD), __jsx("div", {
        className: "subtext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      }, "Change Since Last Month (USD)")) : null, __jsx("div", {
        id: "right",
        className: "box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, this.state.monthChangeP), __jsx("div", {
        className: "subtext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, "Change Since Last Month (%)")));
    }
  }]);

  return InfoBox;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (InfoBox);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/InfoBox.module.css":
/*!***************************************!*\
  !*** ./components/InfoBox.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./InfoBox.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/InfoBox.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./InfoBox.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/InfoBox.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./InfoBox.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/InfoBox.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/InfoBox.module.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/InfoBox.module.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#InfoBox_data-container__1rdmV {\r\n    width: 100%;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n  .InfoBox_box__rHG2w {\r\n    width: 250px;\r\n  \r\n    display: -webkit-flex;\r\n  \r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  .InfoBox_heading__1vRkn {\r\n    font-size: 2.5em;\r\n    color: #2196F3;\r\n  }\r\n  \r\n  .InfoBox_subtext__3JCsu {\r\n    color: #64B5F6;\r\n  }\r\n  \r\n  #InfoBox_left__3s3yf {\r\n    margin-right: 48px;\r\n  }\r\n  \r\n  #InfoBox_middle__33vBR {\r\n    padding: 0 48px;\r\n    border-left: 1px solid #DAE1E9;\r\n    border-right: 1px solid #DAE1E9;\r\n  }\r\n  \r\n  #InfoBox_right__19ZTG {\r\n    margin-left: 48px;\r\n  }", "",{"version":3,"sources":["webpack://components/InfoBox.module.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,qBAAa;IAAb,aAAa;IACb,+BAAuB;YAAvB,uBAAuB;EACzB;;EAEA;IACE,YAAY;;IAEZ,qBAAa;;IAAb,aAAa;IACb,8BAAsB;YAAtB,sBAAsB;IACtB,2BAAmB;YAAnB,mBAAmB;IACnB,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,8BAA8B;IAC9B,+BAA+B;EACjC;;EAEA;IACE,iBAAiB;EACnB","sourcesContent":["#data-container {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .box {\r\n    width: 250px;\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  .heading {\r\n    font-size: 2.5em;\r\n    color: #2196F3;\r\n  }\r\n  \r\n  .subtext {\r\n    color: #64B5F6;\r\n  }\r\n  \r\n  #left {\r\n    margin-right: 48px;\r\n  }\r\n  \r\n  #middle {\r\n    padding: 0 48px;\r\n    border-left: 1px solid #DAE1E9;\r\n    border-right: 1px solid #DAE1E9;\r\n  }\r\n  \r\n  #right {\r\n    margin-left: 48px;\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"data-container": "InfoBox_data-container__1rdmV",
	"box": "InfoBox_box__rHG2w",
	"heading": "InfoBox_heading__1vRkn",
	"subtext": "InfoBox_subtext__3JCsu",
	"left": "InfoBox_left__3s3yf",
	"middle": "InfoBox_middle__33vBR",
	"right": "InfoBox_right__19ZTG"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvQm94LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luZm9Cb3gubW9kdWxlLmNzcz83Y2ExIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luZm9Cb3gubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJJbmZvQm94IiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRQcmljZSIsIm1vbnRoQ2hhbmdlRCIsIm1vbnRoQ2hhbmdlUCIsInVwZGF0ZWRBdCIsImdldERhdGEiLCJkYXRhIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJiaXRjb2luRGF0YSIsInByaWNlIiwiYnBpIiwiVVNEIiwicmF0ZV9mbG9hdCIsImNoYW5nZSIsInkiLCJjaGFuZ2VQIiwic2V0U3RhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJ0b0ZpeGVkIiwidGltZSIsInVwZGF0ZWQiLCJlIiwiY29uc29sZSIsImxvZyIsInJlZnJlc2giLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtb21lbnQiLCJmcm9tTm93IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsTzs7Ozs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBWSxFQUFFLElBREg7QUFFWEMsa0JBQVksRUFBRSxJQUZIO0FBR1hDLGtCQUFZLEVBQUUsSUFISDtBQUlYQyxlQUFTLEVBQUU7QUFKQSxLQUFiO0FBRmlCO0FBUWxCOzs7O3dDQUNrQjtBQUFBOztBQUNqQixXQUFLQyxPQUFMLEdBQWUsWUFBTTtBQUFBLFlBQ1pDLElBRFksR0FDSixNQUFJLENBQUNQLEtBREQsQ0FDWk8sSUFEWTtBQUVuQixZQUFNQyxHQUFHLEdBQUcsbURBQVo7QUFFQUMsYUFBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ0MsSUFBRixFQUFKO0FBQUEsU0FBakIsRUFDR0YsSUFESCxDQUNRLFVBQUNHLFdBQUQsRUFBaUI7QUFDckIsY0FBTUMsS0FBSyxHQUFHRCxXQUFXLENBQUNFLEdBQVosQ0FBZ0JDLEdBQWhCLENBQW9CQyxVQUFsQztBQUNBLGNBQU1DLE1BQU0sR0FBR0osS0FBSyxHQUFHUCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFZLENBQS9CO0FBQ0EsY0FBTUMsT0FBTyxHQUFHLENBQUNOLEtBQUssR0FBR1AsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRWSxDQUFqQixJQUFzQlosSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRWSxDQUE5QixHQUFrQyxHQUFsRDs7QUFFQSxnQkFBSSxDQUFDRSxRQUFMLENBQWM7QUFDWm5CLHdCQUFZLEVBQUVXLFdBQVcsQ0FBQ0UsR0FBWixDQUFnQkMsR0FBaEIsQ0FBb0JDLFVBRHRCO0FBRVpkLHdCQUFZLEVBQUVlLE1BQU0sQ0FBQ0ksY0FBUCxDQUFzQixPQUF0QixFQUE4QjtBQUFFQyxtQkFBSyxFQUFFLFVBQVQ7QUFBcUJDLHNCQUFRLEVBQUU7QUFBL0IsYUFBOUIsQ0FGRjtBQUdacEIsd0JBQVksRUFBRWdCLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixDQUFoQixJQUFxQixHQUh2QjtBQUlacEIscUJBQVMsRUFBRVEsV0FBVyxDQUFDYSxJQUFaLENBQWlCQztBQUpoQixXQUFkO0FBTUQsU0FaSCxXQWFTLFVBQUNDLENBQUQsRUFBTztBQUNaQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRCxTQWZIO0FBZ0JELE9BcEJEOztBQXFCQSxXQUFLdEIsT0FBTDtBQUNBLFdBQUt5QixPQUFMLEdBQWVDLFdBQVcsQ0FBQztBQUFBLGVBQU0sTUFBSSxDQUFDMUIsT0FBTCxFQUFOO0FBQUEsT0FBRCxFQUF1QixLQUF2QixDQUExQjtBQUNEOzs7MkNBQ3FCO0FBQ3BCMkIsbUJBQWEsQ0FBQyxLQUFLRixPQUFOLENBQWI7QUFDRDs7OzZCQUNPO0FBQ04sYUFDRTtBQUFLLFVBQUUsRUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksS0FBSzlCLEtBQUwsQ0FBV0MsWUFBWCxHQUNBO0FBQUssVUFBRSxFQUFDLE1BQVI7QUFBZSxpQkFBUyxFQUFDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTBCLEtBQUtELEtBQUwsQ0FBV0MsWUFBWCxDQUF3Qm9CLGNBQXhCLENBQXVDLE9BQXZDLEVBQStDO0FBQUVDLGFBQUssRUFBRSxVQUFUO0FBQXFCQyxnQkFBUSxFQUFFO0FBQS9CLE9BQS9DLENBQTFCLENBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTBCLGFBQWFVLDZDQUFNLENBQUMsS0FBS2pDLEtBQUwsQ0FBV0ksU0FBWixDQUFOLENBQThCOEIsT0FBOUIsRUFBdkMsQ0FGRixDQURBLEdBS0EsSUFOSixFQU9JLEtBQUtsQyxLQUFMLENBQVdDLFlBQVgsR0FDQTtBQUFLLFVBQUUsRUFBQyxRQUFSO0FBQWlCLGlCQUFTLEVBQUMsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMEIsS0FBS0QsS0FBTCxDQUFXRSxZQUFyQyxDQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FGRixDQURBLEdBS0EsSUFaSixFQWFJO0FBQUssVUFBRSxFQUFDLE9BQVI7QUFBZ0IsaUJBQVMsRUFBQyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQixLQUFLRixLQUFMLENBQVdHLFlBQXJDLENBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUZGLENBYkosQ0FERjtBQXFCRDs7OztFQTVEbUJnQyw0Q0FBSyxDQUFDQyxTOztBQStEYnRDLHNFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDZSQUE4Sjs7QUFFaE07O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sNlJBQThKO0FBQ3BLO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsNlJBQThKOztBQUV4TDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7OztBQzdFQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsbUNBQW1DLG9CQUFvQiw4QkFBOEIsc0JBQXNCLHdDQUF3Qyx3Q0FBd0MsT0FBTyxpQ0FBaUMscUJBQXFCLG9DQUFvQyw0QkFBNEIsdUNBQXVDLHVDQUF1QyxvQ0FBb0Msb0NBQW9DLHVCQUF1QixPQUFPLHFDQUFxQyx5QkFBeUIsdUJBQXVCLE9BQU8scUNBQXFDLHVCQUF1QixPQUFPLGtDQUFrQywyQkFBMkIsT0FBTyxvQ0FBb0Msd0JBQXdCLHVDQUF1Qyx3Q0FBd0MsT0FBTyxtQ0FBbUMsMEJBQTBCLE9BQU8sT0FBTyw4RkFBOEYsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksMkNBQTJDLG9CQUFvQixzQkFBc0IsZ0NBQWdDLE9BQU8sa0JBQWtCLHFCQUFxQiw0QkFBNEIsK0JBQStCLDRCQUE0Qix1QkFBdUIsT0FBTyxzQkFBc0IseUJBQXlCLHVCQUF1QixPQUFPLHNCQUFzQix1QkFBdUIsT0FBTyxtQkFBbUIsMkJBQTJCLE9BQU8scUJBQXFCLHdCQUF3Qix1Q0FBdUMsd0NBQXdDLE9BQU8sb0JBQW9CLDBCQUEwQixPQUFPLG1CQUFtQjtBQUNyZ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDhiOTA0MzFjMmViMjA1MmUxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5mb0JveC5tb2R1bGUuY3NzJ1xyXG5cclxuY2xhc3MgSW5mb0JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnRQcmljZTogbnVsbCxcclxuICAgICAgbW9udGhDaGFuZ2VEOiBudWxsLFxyXG4gICAgICBtb250aENoYW5nZVA6IG51bGwsXHJcbiAgICAgIHVwZGF0ZWRBdDogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgdGhpcy5nZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbic7XHJcblxyXG4gICAgICBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcclxuICAgICAgICAudGhlbigoYml0Y29pbkRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByaWNlID0gYml0Y29pbkRhdGEuYnBpLlVTRC5yYXRlX2Zsb2F0O1xyXG4gICAgICAgICAgY29uc3QgY2hhbmdlID0gcHJpY2UgLSBkYXRhWzBdLnk7XHJcbiAgICAgICAgICBjb25zdCBjaGFuZ2VQID0gKHByaWNlIC0gZGF0YVswXS55KSAvIGRhdGFbMF0ueSAqIDEwMDtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY3VycmVudFByaWNlOiBiaXRjb2luRGF0YS5icGkuVVNELnJhdGVfZmxvYXQsXHJcbiAgICAgICAgICAgIG1vbnRoQ2hhbmdlRDogY2hhbmdlLnRvTG9jYWxlU3RyaW5nKCd1cy1FTicseyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnIH0pLFxyXG4gICAgICAgICAgICBtb250aENoYW5nZVA6IGNoYW5nZVAudG9GaXhlZCgyKSArICclJyxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBiaXRjb2luRGF0YS50aW1lLnVwZGF0ZWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB0aGlzLnJlZnJlc2ggPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmdldERhdGEoKSwgOTAwMDApO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlZnJlc2gpO1xyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJkYXRhLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsgdGhpcy5zdGF0ZS5jdXJyZW50UHJpY2UgP1xyXG4gICAgICAgICAgPGRpdiBpZD1cImxlZnRcIiBjbGFzc05hbWU9J2JveCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPnt0aGlzLnN0YXRlLmN1cnJlbnRQcmljZS50b0xvY2FsZVN0cmluZygndXMtRU4nLHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9KX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0ZXh0XCI+eydVcGRhdGVkICcgKyBtb21lbnQodGhpcy5zdGF0ZS51cGRhdGVkQXQgKS5mcm9tTm93KCl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRQcmljZSA/XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWlkZGxlXCIgY2xhc3NOYW1lPSdib3gnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdcIj57dGhpcy5zdGF0ZS5tb250aENoYW5nZUR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGV4dFwiPkNoYW5nZSBTaW5jZSBMYXN0IE1vbnRoIChVU0QpPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicmlnaHRcIiBjbGFzc05hbWU9J2JveCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPnt0aGlzLnN0YXRlLm1vbnRoQ2hhbmdlUH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0ZXh0XCI+Q2hhbmdlIFNpbmNlIExhc3QgTW9udGggKCUpPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9Cb3g7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vSW5mb0JveC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vSW5mb0JveC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vSW5mb0JveC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNJbmZvQm94X2RhdGEtY29udGFpbmVyX18xcmRtViB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5JbmZvQm94X2JveF9fckhHMncge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICBcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5JbmZvQm94X2hlYWRpbmdfXzF2UmtuIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG4gICAgY29sb3I6ICMyMTk2RjM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5JbmZvQm94X3N1YnRleHRfXzNKQ3N1IHtcXHJcXG4gICAgY29sb3I6ICM2NEI1RjY7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNJbmZvQm94X2xlZnRfXzNzM3lmIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjSW5mb0JveF9taWRkbGVfXzMzdkJSIHtcXHJcXG4gICAgcGFkZGluZzogMCA0OHB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNEQUUxRTk7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEQUUxRTk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNJbmZvQm94X3JpZ2h0X18xOVpURyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL0luZm9Cb3gubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxxQkFBYTtJQUFiLGFBQWE7SUFDYiwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTs7SUFFWixxQkFBYTs7SUFBYixhQUFhO0lBQ2IsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QiwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZGF0YS1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ib3gge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG4gICAgY29sb3I6ICMyMTk2RjM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zdWJ0ZXh0IHtcXHJcXG4gICAgY29sb3I6ICM2NEI1RjY7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNsZWZ0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjbWlkZGxlIHtcXHJcXG4gICAgcGFkZGluZzogMCA0OHB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNEQUUxRTk7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEQUUxRTk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNyaWdodCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImRhdGEtY29udGFpbmVyXCI6IFwiSW5mb0JveF9kYXRhLWNvbnRhaW5lcl9fMXJkbVZcIixcblx0XCJib3hcIjogXCJJbmZvQm94X2JveF9fckhHMndcIixcblx0XCJoZWFkaW5nXCI6IFwiSW5mb0JveF9oZWFkaW5nX18xdlJrblwiLFxuXHRcInN1YnRleHRcIjogXCJJbmZvQm94X3N1YnRleHRfXzNKQ3N1XCIsXG5cdFwibGVmdFwiOiBcIkluZm9Cb3hfbGVmdF9fM3MzeWZcIixcblx0XCJtaWRkbGVcIjogXCJJbmZvQm94X21pZGRsZV9fMzN2QlJcIixcblx0XCJyaWdodFwiOiBcIkluZm9Cb3hfcmlnaHRfXzE5WlRHXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==