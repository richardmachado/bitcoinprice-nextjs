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
/* harmony import */ var _ToolTip_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToolTip.module.css */ "./components/ToolTip.module.css");
/* harmony import */ var _ToolTip_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ToolTip_module_css__WEBPACK_IMPORTED_MODULE_6__);





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
        className: _ToolTip_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.hover,
        style: placementStyles,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "date",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      }, activePoint.d), __jsx("div", {
        className: "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub29sVGlwLmpzIl0sIm5hbWVzIjpbIlRvb2xUaXAiLCJwcm9wcyIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJzdmdMb2NhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBsYWNlbWVudFN0eWxlcyIsIndpZHRoIiwibGVmdCIsInN0eWxlcyIsImhvdmVyIiwiZCIsInAiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7NkJBRU87QUFBQSx3QkFDeUIsS0FBS0MsS0FEOUI7QUFBQSxVQUNBQyxRQURBLGVBQ0FBLFFBREE7QUFBQSxVQUNVQyxXQURWLGVBQ1VBLFdBRFY7QUFFUCxVQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsV0FBaEMsRUFBNkMsQ0FBN0MsRUFBZ0RDLHFCQUFoRCxFQUFwQjtBQUVBLFVBQUlDLGVBQWUsR0FBRyxFQUF0QjtBQUNBLFVBQUlDLEtBQUssR0FBRyxHQUFaO0FBQ0FELHFCQUFlLENBQUNDLEtBQWhCLEdBQXdCQSxLQUFLLEdBQUcsSUFBaEM7QUFDQUQscUJBQWUsQ0FBQ0UsSUFBaEIsR0FBdUJSLFFBQVEsR0FBR0UsV0FBVyxDQUFDTSxJQUF2QixHQUErQkQsS0FBSyxHQUFDLENBQTVEO0FBRUEsYUFDRTtBQUFLLGlCQUFTLEVBQUVFLDBEQUFNLENBQUNDLEtBQXZCO0FBQThCLGFBQUssRUFBR0osZUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBd0JMLFdBQVcsQ0FBQ1UsQ0FBcEMsQ0FERixFQUVFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBd0JWLFdBQVcsQ0FBQ1csQ0FBcEMsQ0FGRixDQURGO0FBTUQ7Ozs7RUFqQmlCQyw0Q0FBSyxDQUFDQyxTOztBQW9CWGhCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc2YzRjNGQzMWUxMGZmZmRiYjYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9vbFRpcC5tb2R1bGUuY3NzJ1xyXG5cclxuY2xhc3MgVG9vbFRpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7aG92ZXJMb2MsIGFjdGl2ZVBvaW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHN2Z0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVjaGFydFwiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBcclxuICAgICAgbGV0IHBsYWNlbWVudFN0eWxlcyA9IHt9O1xyXG4gICAgICBsZXQgd2lkdGggPSAxMDA7XHJcbiAgICAgIHBsYWNlbWVudFN0eWxlcy53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICAgICAgcGxhY2VtZW50U3R5bGVzLmxlZnQgPSBob3ZlckxvYyArIHN2Z0xvY2F0aW9uLmxlZnQgLSAod2lkdGgvMik7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3Zlcn0gc3R5bGU9eyBwbGFjZW1lbnRTdHlsZXMgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlJz57IGFjdGl2ZVBvaW50LmQgfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlJz57YWN0aXZlUG9pbnQucCB9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgVG9vbFRpcDsiXSwic291cmNlUm9vdCI6IiJ9