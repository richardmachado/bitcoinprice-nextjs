webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LineChart.js":
/*!*********************************!*\
  !*** ./components/LineChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LineChart.module.css */ "./components/LineChart.module.css");
/* harmony import */ var _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LineChart_module_css__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "D:\\Lambda\\Next\\BITZPRICE\\components\\LineChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var LineChart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LineChart, _React$Component);

  var _super = _createSuper(LineChart);

  function LineChart(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LineChart);

    _this = _super.call(this, props);
    _this.state = {
      hoverLoc: null,
      activePoint: null
    };
    return _this;
  } // GET X & Y || MAX & MIN


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LineChart, [{
    key: "getX",
    value: function getX() {
      var data = this.props.data;
      return {
        min: data[0].x,
        max: data[data.length - 1].x
      };
    }
  }, {
    key: "getY",
    value: function getY() {
      var data = this.props.data;
      return {
        min: data.reduce(function (min, p) {
          return p.y < min ? p.y : min;
        }, data[0].y),
        max: data.reduce(function (max, p) {
          return p.y > max ? p.y : max;
        }, data[0].y)
      };
    } // GET SVG COORDINATES

  }, {
    key: "getSvgX",
    value: function getSvgX(x) {
      var _this$props = this.props,
          svgWidth = _this$props.svgWidth,
          yLabelSize = _this$props.yLabelSize;
      return yLabelSize + x / this.getX().max * (svgWidth - yLabelSize);
    }
  }, {
    key: "getSvgY",
    value: function getSvgY(y) {
      var _this$props2 = this.props,
          svgHeight = _this$props2.svgHeight,
          xLabelSize = _this$props2.xLabelSize;
      var gY = this.getY();
      return ((svgHeight - xLabelSize) * gY.max - (svgHeight - xLabelSize) * y) / (gY.max - gY.min);
    } // BUILD SVG PATH

  }, {
    key: "makePath",
    value: function makePath() {
      var _this2 = this;

      var _this$props3 = this.props,
          data = _this$props3.data,
          color = _this$props3.color;
      var pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";
      pathD += data.map(function (point, i) {
        return "L " + _this2.getSvgX(point.x) + " " + _this2.getSvgY(point.y) + " ";
      }).join("");
      return __jsx("path", {
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.linechart_path,
        d: pathD,
        style: {
          stroke: color
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      });
    } // BUILD SHADED AREA

  }, {
    key: "makeArea",
    value: function makeArea() {
      var _this3 = this;

      var data = this.props.data;
      var pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";
      pathD += data.map(function (point, i) {
        return "L " + _this3.getSvgX(point.x) + " " + _this3.getSvgY(point.y) + " ";
      }).join("");
      var x = this.getX();
      var y = this.getY();
      pathD += "L " + this.getSvgX(x.max) + " " + this.getSvgY(y.min) + " " + "L " + this.getSvgX(x.min) + " " + this.getSvgY(y.min) + " ";
      return __jsx("path", {
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.linechart_area,
        d: pathD,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 14
        }
      });
    } // BUILD GRID AXIS

  }, {
    key: "makeAxis",
    value: function makeAxis() {
      var yLabelSize = this.props.yLabelSize;
      var x = this.getX();
      var y = this.getY();
      return __jsx("g", {
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.linechart_axis,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }, __jsx("line", {
        x1: this.getSvgX(x.min) - yLabelSize,
        y1: this.getSvgY(y.min),
        x2: this.getSvgX(x.max),
        y2: this.getSvgY(y.min),
        strokeDasharray: "5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }
      }), __jsx("line", {
        x1: this.getSvgX(x.min) - yLabelSize,
        y1: this.getSvgY(y.max),
        x2: this.getSvgX(x.max),
        y2: this.getSvgY(y.max),
        strokeDasharray: "5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      }));
    }
  }, {
    key: "makeLabels",
    value: function makeLabels() {
      var _this$props4 = this.props,
          svgHeight = _this$props4.svgHeight,
          svgWidth = _this$props4.svgWidth,
          xLabelSize = _this$props4.xLabelSize,
          yLabelSize = _this$props4.yLabelSize;
      var padding = 5;
      return __jsx("g", {
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.linechart_label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }, __jsx("text", {
        transform: "translate(".concat(yLabelSize / 2, ", 20)"),
        textAnchor: "middle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, this.getY().max.toLocaleString('us-EN', {
        style: 'currency',
        currency: 'USD'
      })), __jsx("text", {
        transform: "translate(".concat(yLabelSize / 2, ", ").concat(svgHeight - xLabelSize - padding, ")"),
        textAnchor: "middle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }, this.getY().min.toLocaleString('us-EN', {
        style: 'currency',
        currency: 'USD'
      })), __jsx("text", {
        transform: "translate(".concat(yLabelSize, ", ").concat(svgHeight, ")"),
        textAnchor: "start",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }, this.props.data[0].d), __jsx("text", {
        transform: "translate(".concat(svgWidth, ", ").concat(svgHeight, ")"),
        textAnchor: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }, this.props.data[this.props.data.length - 1].d));
    } // FIND CLOSEST POINT TO MOUSE

  }, {
    key: "getCoords",
    value: function getCoords(e) {
      var _this4 = this;

      var _this$props5 = this.props,
          svgWidth = _this$props5.svgWidth,
          data = _this$props5.data,
          yLabelSize = _this$props5.yLabelSize;
      var svgLocation = document.getElementsByClassName("linechart")[0].getBoundingClientRect();
      var adjustment = (svgLocation.width - svgWidth) / 2; //takes padding into consideration

      var relativeLoc = e.clientX - svgLocation.left - adjustment;
      var svgData = [];
      data.map(function (point, i) {
        svgData.push({
          svgX: _this4.getSvgX(point.x),
          svgY: _this4.getSvgY(point.y),
          d: point.d,
          p: point.p
        });
      });
      var closestPoint = {};

      for (var i = 0, c = 500; i < svgData.length; i++) {
        if (Math.abs(svgData[i].svgX - this.state.hoverLoc) <= c) {
          c = Math.abs(svgData[i].svgX - this.state.hoverLoc);
          closestPoint = svgData[i];
        }
      }

      if (relativeLoc - yLabelSize < 0) {
        this.stopHover();
      } else {
        this.setState({
          hoverLoc: relativeLoc,
          activePoint: closestPoint
        });
        this.props.onChartHover(relativeLoc, closestPoint);
      }
    } // STOP HOVER

  }, {
    key: "stopHover",
    value: function stopHover() {
      this.setState({
        hoverLoc: null,
        activePoint: null
      });
      this.props.onChartHover(null, null);
    } // MAKE ACTIVE POINT

  }, {
    key: "makeActivePoint",
    value: function makeActivePoint() {
      var _this$props6 = this.props,
          color = _this$props6.color,
          pointRadius = _this$props6.pointRadius;
      return __jsx("circle", {
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.linechart_point,
        style: {
          stroke: color
        },
        r: pointRadius,
        cx: this.state.activePoint.svgX,
        cy: this.state.activePoint.svgY,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 9
        }
      });
    } // MAKE HOVER LINE

  }, {
    key: "createLine",
    value: function createLine() {
      var _this$props7 = this.props,
          svgHeight = _this$props7.svgHeight,
          xLabelSize = _this$props7.xLabelSize;
      return __jsx("line", {
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.hoverLine,
        x1: this.state.hoverLoc,
        y1: -8,
        x2: this.state.hoverLoc,
        y2: svgHeight - xLabelSize,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this,
          _jsx;

      var _this$props8 = this.props,
          svgHeight = _this$props8.svgHeight,
          svgWidth = _this$props8.svgWidth;
      return __jsx("svg", (_jsx = {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 ".concat(svgWidth, " ").concat(svgHeight),
        className: "linechart"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", _LineChart_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.linechart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onMouseLeave", function onMouseLeave() {
        return _this5.stopHover();
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onMouseMove", function onMouseMove(e) {
        return _this5.getCoords(e);
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }), _jsx), __jsx("g", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }
      }, this.makeAxis(), this.makePath(), this.makeArea(), this.makeLabels(), this.state.hoverLoc ? this.createLine() : null, this.state.hoverLoc ? this.makeActivePoint() : null));
    }
  }]);

  return LineChart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // DEFAULT PROPS


