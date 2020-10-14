webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LineChart.js":
/*!*********************************!*\
  !*** ./components/LineChart.js ***!
  \*********************************/
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
/* harmony import */ var _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LineChart.module.css */ "./components/LineChart.module.css");
/* harmony import */ var _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_LineChart_module_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\Lambda\\Next\\BITZPRICE\\components\\LineChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var LineChart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LineChart, _React$Component);

  var _super = _createSuper(LineChart);

  function LineChart(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LineChart);

    _this = _super.call(this, props);
    _this.state = {
      hoverLoc: null,
      activePoint: null
    };
    return _this;
  } // GET X & Y || MAX & MIN


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LineChart, [{
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
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.linechart_path,
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
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.linechart_area,
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
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.linechart_axis,
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
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.linechart_label,
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
      var svgLocation = document.getElementsByClassName("linechart")[0].getBoundingClientReact();
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
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.linechart_point,
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
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.hoverLine,
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
      var _this5 = this;

      var _this$props8 = this.props,
          svgHeight = _this$props8.svgHeight,
          svgWidth = _this$props8.svgWidth;
      return __jsx("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 ".concat(svgWidth, " ").concat(svgHeight),
        className: _LineChart_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.linechart,
        onMouseLeave: function onMouseLeave() {
          return _this5.stopHover();
        },
        onMouseMove: function onMouseMove(e) {
          return _this5.getCoords(e);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 9
        }
      }, __jsx("g", {
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
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // DEFAULT PROPS


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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJkYXRhIiwibWluIiwieCIsIm1heCIsImxlbmd0aCIsInJlZHVjZSIsInAiLCJ5Iiwic3ZnV2lkdGgiLCJ5TGFiZWxTaXplIiwiZ2V0WCIsInN2Z0hlaWdodCIsInhMYWJlbFNpemUiLCJnWSIsImdldFkiLCJjb2xvciIsInBhdGhEIiwiZ2V0U3ZnWCIsImdldFN2Z1kiLCJtYXAiLCJwb2ludCIsImkiLCJqb2luIiwic3R5bGVzIiwibGluZWNoYXJ0X3BhdGgiLCJzdHJva2UiLCJsaW5lY2hhcnRfYXJlYSIsImxpbmVjaGFydF9heGlzIiwicGFkZGluZyIsImxpbmVjaGFydF9sYWJlbCIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsImQiLCJlIiwic3ZnTG9jYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlYWN0IiwiYWRqdXN0bWVudCIsIndpZHRoIiwicmVsYXRpdmVMb2MiLCJjbGllbnRYIiwibGVmdCIsInN2Z0RhdGEiLCJwdXNoIiwic3ZnWCIsInN2Z1kiLCJjbG9zZXN0UG9pbnQiLCJjIiwiTWF0aCIsImFicyIsInN0b3BIb3ZlciIsInNldFN0YXRlIiwib25DaGFydEhvdmVyIiwicG9pbnRSYWRpdXMiLCJsaW5lY2hhcnRfcG9pbnQiLCJob3ZlckxpbmUiLCJsaW5lY2hhcnQiLCJnZXRDb29yZHMiLCJtYWtlQXhpcyIsIm1ha2VQYXRoIiwibWFrZUFyZWEiLCJtYWtlTGFiZWxzIiwiY3JlYXRlTGluZSIsIm1ha2VBY3RpdmVQb2ludCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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U0FBckc7QUFDTSxvQkFBWSxFQUFHO0FBQUEsaUJBQU0sTUFBSSxDQUFDTixTQUFMLEVBQU47QUFBQSxTQURyQjtBQUVNLG1CQUFXLEVBQUcscUJBQUNsQixDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDeUIsU0FBTCxDQUFlekIsQ0FBZixDQUFQO0FBQUEsU0FGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLMEIsUUFBTCxFQURILEVBRUcsS0FBS0MsUUFBTCxFQUZILEVBR0csS0FBS0MsUUFBTCxFQUhILEVBSUcsS0FBS0MsVUFBTCxFQUpILEVBS0csS0FBS2xFLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixLQUFLa0UsVUFBTCxFQUF0QixHQUEwQyxJQUw3QyxFQU1HLEtBQUtuRSxLQUFMLENBQVdDLFFBQVgsR0FBc0IsS0FBS21FLGVBQUwsRUFBdEIsR0FBK0MsSUFObEQsQ0FIRixDQURGO0FBY0Q7Ozs7RUF2TG1CQyw0Q0FBSyxDQUFDQyxTLEdBeUw1Qjs7O0FBQ0F4RSxTQUFTLENBQUN5RSxZQUFWLEdBQXlCO0FBQ3ZCcEUsTUFBSSxFQUFFLEVBRGlCO0FBRXZCZSxPQUFLLEVBQUUsU0FGZ0I7QUFHdkJ3QyxhQUFXLEVBQUUsQ0FIVTtBQUl2QjVDLFdBQVMsRUFBRSxHQUpZO0FBS3ZCSCxVQUFRLEVBQUUsR0FMYTtBQU12QkksWUFBVSxFQUFFLEVBTlc7QUFPdkJILFlBQVUsRUFBRTtBQVBXLENBQXpCO0FBVWVkLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIwNjk4MmIwNWY1MjBmMTBjYWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpbmVDaGFydC5tb2R1bGUuY3NzXCJcclxuXHJcbmNsYXNzIExpbmVDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgaG92ZXJMb2M6IG51bGwsXHJcbiAgICAgICAgYWN0aXZlUG9pbnQ6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR0VUIFggJiBZIHx8IE1BWCAmIE1JTlxyXG4gICAgZ2V0WCgpe1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjogZGF0YVswXS54LFxyXG4gICAgICAgIG1heDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0WSgpe1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjogZGF0YS5yZWR1Y2UoKG1pbiwgcCkgPT4gcC55IDwgbWluID8gcC55IDogbWluLCBkYXRhWzBdLnkpLFxyXG4gICAgICAgIG1heDogZGF0YS5yZWR1Y2UoKG1heCwgcCkgPT4gcC55ID4gbWF4ID8gcC55IDogbWF4LCBkYXRhWzBdLnkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEdFVCBTVkcgQ09PUkRJTkFURVNcclxuICAgIGdldFN2Z1goeCkge1xyXG4gICAgICBjb25zdCB7c3ZnV2lkdGgsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIHlMYWJlbFNpemUgKyAoeCAvIHRoaXMuZ2V0WCgpLm1heCAqIChzdmdXaWR0aCAtIHlMYWJlbFNpemUpKTtcclxuICAgIH1cclxuICAgIGdldFN2Z1koeSkge1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCB4TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGdZID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHJldHVybiAoKHN2Z0hlaWdodCAtIHhMYWJlbFNpemUpICogZ1kubWF4IC0gKHN2Z0hlaWdodCAtIHhMYWJlbFNpemUpICogeSkgLyAoZ1kubWF4IC0gZ1kubWluKTtcclxuICAgIH1cclxuICAgIC8vIEJVSUxEIFNWRyBQQVRIXHJcbiAgICBtYWtlUGF0aCgpIHtcclxuICAgICAgY29uc3Qge2RhdGEsIGNvbG9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfcGF0aH0gZD17cGF0aER9IHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19IC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBTSEFERUQgQVJFQVxyXG4gICAgbWFrZUFyZWEoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBjb25zdCB5ID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHBhdGhEICs9IFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1heCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIlxyXG4gICAgICArIFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1pbikgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIjtcclxuICBcclxuICAgICAgcmV0dXJuIDxwYXRoIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9hcmVhfSBkPXtwYXRoRH0gLz5cclxuICAgIH1cclxuICAgIC8vIEJVSUxEIEdSSUQgQVhJU1xyXG4gICAgbWFrZUF4aXMoKSB7XHJcbiAgICAgIGNvbnN0IHt5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKTtcclxuICAgICAgY29uc3QgeSA9IHRoaXMuZ2V0WSgpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9heGlzfT5cclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPXt0aGlzLmdldFN2Z1goeC5taW4pIC0geUxhYmVsU2l6ZX0geTE9e3RoaXMuZ2V0U3ZnWSh5Lm1pbil9XHJcbiAgICAgICAgICAgIHgyPXt0aGlzLmdldFN2Z1goeC5tYXgpfSB5Mj17dGhpcy5nZXRTdmdZKHkubWluKX1cclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiIC8+XHJcbiAgICAgICAgICA8bGluZVxyXG4gICAgICAgICAgICB4MT17dGhpcy5nZXRTdmdYKHgubWluKSAtIHlMYWJlbFNpemV9IHkxPXt0aGlzLmdldFN2Z1koeS5tYXgpfVxyXG4gICAgICAgICAgICB4Mj17dGhpcy5nZXRTdmdYKHgubWF4KX0geTI9e3RoaXMuZ2V0U3ZnWSh5Lm1heCl9XHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjVcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIG1ha2VMYWJlbHMoKXtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgc3ZnV2lkdGgsIHhMYWJlbFNpemUsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgcGFkZGluZyA9IDU7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZyBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfbGFiZWx9PlxyXG4gICAgICAgICAgey8qIFkgQVhJUyBMQUJFTFMgKi99XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAyMClgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5tYXgudG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAke3N2Z0hlaWdodCAtIHhMYWJlbFNpemUgLSBwYWRkaW5nfSlgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5taW4udG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICB7LyogWCBBWElTIExBQkVMUyAqL31cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemV9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhWzBdLmQgfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7c3ZnV2lkdGh9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cImVuZFwiPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC0gMV0uZCB9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICAvLyBGSU5EIENMT1NFU1QgUE9JTlQgVE8gTU9VU0VcclxuICAgIGdldENvb3JkcyhlKXtcclxuICAgICAgY29uc3Qge3N2Z1dpZHRoLCBkYXRhLCB5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHN2Z0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVjaGFydFwiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlYWN0KCk7XHJcbiAgICAgIGNvbnN0IGFkanVzdG1lbnQgPSAoc3ZnTG9jYXRpb24ud2lkdGggLSBzdmdXaWR0aCkgLyAyOyAvL3Rha2VzIHBhZGRpbmcgaW50byBjb25zaWRlcmF0aW9uXHJcbiAgICAgIGNvbnN0IHJlbGF0aXZlTG9jID0gZS5jbGllbnRYIC0gc3ZnTG9jYXRpb24ubGVmdCAtIGFkanVzdG1lbnQ7XHJcbiAgXHJcbiAgICAgIGxldCBzdmdEYXRhID0gW107XHJcbiAgICAgIGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHN2Z0RhdGEucHVzaCh7XHJcbiAgICAgICAgICBzdmdYOiB0aGlzLmdldFN2Z1gocG9pbnQueCksXHJcbiAgICAgICAgICBzdmdZOiB0aGlzLmdldFN2Z1kocG9pbnQueSksXHJcbiAgICAgICAgICBkOiBwb2ludC5kLFxyXG4gICAgICAgICAgcDogcG9pbnQucFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgbGV0IGNsb3Nlc3RQb2ludCA9IHt9O1xyXG4gICAgICBmb3IobGV0IGkgPSAwLCBjID0gNTAwOyBpIDwgc3ZnRGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyhzdmdEYXRhW2ldLnN2Z1ggLSB0aGlzLnN0YXRlLmhvdmVyTG9jKSA8PSBjICl7XHJcbiAgICAgICAgICBjID0gTWF0aC5hYnMoc3ZnRGF0YVtpXS5zdmdYIC0gdGhpcy5zdGF0ZS5ob3ZlckxvYyk7XHJcbiAgICAgICAgICBjbG9zZXN0UG9pbnQgPSBzdmdEYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZihyZWxhdGl2ZUxvYyAtIHlMYWJlbFNpemUgPCAwKXtcclxuICAgICAgICB0aGlzLnN0b3BIb3ZlcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaG92ZXJMb2M6IHJlbGF0aXZlTG9jLFxyXG4gICAgICAgICAgYWN0aXZlUG9pbnQ6IGNsb3Nlc3RQb2ludFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYXJ0SG92ZXIocmVsYXRpdmVMb2MsIGNsb3Nlc3RQb2ludCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNUT1AgSE9WRVJcclxuICAgIHN0b3BIb3Zlcigpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtob3ZlckxvYzogbnVsbCwgYWN0aXZlUG9pbnQ6IG51bGx9KTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYXJ0SG92ZXIobnVsbCwgbnVsbCk7XHJcbiAgICB9XHJcbiAgICAvLyBNQUtFIEFDVElWRSBQT0lOVFxyXG4gICAgbWFrZUFjdGl2ZVBvaW50KCl7XHJcbiAgICAgIGNvbnN0IHtjb2xvciwgcG9pbnRSYWRpdXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfcG9pbnR9XHJcbiAgICAgICAgICBzdHlsZT17e3N0cm9rZTogY29sb3J9fVxyXG4gICAgICAgICAgcj17cG9pbnRSYWRpdXN9XHJcbiAgICAgICAgICBjeD17dGhpcy5zdGF0ZS5hY3RpdmVQb2ludC5zdmdYfVxyXG4gICAgICAgICAgY3k9e3RoaXMuc3RhdGUuYWN0aXZlUG9pbnQuc3ZnWX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gTUFLRSBIT1ZFUiBMSU5FXHJcbiAgICBjcmVhdGVMaW5lKCl7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHhMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGluZSBjbGFzc05hbWU9e3N0eWxlcy5ob3ZlckxpbmV9XHJcbiAgICAgICAgICB4MT17dGhpcy5zdGF0ZS5ob3ZlckxvY30geTE9ey04fVxyXG4gICAgICAgICAgeDI9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IHkyPXtzdmdIZWlnaHQgLSB4TGFiZWxTaXplfSAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHN2Z1dpZHRofSA9IHRoaXMucHJvcHM7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyAgd2lkdGg9e3N2Z1dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gdmlld0JveD17YDAgMCAke3N2Z1dpZHRofSAke3N2Z0hlaWdodH1gfSBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnR9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsgKCkgPT4gdGhpcy5zdG9wSG92ZXIoKSB9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyAoZSkgPT4gdGhpcy5nZXRDb29yZHMoZSkgfSA+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAge3RoaXMubWFrZUF4aXMoKX1cclxuICAgICAgICAgICAge3RoaXMubWFrZVBhdGgoKX1cclxuICAgICAgICAgICAge3RoaXMubWFrZUFyZWEoKX1cclxuICAgICAgICAgICAge3RoaXMubWFrZUxhYmVscygpfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5ob3ZlckxvYyA/IHRoaXMuY3JlYXRlTGluZSgpIDogbnVsbH1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaG92ZXJMb2MgPyB0aGlzLm1ha2VBY3RpdmVQb2ludCgpIDogbnVsbH1cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gREVGQVVMVCBQUk9QU1xyXG4gIExpbmVDaGFydC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGNvbG9yOiAnIzIxOTZGMycsXHJcbiAgICBwb2ludFJhZGl1czogNSxcclxuICAgIHN2Z0hlaWdodDogMzAwLFxyXG4gICAgc3ZnV2lkdGg6IDkwMCxcclxuICAgIHhMYWJlbFNpemU6IDIwLFxyXG4gICAgeUxhYmVsU2l6ZTogODBcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=