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
        className: _InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.heading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, this.state.monthChangeD), __jsx("div", {
        className: _InfoBox_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.subtext,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvQm94LmpzIl0sIm5hbWVzIjpbIkluZm9Cb3giLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudFByaWNlIiwibW9udGhDaGFuZ2VEIiwibW9udGhDaGFuZ2VQIiwidXBkYXRlZEF0IiwiZ2V0RGF0YSIsImRhdGEiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImJpdGNvaW5EYXRhIiwicHJpY2UiLCJicGkiLCJVU0QiLCJyYXRlX2Zsb2F0IiwiY2hhbmdlIiwieSIsImNoYW5nZVAiLCJzZXRTdGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsInRvRml4ZWQiLCJ0aW1lIiwidXBkYXRlZCIsImUiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlcyIsImJveCIsImhlYWRpbmciLCJzdWJ0ZXh0IiwibW9tZW50IiwiZnJvbU5vdyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLE87Ozs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFBRSxJQURIO0FBRVhDLGtCQUFZLEVBQUUsSUFGSDtBQUdYQyxrQkFBWSxFQUFFLElBSEg7QUFJWEMsZUFBUyxFQUFFO0FBSkEsS0FBYjtBQUZpQjtBQVFsQjs7Ozt3Q0FDa0I7QUFBQTs7QUFDakIsV0FBS0MsT0FBTCxHQUFlLFlBQU07QUFBQSxZQUNaQyxJQURZLEdBQ0osTUFBSSxDQUFDUCxLQURELENBQ1pPLElBRFk7QUFFbkIsWUFBTUMsR0FBRyxHQUFHLG1EQUFaO0FBRUFDLGFBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFB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QUFLLFVBQUUsRUFBQyxPQUFSO0FBQWdCLGlCQUFTLEVBQUMsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBMEIsS0FBS3BDLEtBQUwsQ0FBV0csWUFBckMsQ0FERixFQUVFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBRkYsQ0FiSixDQURGO0FBcUJEOzs7O0VBNURtQm9DLDRDQUFLLENBQUNDLFM7O0FBK0RiMUMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmNhMzU3N2UxN2FkM2E2ODEyNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0luZm9Cb3gubW9kdWxlLmNzcydcclxuXHJcbmNsYXNzIEluZm9Cb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjdXJyZW50UHJpY2U6IG51bGwsXHJcbiAgICAgIG1vbnRoQ2hhbmdlRDogbnVsbCxcclxuICAgICAgbW9udGhDaGFuZ2VQOiBudWxsLFxyXG4gICAgICB1cGRhdGVkQXQ6IG51bGxcclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIHRoaXMuZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nO1xyXG5cclxuICAgICAgZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGJpdGNvaW5EYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcmljZSA9IGJpdGNvaW5EYXRhLmJwaS5VU0QucmF0ZV9mbG9hdDtcclxuICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IHByaWNlIC0gZGF0YVswXS55O1xyXG4gICAgICAgICAgY29uc3QgY2hhbmdlUCA9IChwcmljZSAtIGRhdGFbMF0ueSkgLyBkYXRhWzBdLnkgKiAxMDA7XHJcblxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcmljZTogYml0Y29pbkRhdGEuYnBpLlVTRC5yYXRlX2Zsb2F0LFxyXG4gICAgICAgICAgICBtb250aENoYW5nZUQ6IGNoYW5nZS50b0xvY2FsZVN0cmluZygndXMtRU4nLHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9KSxcclxuICAgICAgICAgICAgbW9udGhDaGFuZ2VQOiBjaGFuZ2VQLnRvRml4ZWQoMikgKyAnJScsXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYml0Y29pbkRhdGEudGltZS51cGRhdGVkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgdGhpcy5yZWZyZXNoID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5nZXREYXRhKCksIDkwMDAwKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZyZXNoKTtcclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwiZGF0YS1jb250YWluZXJcIj5cclxuICAgICAgICB7IHRoaXMuc3RhdGUuY3VycmVudFByaWNlID9cclxuICAgICAgICAgIDxkaXYgaWQ9XCJsZWZ0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT57dGhpcy5zdGF0ZS5jdXJyZW50UHJpY2UudG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGV4dH0+eydVcGRhdGVkICcgKyBtb21lbnQodGhpcy5zdGF0ZS51cGRhdGVkQXQgKS5mcm9tTm93KCl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgeyB0aGlzLnN0YXRlLmN1cnJlbnRQcmljZSA/XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWlkZGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT57dGhpcy5zdGF0ZS5tb250aENoYW5nZUR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGV4dH0+Q2hhbmdlIFNpbmNlIExhc3QgTW9udGggKFVTRCk8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgaWQ9XCJyaWdodFwiIGNsYXNzTmFtZT0nYm94Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+e3RoaXMuc3RhdGUubW9udGhDaGFuZ2VQfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRleHRcIj5DaGFuZ2UgU2luY2UgTGFzdCBNb250aCAoJSk8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb0JveDsiXSwic291cmNlUm9vdCI6IiJ9