LineChart.defaultProps = {
  data: [],
  color: '#2196F3',
  pointRadius: 5,
  svgHeight: 300,
  svgWidth: 900,
  xLabelSize: 20,
  yLabelSize: 80
};
/* harmony default export */ __webpack_exports__["default"] = (LineChart);

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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJMaW5lQ2hhcnQiLCJwcm9wcyIsInN0YXRlIiwiaG92ZXJMb2MiLCJhY3RpdmVQb2ludCIsImRhdGEiLCJtaW4iLCJ4IiwibWF4IiwibGVuZ3RoIiwicmVkdWNlIiwicCIsInkiLCJzdmdXaWR0aCIsInlMYWJlbFNpemUiLCJnZXRYIiwic3ZnSGVpZ2h0IiwieExhYmVsU2l6ZSIsImdZIiwiZ2V0WSIsImNvbG9yIiwicGF0aEQiLCJnZXRTdmdYIiwiZ2V0U3ZnWSIsIm1hcCIsInBvaW50IiwiaSIsImpvaW4iLCJzdHlsZXMiLCJsaW5lY2hhcnRfcGF0aCIsInN0cm9rZSIsImxpbmVjaGFydF9hcmVhIiwibGluZWNoYXJ0X2F4aXMiLCJwYWRkaW5nIiwibGluZWNoYXJ0X2xhYmVsIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiZCIsImUiLCJzdmdMb2NhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkanVzdG1lbnQiLCJ3aWR0aCIsInJlbGF0aXZlTG9jIiwiY2xpZW50WCIsImxlZnQiLCJzdmdEYXRhIiwicHVzaCIsInN2Z1giLCJzdmdZIiwiY2xvc2VzdFBvaW50IiwiYyIsIk1hdGgiLCJhYnMiLCJzdG9wSG92ZXIiLCJzZXRTdGF0ZSIsIm9uQ2hhcnRIb3ZlciIsInBvaW50UmFkaXVzIiwibGluZWNoYXJ0X3BvaW50IiwiaG92ZXJMaW5lIiwibGluZWNoYXJ0IiwiZ2V0Q29vcmRzIiwibWFrZUF4aXMiLCJtYWtlUGF0aCIsIm1ha2VBcmVhIiwibWFrZUxhYmVscyIsImNyZWF0ZUxpbmUiLCJtYWtlQWN0aXZlUG9pbnQiLCJS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O0FBRUE7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiYTNiYzE0ODZlYzcyZDA0YWE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpbmVDaGFydC5tb2R1bGUuY3NzXCJcclxuXHJcbmNsYXNzIExpbmVDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgaG92ZXJMb2M6IG51bGwsXHJcbiAgICAgICAgYWN0aXZlUG9pbnQ6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR0VUIFggJiBZIHx8IE1BWCAmIE1JTlxyXG4gICAgZ2V0WCgpe1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjogZGF0YVswXS54LFxyXG4gICAgICAgIG1heDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0WSgpe1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjogZGF0YS5yZWR1Y2UoKG1pbiwgcCkgPT4gcC55IDwgbWluID8gcC55IDogbWluLCBkYXRhWzBdLnkpLFxyXG4gICAgICAgIG1heDogZGF0YS5yZWR1Y2UoKG1heCwgcCkgPT4gcC55ID4gbWF4ID8gcC55IDogbWF4LCBkYXRhWzBdLnkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEdFVCBTVkcgQ09PUkRJTkFURVNcclxuICAgIGdldFN2Z1goeCkge1xyXG4gICAgICBjb25zdCB7c3ZnV2lkdGgsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIHlMYWJlbFNpemUgKyAoeCAvIHRoaXMuZ2V0WCgpLm1heCAqIChzdmdXaWR0aCAtIHlMYWJlbFNpemUpKTtcclxuICAgIH1cclxuICAgIGdldFN2Z1koeSkge1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCB4TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGdZID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHJldHVybiAoKHN2Z0hlaWdodCAtIHhMYWJlbFNpemUpICogZ1kubWF4IC0gKHN2Z0hlaWdodCAtIHhMYWJlbFNpemUpICogeSkgLyAoZ1kubWF4IC0gZ1kubWluKTtcclxuICAgIH1cclxuICAgIC8vIEJVSUxEIFNWRyBQQVRIXHJcbiAgICBtYWtlUGF0aCgpIHtcclxuICAgICAgY29uc3Qge2RhdGEsIGNvbG9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfcGF0aH0gZD17cGF0aER9IHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19IC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBTSEFERUQgQVJFQVxyXG4gICAgbWFrZUFyZWEoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBjb25zdCB5ID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHBhdGhEICs9IFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1heCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIlxyXG4gICAgICArIFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1pbikgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIjtcclxuICBcclxuICAgICAgcmV0dXJuIDxwYXRoIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9hcmVhfSBkPXtwYXRoRH0gLz5cclxuICAgIH1cclxuICAgIC8vIEJVSUxEIEdSSUQgQVhJU1xyXG4gICAgbWFrZUF4aXMoKSB7XHJcbiAgICAgIGNvbnN0IHt5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKTtcclxuICAgICAgY29uc3QgeSA9IHRoaXMuZ2V0WSgpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9heGlzfT5cclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPXt0aGlzLmdldFN2Z1goeC5taW4pIC0geUxhYmVsU2l6ZX0geTE9e3RoaXMuZ2V0U3ZnWSh5Lm1pbil9XHJcbiAgICAgICAgICAgIHgyPXt0aGlzLmdldFN2Z1goeC5tYXgpfSB5Mj17dGhpcy5nZXRTdmdZKHkubWluKX1cclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiIC8+XHJcbiAgICAgICAgICA8bGluZVxyXG4gICAgICAgICAgICB4MT17dGhpcy5nZXRTdmdYKHgubWluKSAtIHlMYWJlbFNpemV9IHkxPXt0aGlzLmdldFN2Z1koeS5tYXgpfVxyXG4gICAgICAgICAgICB4Mj17dGhpcy5nZXRTdmdYKHgubWF4KX0geTI9e3RoaXMuZ2V0U3ZnWSh5Lm1heCl9XHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjVcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIG1ha2VMYWJlbHMoKXtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgc3ZnV2lkdGgsIHhMYWJlbFNpemUsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgcGFkZGluZyA9IDU7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZyBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfbGFiZWx9PlxyXG4gICAgICAgICAgey8qIFkgQVhJUyBMQUJFTFMgKi99XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAyMClgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5tYXgudG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAke3N2Z0hlaWdodCAtIHhMYWJlbFNpemUgLSBwYWRkaW5nfSlgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5taW4udG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICB7LyogWCBBWElTIExBQkVMUyAqL31cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemV9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhWzBdLmQgfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7c3ZnV2lkdGh9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cImVuZFwiPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC0gMV0uZCB9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICAvLyBGSU5EIENMT1NFU1QgUE9JTlQgVE8gTU9VU0VcclxuICAgIGdldENvb3JkcyhlKXtcclxuICAgICAgY29uc3Qge3N2Z1dpZHRoLCBkYXRhLCB5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHN2Z0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVjaGFydFwiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgYWRqdXN0bWVudCA9IChzdmdMb2NhdGlvbi53aWR0aCAtIHN2Z1dpZHRoKSAvIDI7IC8vdGFrZXMgcGFkZGluZyBpbnRvIGNvbnNpZGVyYXRpb25cclxuICAgICAgY29uc3QgcmVsYXRpdmVMb2MgPSBlLmNsaWVudFggLSBzdmdMb2NhdGlvbi5sZWZ0IC0gYWRqdXN0bWVudDtcclxuICBcclxuICAgICAgbGV0IHN2Z0RhdGEgPSBbXTtcclxuICAgICAgZGF0YS5tYXAoKHBvaW50LCBpKSA9PiB7XHJcbiAgICAgICAgc3ZnRGF0YS5wdXNoKHtcclxuICAgICAgICAgIHN2Z1g6IHRoaXMuZ2V0U3ZnWChwb2ludC54KSxcclxuICAgICAgICAgIHN2Z1k6IHRoaXMuZ2V0U3ZnWShwb2ludC55KSxcclxuICAgICAgICAgIGQ6IHBvaW50LmQsXHJcbiAgICAgICAgICBwOiBwb2ludC5wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBsZXQgY2xvc2VzdFBvaW50ID0ge307XHJcbiAgICAgIGZvcihsZXQgaSA9IDAsIGMgPSA1MDA7IGkgPCBzdmdEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoIE1hdGguYWJzKHN2Z0RhdGFbaV0uc3ZnWCAtIHRoaXMuc3RhdGUuaG92ZXJMb2MpIDw9IGMgKXtcclxuICAgICAgICAgIGMgPSBNYXRoLmFicyhzdmdEYXRhW2ldLnN2Z1ggLSB0aGlzLnN0YXRlLmhvdmVyTG9jKTtcclxuICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHN2Z0RhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmKHJlbGF0aXZlTG9jIC0geUxhYmVsU2l6ZSA8IDApe1xyXG4gICAgICAgIHRoaXMuc3RvcEhvdmVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBob3ZlckxvYzogcmVsYXRpdmVMb2MsXHJcbiAgICAgICAgICBhY3RpdmVQb2ludDogY2xvc2VzdFBvaW50XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihyZWxhdGl2ZUxvYywgY2xvc2VzdFBvaW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU1RPUCBIT1ZFUlxyXG4gICAgc3RvcEhvdmVyKCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyTG9jOiBudWxsLCBhY3RpdmVQb2ludDogbnVsbH0pO1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihudWxsLCBudWxsKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgQUNUSVZFIFBPSU5UXHJcbiAgICBtYWtlQWN0aXZlUG9pbnQoKXtcclxuICAgICAgY29uc3Qge2NvbG9yLCBwb2ludFJhZGl1c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9wb2ludH1cclxuICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19XHJcbiAgICAgICAgICByPXtwb2ludFJhZGl1c31cclxuICAgICAgICAgIGN4PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50LnN2Z1h9XHJcbiAgICAgICAgICBjeT17dGhpcy5zdGF0ZS5hY3RpdmVQb2ludC5zdmdZfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBNQUtFIEhPVkVSIExJTkVcclxuICAgIGNyZWF0ZUxpbmUoKXtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgeExhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaW5lIGNsYXNzTmFtZT17c3R5bGVzLmhvdmVyTGluZX1cclxuICAgICAgICAgIHgxPXt0aGlzLnN0YXRlLmhvdmVyTG9jfSB5MT17LTh9XHJcbiAgICAgICAgICB4Mj17dGhpcy5zdGF0ZS5ob3ZlckxvY30geTI9e3N2Z0hlaWdodCAtIHhMYWJlbFNpemV9IC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgc3ZnV2lkdGh9ID0gdGhpcy5wcm9wcztcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnICB3aWR0aD17c3ZnV2lkdGh9IGhlaWdodD17c3ZnSGVpZ2h0fSB2aWV3Qm94PXtgMCAwICR7c3ZnV2lkdGh9ICR7c3ZnSGVpZ2h0fWB9IGNsYXNzTmFtZT0nbGluZWNoYXJ0JyBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnR9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsgKCkgPT4gdGhpcy5zdG9wSG92ZXIoKSB9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyAoZSkgPT4gdGhpcy5nZXRDb29yZHMoZSkgfSA+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAge3RoaXMubWFrZUF4aXMoKX1cclxuICAgICAgICAgICAge3RoaXMubWFrZVBhdGgoKX1cclxuICAgICAgICAgICAge3RoaXMubWFrZUFyZWEoKX1cclxuICAgICAgICAgICAge3RoaXMubWFrZUxhYmVscygpfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5ob3ZlckxvYyA/IHRoaXMuY3JlYXRlTGluZSgpIDogbnVsbH1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaG92ZXJMb2MgPyB0aGlzLm1ha2VBY3RpdmVQb2ludCgpIDogbnVsbH1cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gREVGQVVMVCBQUk9QU1xyXG4gIExpbmVDaGFydC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGNvbG9yOiAnIzIxOTZGMycsXHJcbiAgICBwb2ludFJhZGl1czogNSxcclxuICAgIHN2Z0hlaWdodDogMzAwLFxyXG4gICAgc3ZnV2lkdGg6IDkwMCxcclxuICAgIHhMYWJlbFNpemU6IDIwLFxyXG4gICAgeUxhYmVsU2l6ZTogODBcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSJdLCJzb3VyY2VSb290IjoiIn0=