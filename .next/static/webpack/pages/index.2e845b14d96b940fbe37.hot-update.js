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
        className: _InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.box,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: _InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.heading,
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
        className: _InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.subtext,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }
      }, 'Updated ' + moment__WEBPACK_IMPORTED_MODULE_6___default()(this.state.updatedAt).fromNow())) : null, this.state.currentPrice ? __jsx("div", {
        id: "middle",
        className: _InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.box,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "styles.heading",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvQm94LmpzIl0sIm5hbWVzIjpbIkluZm9Cb3giLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudFByaWNlIiwibW9udGhDaGFuZ2VEIiwibW9udGhDaGFuZ2VQIiwidXBkYXRlZEF0IiwiZ2V0RGF0YSIsImRhdGEiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImJpdGNvaW5EYXRhIiwicHJpY2UiLCJicGkiLCJVU0QiLCJyYXRlX2Zsb2F0IiwiY2hhbmdlIiwieSIsImNoYW5nZVAiLCJzZXRTdGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsInRvRml4ZWQiLCJ0aW1lIiwidXBkYXRlZCIsImUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsImJveCIsImhlYWRpbmciLCJzdWJ0ZXh0IiwibW9tZW50IiwiZnJvbU5vdyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLE87Ozs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFBRSxJQURIO0FBRVhDLGtCQUFZLEVBQUUsSUFGSDtBQUdYQyxrQkFBWSxFQUFFLElBSEg7QUFJWEMsZUFBUyxFQUFFO0FBSkEsS0FBYjtBQUZpQjtBQVFsQjs7Ozt3Q0FDa0I7QUFBQTs7QUFDakIsV0FBS0MsT0FBTCxHQUFlLFlBQU07QUFBQSxZQUNaQyxJQURZLEdBQ0osTUFBSSxDQUFDUCxLQURELENBQ1pPLElBRFk7QUFFbkIsWUFBTUMsR0FBRyxHQUFHLG1EQUFaO0FBRUFDLGFBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFB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QVMsRUFBQyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQixLQUFLRixLQUFMLENBQVdHLFlBQXJDLENBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUZGLENBYkosQ0FERjtBQXFCRDs7OztFQTVEbUJvQyw0Q0FBSyxDQUFDQyxTOztBQStEYjFDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJlODQ1YjE0ZDk2Yjk0MGZiZTM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmZvQm94Lm1vZHVsZS5jc3MnXHJcblxyXG5jbGFzcyBJbmZvQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY3VycmVudFByaWNlOiBudWxsLFxyXG4gICAgICBtb250aENoYW5nZUQ6IG51bGwsXHJcbiAgICAgIG1vbnRoQ2hhbmdlUDogbnVsbCxcclxuICAgICAgdXBkYXRlZEF0OiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICB0aGlzLmdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS5qc29uJztcclxuXHJcbiAgICAgIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChiaXRjb2luRGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBiaXRjb2luRGF0YS5icGkuVVNELnJhdGVfZmxvYXQ7XHJcbiAgICAgICAgICBjb25zdCBjaGFuZ2UgPSBwcmljZSAtIGRhdGFbMF0ueTtcclxuICAgICAgICAgIGNvbnN0IGNoYW5nZVAgPSAocHJpY2UgLSBkYXRhWzBdLnkpIC8gZGF0YVswXS55ICogMTAwO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjdXJyZW50UHJpY2U6IGJpdGNvaW5EYXRhLmJwaS5VU0QucmF0ZV9mbG9hdCxcclxuICAgICAgICAgICAgbW9udGhDaGFuZ2VEOiBjaGFuZ2UudG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSksXHJcbiAgICAgICAgICAgIG1vbnRoQ2hhbmdlUDogY2hhbmdlUC50b0ZpeGVkKDIpICsgJyUnLFxyXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IGJpdGNvaW5EYXRhLnRpbWUudXBkYXRlZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIHRoaXMucmVmcmVzaCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuZ2V0RGF0YSgpLCA5MDAwMCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMucmVmcmVzaCk7XHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImRhdGEtY29udGFpbmVyXCI+XHJcbiAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRQcmljZSA/XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibGVmdFwiIGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+e3RoaXMuc3RhdGUuY3VycmVudFByaWNlLnRvTG9jYWxlU3RyaW5nKCd1cy1FTicseyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnIH0pfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRleHR9PnsnVXBkYXRlZCAnICsgbW9tZW50KHRoaXMuc3RhdGUudXBkYXRlZEF0ICkuZnJvbU5vdygpfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgICAgIHsgdGhpcy5zdGF0ZS5jdXJyZW50UHJpY2UgP1xyXG4gICAgICAgICAgPGRpdiBpZD1cIm1pZGRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3R5bGVzLmhlYWRpbmdcIj57dGhpcy5zdGF0ZS5tb250aENoYW5nZUR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGV4dFwiPkNoYW5nZSBTaW5jZSBMYXN0IE1vbnRoIChVU0QpPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicmlnaHRcIiBjbGFzc05hbWU9J2JveCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPnt0aGlzLnN0YXRlLm1vbnRoQ2hhbmdlUH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0ZXh0XCI+Q2hhbmdlIFNpbmNlIExhc3QgTW9udGggKCUpPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm9Cb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==