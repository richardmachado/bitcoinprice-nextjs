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
        className: "linechart_axis",
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
        className: "linechart_label",
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
        className: "linechart_point",
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
        className: "hoverLine",
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
        className: 'linechart',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJkYXRhIiwibWluIiwieCIsIm1heCIsImxlbmd0aCIsInJlZHVjZSIsInAiLCJ5Iiwic3ZnV2lkdGgiLCJ5TGFiZWxTaXplIiwiZ2V0WCIsInN2Z0hlaWdodCIsInhMYWJlbFNpemUiLCJnWSIsImdldFkiLCJjb2xvciIsInBhdGhEIiwiZ2V0U3ZnWCIsImdldFN2Z1kiLCJtYXAiLCJwb2ludCIsImkiLCJqb2luIiwic3R5bGVzIiwibGluZWNoYXJ0X3BhdGgiLCJzdHJva2UiLCJsaW5lY2hhcnRfYXJlYSIsInBhZGRpbmciLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJkIiwiZSIsInN2Z0xvY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYWRqdXN0bWVudCIsIndpZHRoIiwicmVsYXRpdmVMb2MiLCJjbGllbnRYIiwibGVmdCIsInN2Z0RhdGEiLCJwdXNoIiwic3ZnWCIsInN2Z1kiLCJjbG9zZXN0UG9pbnQiLCJjIiwiTWF0aCIsImFicyIsInN0b3BIb3ZlciIsInNldFN0YXRlIiwib25DaGFydEhvdmVyIiwicG9pbnRSYWRpdXMiLCJnZXRDb29yZHMiLCJtYWtlQXhpcyIsIm1ha2VQYXRoIiwibWFrZUFyZWEiLCJtYWtlTGFiZWxzIiwiY3JlYXRlTGluZSIsIm1ha2VBY3RpdmVQb2ludCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsUzs7Ozs7QUFDRixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUt1QixRQUFMLEVBREgsRUFFRyxLQUFLQyxRQUFMLEVBRkgsRUFHRyxLQUFLQyxRQUFMLEVBSEgsRUFJRyxLQUFLQyxVQUFMLEVBSkgsRUFLRyxLQUFLN0QsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLEtBQUs2RCxVQUFMLEVBQXRCLEdBQTBDLElBTDdDLEVBTUcsS0FBSzlELEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixLQUFLOEQsZUFBTCxFQUF0QixHQUErQyxJQU5sRCxDQUhGLENBREY7QUFjRDs7OztFQXZMbUJDLDRDQUFLLENBQUNDLFMsR0F5TDVCOzs7QUFDQW5FLFNBQVMsQ0FBQ29FLFlBQVYsR0FBeUI7QUFDdkIvRCxNQUFJLEVBQUUsRUFEaUI7QUFFdkJlLE9BQUssRUFBRSxTQUZnQjtBQUd2QnNDLGFBQVcsRUFBRSxDQUhVO0FBSXZCMUMsV0FBUyxFQUFFLEdBSlk7QUFLdkJILFVBQVEsRUFBRSxHQUxhO0FBTXZCSSxZQUFVLEVBQUUsRUFOVztBQU92QkgsWUFBVSxFQUFFO0FBUFcsQ0FBekI7QUFVZWQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWY1NDNmYjNjNmVkN2ZmMTRhZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGluZUNoYXJ0Lm1vZHVsZS5jc3NcIlxyXG5cclxuY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBob3ZlckxvYzogbnVsbCxcclxuICAgICAgICBhY3RpdmVQb2ludDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHRVQgWCAmIFkgfHwgTUFYICYgTUlOXHJcbiAgICBnZXRYKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhWzBdLngsXHJcbiAgICAgICAgbWF4OiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRZKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhLnJlZHVjZSgobWluLCBwKSA9PiBwLnkgPCBtaW4gPyBwLnkgOiBtaW4sIGRhdGFbMF0ueSksXHJcbiAgICAgICAgbWF4OiBkYXRhLnJlZHVjZSgobWF4LCBwKSA9PiBwLnkgPiBtYXggPyBwLnkgOiBtYXgsIGRhdGFbMF0ueSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR0VUIFNWRyBDT09SRElOQVRFU1xyXG4gICAgZ2V0U3ZnWCh4KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdXaWR0aCwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4geUxhYmVsU2l6ZSArICh4IC8gdGhpcy5nZXRYKCkubWF4ICogKHN2Z1dpZHRoIC0geUxhYmVsU2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ZnWSh5KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHhMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgZ1kgPSB0aGlzLmdldFkoKTtcclxuICAgICAgcmV0dXJuICgoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiBnWS5tYXggLSAoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiB5KSAvIChnWS5tYXggLSBnWS5taW4pO1xyXG4gICAgfVxyXG4gICAgLy8gQlVJTEQgU1ZHIFBBVEhcclxuICAgIG1ha2VQYXRoKCkge1xyXG4gICAgICBjb25zdCB7ZGF0YSwgY29sb3J9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IHBhdGhEID0gXCJNIFwiICsgdGhpcy5nZXRTdmdYKGRhdGFbMF0ueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShkYXRhWzBdLnkpICsgXCIgXCI7XHJcbiAgXHJcbiAgICAgIHBhdGhEICs9IGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkwgXCIgKyB0aGlzLmdldFN2Z1gocG9pbnQueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShwb2ludC55KSArIFwiIFwiO1xyXG4gICAgICB9KS5qb2luKFwiXCIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9wYXRofSBkPXtwYXRoRH0gc3R5bGU9e3tzdHJva2U6IGNvbG9yfX0gLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIEJVSUxEIFNIQURFRCBBUkVBXHJcbiAgICBtYWtlQXJlYSgpIHtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IHBhdGhEID0gXCJNIFwiICsgdGhpcy5nZXRTdmdYKGRhdGFbMF0ueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShkYXRhWzBdLnkpICsgXCIgXCI7XHJcbiAgXHJcbiAgICAgIHBhdGhEICs9IGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkwgXCIgKyB0aGlzLmdldFN2Z1gocG9pbnQueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShwb2ludC55KSArIFwiIFwiO1xyXG4gICAgICB9KS5qb2luKFwiXCIpO1xyXG4gIFxyXG4gICAgICBjb25zdCB4ID0gdGhpcy5nZXRYKCk7XHJcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmdldFkoKTtcclxuICAgICAgcGF0aEQgKz0gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHgubWF4KSArIFwiIFwiICsgdGhpcy5nZXRTdmdZKHkubWluKSArIFwiIFwiXHJcbiAgICAgICsgXCJMIFwiICsgdGhpcy5nZXRTdmdYKHgubWluKSArIFwiIFwiICsgdGhpcy5nZXRTdmdZKHkubWluKSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICByZXR1cm4gPHBhdGggY2xhc3NOYW1lPXtzdHlsZXMubGluZWNoYXJ0X2FyZWF9IGQ9e3BhdGhEfSAvPlxyXG4gICAgfVxyXG4gICAgLy8gQlVJTEQgR1JJRCBBWElTXHJcbiAgICBtYWtlQXhpcygpIHtcclxuICAgICAgY29uc3Qge3lMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBjb25zdCB5ID0gdGhpcy5nZXRZKCk7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwibGluZWNoYXJ0X2F4aXNcIj5cclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPXt0aGlzLmdldFN2Z1goeC5taW4pIC0geUxhYmVsU2l6ZX0geTE9e3RoaXMuZ2V0U3ZnWSh5Lm1pbil9XHJcbiAgICAgICAgICAgIHgyPXt0aGlzLmdldFN2Z1goeC5tYXgpfSB5Mj17dGhpcy5nZXRTdmdZKHkubWluKX1cclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiIC8+XHJcbiAgICAgICAgICA8bGluZVxyXG4gICAgICAgICAgICB4MT17dGhpcy5nZXRTdmdYKHgubWluKSAtIHlMYWJlbFNpemV9IHkxPXt0aGlzLmdldFN2Z1koeS5tYXgpfVxyXG4gICAgICAgICAgICB4Mj17dGhpcy5nZXRTdmdYKHgubWF4KX0geTI9e3RoaXMuZ2V0U3ZnWSh5Lm1heCl9XHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjVcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIG1ha2VMYWJlbHMoKXtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgc3ZnV2lkdGgsIHhMYWJlbFNpemUsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgcGFkZGluZyA9IDU7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJsaW5lY2hhcnRfbGFiZWxcIj5cclxuICAgICAgICAgIHsvKiBZIEFYSVMgTEFCRUxTICovfVxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eUxhYmVsU2l6ZS8yfSwgMjApYH0gdGV4dEFuY2hvcj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICB7dGhpcy5nZXRZKCkubWF4LnRvTG9jYWxlU3RyaW5nKCd1cy1FTicseyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnIH0pfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eUxhYmVsU2l6ZS8yfSwgJHtzdmdIZWlnaHQgLSB4TGFiZWxTaXplIC0gcGFkZGluZ30pYH0gdGV4dEFuY2hvcj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICB7dGhpcy5nZXRZKCkubWluLnRvTG9jYWxlU3RyaW5nKCd1cy1FTicseyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnIH0pfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgey8qIFggQVhJUyBMQUJFTFMgKi99XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplfSwgJHtzdmdIZWlnaHR9KWB9IHRleHRBbmNob3I9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVswXS5kIH1cclxuICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3N2Z1dpZHRofSwgJHtzdmdIZWlnaHR9KWB9IHRleHRBbmNob3I9XCJlbmRcIj5cclxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAtIDFdLmQgfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgLy8gRklORCBDTE9TRVNUIFBPSU5UIFRPIE1PVVNFXHJcbiAgICBnZXRDb29yZHMoZSl7XHJcbiAgICAgIGNvbnN0IHtzdmdXaWR0aCwgZGF0YSwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBzdmdMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5lY2hhcnRcIilbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGFkanVzdG1lbnQgPSAoc3ZnTG9jYXRpb24ud2lkdGggLSBzdmdXaWR0aCkgLyAyOyAvL3Rha2VzIHBhZGRpbmcgaW50byBjb25zaWRlcmF0aW9uXHJcbiAgICAgIGNvbnN0IHJlbGF0aXZlTG9jID0gZS5jbGllbnRYIC0gc3ZnTG9jYXRpb24ubGVmdCAtIGFkanVzdG1lbnQ7XHJcbiAgXHJcbiAgICAgIGxldCBzdmdEYXRhID0gW107XHJcbiAgICAgIGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHN2Z0RhdGEucHVzaCh7XHJcbiAgICAgICAgICBzdmdYOiB0aGlzLmdldFN2Z1gocG9pbnQueCksXHJcbiAgICAgICAgICBzdmdZOiB0aGlzLmdldFN2Z1kocG9pbnQueSksXHJcbiAgICAgICAgICBkOiBwb2ludC5kLFxyXG4gICAgICAgICAgcDogcG9pbnQucFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgbGV0IGNsb3Nlc3RQb2ludCA9IHt9O1xyXG4gICAgICBmb3IobGV0IGkgPSAwLCBjID0gNTAwOyBpIDwgc3ZnRGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyhzdmdEYXRhW2ldLnN2Z1ggLSB0aGlzLnN0YXRlLmhvdmVyTG9jKSA8PSBjICl7XHJcbiAgICAgICAgICBjID0gTWF0aC5hYnMoc3ZnRGF0YVtpXS5zdmdYIC0gdGhpcy5zdGF0ZS5ob3ZlckxvYyk7XHJcbiAgICAgICAgICBjbG9zZXN0UG9pbnQgPSBzdmdEYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZihyZWxhdGl2ZUxvYyAtIHlMYWJlbFNpemUgPCAwKXtcclxuICAgICAgICB0aGlzLnN0b3BIb3ZlcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaG92ZXJMb2M6IHJlbGF0aXZlTG9jLFxyXG4gICAgICAgICAgYWN0aXZlUG9pbnQ6IGNsb3Nlc3RQb2ludFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYXJ0SG92ZXIocmVsYXRpdmVMb2MsIGNsb3Nlc3RQb2ludCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNUT1AgSE9WRVJcclxuICAgIHN0b3BIb3Zlcigpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtob3ZlckxvYzogbnVsbCwgYWN0aXZlUG9pbnQ6IG51bGx9KTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYXJ0SG92ZXIobnVsbCwgbnVsbCk7XHJcbiAgICB9XHJcbiAgICAvLyBNQUtFIEFDVElWRSBQT0lOVFxyXG4gICAgbWFrZUFjdGl2ZVBvaW50KCl7XHJcbiAgICAgIGNvbnN0IHtjb2xvciwgcG9pbnRSYWRpdXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2xpbmVjaGFydF9wb2ludCdcclxuICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19XHJcbiAgICAgICAgICByPXtwb2ludFJhZGl1c31cclxuICAgICAgICAgIGN4PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50LnN2Z1h9XHJcbiAgICAgICAgICBjeT17dGhpcy5zdGF0ZS5hY3RpdmVQb2ludC5zdmdZfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBNQUtFIEhPVkVSIExJTkVcclxuICAgIGNyZWF0ZUxpbmUoKXtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgeExhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaW5lIGNsYXNzTmFtZT0naG92ZXJMaW5lJ1xyXG4gICAgICAgICAgeDE9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IHkxPXstOH1cclxuICAgICAgICAgIHgyPXt0aGlzLnN0YXRlLmhvdmVyTG9jfSB5Mj17c3ZnSGVpZ2h0IC0geExhYmVsU2l6ZX0gLz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCBzdmdXaWR0aH0gPSB0aGlzLnByb3BzO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgIHdpZHRoPXtzdmdXaWR0aH0gaGVpZ2h0PXtzdmdIZWlnaHR9IHZpZXdCb3g9e2AwIDAgJHtzdmdXaWR0aH0gJHtzdmdIZWlnaHR9YH0gY2xhc3NOYW1lPXsnbGluZWNoYXJ0J31cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyAoKSA9PiB0aGlzLnN0b3BIb3ZlcigpIH1cclxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17IChlKSA9PiB0aGlzLmdldENvb3JkcyhlKSB9ID5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlQXhpcygpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlUGF0aCgpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlQXJlYSgpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlTGFiZWxzKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gdGhpcy5jcmVhdGVMaW5lKCkgOiBudWxsfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5ob3ZlckxvYyA/IHRoaXMubWFrZUFjdGl2ZVBvaW50KCkgOiBudWxsfVxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBERUZBVUxUIFBST1BTXHJcbiAgTGluZUNoYXJ0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgY29sb3I6ICcjMjE5NkYzJyxcclxuICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgc3ZnSGVpZ2h0OiAzMDAsXHJcbiAgICBzdmdXaWR0aDogOTAwLFxyXG4gICAgeExhYmVsU2l6ZTogMjAsXHJcbiAgICB5TGFiZWxTaXplOiA4MFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==