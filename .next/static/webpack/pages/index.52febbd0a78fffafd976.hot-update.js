webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ToolTip.js":
/*!*******************************!*\
  !*** ./components/ToolTip.js ***!
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





var _jsxFileName = "D:\\Lambda\\Next\\BITZPRICE\\components\\ToolTip.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ToolTip = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ToolTip, _React$Component);

  var _super = _createSuper(ToolTip);

  function ToolTip() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToolTip);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ToolTip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hoverLoc = _this$props.hoverLoc,
          activePoint = _this$props.activePoint;
      var svgLocation = document.getElementsByClassName("linechart")[0].getBoundingClientRect();
      var placementStyles = {};
      var width = 100;
      placementStyles.width = width + 'px';
      placementStyles.left = hoverLoc + svgLocation.left - width / 2;
      return __jsx("div", {
        className: "hover",
        style: placementStyles,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }, activePoint.d), __jsx("div", {
        className: "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }
      }, activePoint.p));
    }
  }]);

  return ToolTip;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ToolTip);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub29sVGlwLmpzIl0sIm5hbWVzIjpbIlRvb2xUaXAiLCJwcm9wcyIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJzdmdMb2NhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBsYWNlbWVudFN0eWxlcyIsIndpZHRoIiwibGVmdCIsImQiLCJwIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTzs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUFBLHdCQUN5QixLQUFLQyxLQUQ5QjtBQUFBLFVBQ0FDLFFBREEsZUFDQUEsUUFEQTtBQUFBLFVBQ1VDLFdBRFYsZUFDVUEsV0FEVjtBQUVQLFVBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxDQUE3QyxFQUFnREMscUJBQWhELEVBQXBCO0FBRUEsVUFBSUMsZUFBZSxHQUFHLEVBQXRCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLEdBQVo7QUFDQUQscUJBQWUsQ0FBQ0MsS0FBaEIsR0FBd0JBLEtBQUssR0FBRyxJQUFoQztBQUNBRCxxQkFBZSxDQUFDRSxJQUFoQixHQUF1QlIsUUFBUSxHQUFHRSxXQUFXLENBQUNNLElBQXZCLEdBQStCRCxLQUFLLEdBQUMsQ0FBNUQ7QUFFQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQXVCLGFBQUssRUFBR0QsZUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBd0JMLFdBQVcsQ0FBQ1EsQ0FBcEMsQ0FERixFQUVFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBd0JSLFdBQVcsQ0FBQ1MsQ0FBcEMsQ0FGRixDQURGO0FBTUQ7Ozs7RUFqQmlCQyw0Q0FBSyxDQUFDQyxTOztBQW9CWGQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTJmZWJiZDBhNzhmZmZhZmQ5NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvb2xUaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2hvdmVyTG9jLCBhY3RpdmVQb2ludH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBzdmdMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5lY2hhcnRcIilbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgXHJcbiAgICAgIGxldCBwbGFjZW1lbnRTdHlsZXMgPSB7fTtcclxuICAgICAgbGV0IHdpZHRoID0gMTAwO1xyXG4gICAgICBwbGFjZW1lbnRTdHlsZXMud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICAgIHBsYWNlbWVudFN0eWxlcy5sZWZ0ID0gaG92ZXJMb2MgKyBzdmdMb2NhdGlvbi5sZWZ0IC0gKHdpZHRoLzIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob3Zlcicgc3R5bGU9eyBwbGFjZW1lbnRTdHlsZXMgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlJz57IGFjdGl2ZVBvaW50LmQgfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlJz57YWN0aXZlUG9pbnQucCB9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgVG9vbFRpcDsiXSwic291cmNlUm9vdCI6IiJ9