webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
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





var _jsxFileName = "D:\\Lambda\\Next\\BITZPRICE\\components\\Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    _this = _super.call(this, props);
    _this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "handleChartHover",
    value: function handleChartHover(hoverLoc, activePoint) {
      this.setState({
        hoverLoc: hoverLoc,
        activePoint: activePoint
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var getData = function getData() {
        var url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
        fetch(url).then(function (r) {
          return r.json();
        }).then(function (bitcoinData) {
          var sortedData = [];
          var count = 0;

          for (var date in bitcoinData.bpi) {
            sortedData.push({
              d: moment(date).format('MMM DD'),
              p: bitcoinData.bpi[date].toLocaleString('us-EN', {
                style: 'currency',
                currency: 'USD'
              }),
              x: count,
              //previous days
              y: bitcoinData.bpi[date] // numerical price

            });
            count++;
          }

          _this2.setState({
            data: sortedData,
            fetchingData: false
          });
        })["catch"](function (e) {
          console.log(e);
        });
      };

      getData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }
      }, "30 Day Bitcoin Price Chart")), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, !this.state.fetchingData ? __jsx(InfoBox, {
        data: this.state.data,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }) : null), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, this.state.hoverLoc ? __jsx(ToolTip, {
        hoverLoc: this.state.hoverLoc,
        activePoint: this.state.activePoint,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 40
        }
      }) : null)), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "chart",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, !this.state.fetchingData ? __jsx(LineChart, {
        data: this.state.data,
        onChartHover: function onChartHover(a, b) {
          return _this3.handleChartHover(a, b);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 19
        }
      }) : null)), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "coindesk",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }
      }, " Powered by ", __jsx("a", {
        href: "http://www.coindesk.com/price/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 46
        }
      }, "CoinDesk"))));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwicHJvcHMiLCJzdGF0ZSIsImZldGNoaW5nRGF0YSIsImRhdGEiLCJob3ZlckxvYyIsImFjdGl2ZVBvaW50Iiwic2V0U3RhdGUiLCJnZXREYXRhIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJiaXRjb2luRGF0YSIsInNvcnRlZERhdGEiLCJjb3VudCIsImRhdGUiLCJicGkiLCJwdXNoIiwiZCIsIm1vbWVudCIsImZvcm1hdCIsInAiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJ4IiwieSIsImUiLCJjb25zb2xlIiwibG9nIiwiYSIsImIiLCJoYW5kbGVDaGFydEhvdmVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDTUEsTTs7Ozs7QUFDRixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBQUUsSUFESDtBQUVYQyxVQUFJLEVBQUUsSUFGSztBQUdYQyxjQUFRLEVBQUUsSUFIQztBQUlYQyxpQkFBVyxFQUFFO0FBSkYsS0FBYjtBQUZlO0FBUWhCOzs7O3FDQUNnQkQsUSxFQUFVQyxXLEVBQVk7QUFDckMsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGdCQUFRLEVBQUVBLFFBREU7QUFFWkMsbUJBQVcsRUFBRUE7QUFGRCxPQUFkO0FBSUQ7Ozt3Q0FDa0I7QUFBQTs7QUFDakIsVUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixZQUFNQyxHQUFHLEdBQUcsdURBQVo7QUFFQUMsYUFBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFpQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ0MsSUFBRixFQUFKO0FBQUEs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QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLFVBQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQStCO0FBQUcsWUFBSSxFQUFDLGdDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQS9CLENBREYsQ0FyQkYsQ0FGRjtBQTZCRDs7OztFQTFFY0UsNENBQUssQ0FBQ0MsUzs7QUE2RVpwQyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZDU3MWExNjc0NDYyZWFhZmIwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgZmV0Y2hpbmdEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgIGhvdmVyTG9jOiBudWxsLFxyXG4gICAgICAgICAgYWN0aXZlUG9pbnQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlQ2hhcnRIb3Zlcihob3ZlckxvYywgYWN0aXZlUG9pbnQpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaG92ZXJMb2M6IGhvdmVyTG9jLFxyXG4gICAgICAgICAgYWN0aXZlUG9pbnQ6IGFjdGl2ZVBvaW50XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb24nO1xyXG4gICAgXHJcbiAgICAgICAgICBmZXRjaCh1cmwpLnRoZW4oIHIgPT4gci5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChiaXRjb2luRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGRhdGUgaW4gYml0Y29pbkRhdGEuYnBpKXtcclxuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIGQ6IG1vbWVudChkYXRlKS5mb3JtYXQoJ01NTSBERCcpLFxyXG4gICAgICAgICAgICAgICAgICBwOiBiaXRjb2luRGF0YS5icGlbZGF0ZV0udG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSksXHJcbiAgICAgICAgICAgICAgICAgIHg6IGNvdW50LCAvL3ByZXZpb3VzIGRheXNcclxuICAgICAgICAgICAgICAgICAgeTogYml0Y29pbkRhdGEuYnBpW2RhdGVdIC8vIG51bWVyaWNhbCBwcmljZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXHJcbiAgICAgICAgICAgICAgICBmZXRjaGluZ0RhdGE6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICA8aDE+MzAgRGF5IEJpdGNvaW4gUHJpY2UgQ2hhcnQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgeyAhdGhpcy5zdGF0ZS5mZXRjaGluZ0RhdGEgP1xyXG4gICAgICAgICAgICAgIDxJbmZvQm94IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gLz5cclxuICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcHVwJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gPFRvb2xUaXAgaG92ZXJMb2M9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IGFjdGl2ZVBvaW50PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50fS8+IDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydCc+XHJcbiAgICAgICAgICAgICAgICB7ICF0aGlzLnN0YXRlLmZldGNoaW5nRGF0YSA/XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBvbkNoYXJ0SG92ZXI9eyAoYSxiKSA9PiB0aGlzLmhhbmRsZUNoYXJ0SG92ZXIoYSxiKSB9Lz5cclxuICAgICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2luZGVza1wiPiBQb3dlcmVkIGJ5IDxhIGhyZWY9XCJodHRwOi8vd3d3LmNvaW5kZXNrLmNvbS9wcmljZS9cIj5Db2luRGVzazwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9