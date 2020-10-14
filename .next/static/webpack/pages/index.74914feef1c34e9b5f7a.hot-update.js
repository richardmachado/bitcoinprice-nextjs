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
        className: "linechart_path",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJkYXRhIiwibWluIiwieCIsIm1heCIsImxlbmd0aCIsInJlZHVjZSIsInAiLCJ5Iiwic3ZnV2lkdGgiLCJ5TGFiZWxTaXplIiwiZ2V0WCIsInN2Z0hlaWdodCIsInhMYWJlbFNpemUiLCJnWSIsImdldFkiLCJjb2xvciIsInBhdGhEIiwiZ2V0U3ZnWCIsImdldFN2Z1kiLCJtYXAiLCJwb2ludCIsImkiLCJqb2luIiwic3Ryb2tlIiwic3R5bGVzIiwibGluZWNoYXJ0X2FyZWEiLCJsaW5lY2hhcnRfYXhpcyIsInBhZGRpbmciLCJsaW5lY2hhcnRfbGFiZWwiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJkIiwiZSIsInN2Z0xvY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYWRqdXN0bWVudCIsIndpZHRoIiwicmVsYXRpdmVMb2MiLCJjbGllbnRYIiwibGVmdCIsInN2Z0RhdGEiLCJwdXNoIiwic3ZnWCIsInN2Z1kiLCJjbG9zZXN0UG9pbnQiLCJjIiwiTWF0aCIsImFicyIsInN0b3BIb3ZlciIsInNldFN0YXRlIiwib25DaGFydEhvdmVyIiwicG9pbnRSYWRpdXMiLCJsaW5lY2hhcnRfcG9pbnQiLCJob3ZlckxpbmUiLCJsaW5lY2hhcnQiLCJnZXRDb29yZHMiLCJtYWtlQXhpcyIsIm1ha2VQYXRoIiwibWFrZUFyZWEiLCJtYWtlTGFiZWxzIiwiY3JlYXRlTGluZSIsIm1ha2VBY3RpdmVQb2ludCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsUzs7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TSxNQUFJLENBQUNOLFNBQUwsRUFBTjtBQUFBLFNBRHJCO0FBRU0sbUJBQVcsRUFBRyxxQkFBQ2xCLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUN5QixTQUFMLENBQWV6QixDQUFmLENBQVA7QUFBQSxTQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUswQixRQUFMLEVBREgsRUFFRyxLQUFLQyxRQUFMLEVBRkgsRUFHRyxLQUFLQyxRQUFMLEVBSEgsRUFJRyxLQUFLQyxVQUFMLEVBSkgsRUFLRyxLQUFLakUsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLEtBQUtpRSxVQUFMLEVBQXRCLEdBQTBDLElBTDdDLEVBTUcsS0FBS2xFLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixLQUFLa0UsZUFBTCxFQUF0QixHQUErQyxJQU5sRCxDQUhGLENBREY7QUFjRDs7OztFQXZMbUJDLDRDQUFLLENBQUNDLFMsR0F5TDVCOzs7QUFDQXZFLFNBQVMsQ0FBQ3dFLFlBQVYsR0FBeUI7QUFDdkJuRSxNQUFJLEVBQUUsRUFEaUI7QUFFdkJlLE9BQUssRUFBRSxTQUZnQjtBQUd2QnVDLGFBQVcsRUFBRSxDQUhVO0FBSXZCM0MsV0FBUyxFQUFFLEdBSlk7QUFLdkJILFVBQVEsRUFBRSxHQUxhO0FBTXZCSSxZQUFVLEVBQUUsRUFOVztBQU92QkgsWUFBVSxFQUFFO0FBUFcsQ0FBekI7QUFVZWQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ5MTRmZWVmMWMzNGU5YjVmN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGluZUNoYXJ0Lm1vZHVsZS5jc3NcIlxyXG5cclxuY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBob3ZlckxvYzogbnVsbCxcclxuICAgICAgICBhY3RpdmVQb2ludDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHRVQgWCAmIFkgfHwgTUFYICYgTUlOXHJcbiAgICBnZXRYKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhWzBdLngsXHJcbiAgICAgICAgbWF4OiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRZKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhLnJlZHVjZSgobWluLCBwKSA9PiBwLnkgPCBtaW4gPyBwLnkgOiBtaW4sIGRhdGFbMF0ueSksXHJcbiAgICAgICAgbWF4OiBkYXRhLnJlZHVjZSgobWF4LCBwKSA9PiBwLnkgPiBtYXggPyBwLnkgOiBtYXgsIGRhdGFbMF0ueSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR0VUIFNWRyBDT09SRElOQVRFU1xyXG4gICAgZ2V0U3ZnWCh4KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdXaWR0aCwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4geUxhYmVsU2l6ZSArICh4IC8gdGhpcy5nZXRYKCkubWF4ICogKHN2Z1dpZHRoIC0geUxhYmVsU2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ZnWSh5KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHhMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgZ1kgPSB0aGlzLmdldFkoKTtcclxuICAgICAgcmV0dXJuICgoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiBnWS5tYXggLSAoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiB5KSAvIChnWS5tYXggLSBnWS5taW4pO1xyXG4gICAgfVxyXG4gICAgLy8gQlVJTEQgU1ZHIFBBVEhcclxuICAgIG1ha2VQYXRoKCkge1xyXG4gICAgICBjb25zdCB7ZGF0YSwgY29sb3J9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IHBhdGhEID0gXCJNIFwiICsgdGhpcy5nZXRTdmdYKGRhdGFbMF0ueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShkYXRhWzBdLnkpICsgXCIgXCI7XHJcbiAgXHJcbiAgICAgIHBhdGhEICs9IGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkwgXCIgKyB0aGlzLmdldFN2Z1gocG9pbnQueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShwb2ludC55KSArIFwiIFwiO1xyXG4gICAgICB9KS5qb2luKFwiXCIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxpbmVjaGFydF9wYXRoXCIgZD17cGF0aER9IHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19IC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBTSEFERUQgQVJFQVxyXG4gICAgbWFrZUFyZWEoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBjb25zdCB5ID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHBhdGhEICs9IFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1heCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIlxyXG4gICAgICArIFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1pbikgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIjtcclxuICBcclxuICAgICAgcmV0dXJuIDxwYXRoIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9hcmVhfSBkPXtwYXRoRH0gLz5cclxuICAgIH1cclxuICAgIC8vIEJVSUxEIEdSSUQgQVhJU1xyXG4gICAgbWFrZUF4aXMoKSB7XHJcbiAgICAgIGNvbnN0IHt5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKTtcclxuICAgICAgY29uc3QgeSA9IHRoaXMuZ2V0WSgpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9heGlzfT5cclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPXt0aGlzLmdldFN2Z1goeC5taW4pIC0geUxhYmVsU2l6ZX0geTE9e3RoaXMuZ2V0U3ZnWSh5Lm1pbil9XHJcbiAgICAgICAgICAgIHgyPXt0aGlzLmdldFN2Z1goeC5tYXgpfSB5Mj17dGhpcy5nZXRTdmdZKHkubWluKX1cclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiIC8+XHJcbiAgICAgICAgICA8bGluZVxyXG4gICAgICAgICAgICB4MT17dGhpcy5nZXRTdmdYKHgubWluKSAtIHlMYWJlbFNpemV9IHkxPXt0aGlzLmdldFN2Z1koeS5tYXgpfVxyXG4gICAgICAgICAgICB4Mj17dGhpcy5nZXRTdmdYKHgubWF4KX0geTI9e3RoaXMuZ2V0U3ZnWSh5Lm1heCl9XHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjVcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIG1ha2VMYWJlbHMoKXtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgc3ZnV2lkdGgsIHhMYWJlbFNpemUsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgcGFkZGluZyA9IDU7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZyBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfbGFiZWx9PlxyXG4gICAgICAgICAgey8qIFkgQVhJUyBMQUJFTFMgKi99XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAyMClgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5tYXgudG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAke3N2Z0hlaWdodCAtIHhMYWJlbFNpemUgLSBwYWRkaW5nfSlgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5taW4udG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICB7LyogWCBBWElTIExBQkVMUyAqL31cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemV9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhWzBdLmQgfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7c3ZnV2lkdGh9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cImVuZFwiPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC0gMV0uZCB9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICAvLyBGSU5EIENMT1NFU1QgUE9JTlQgVE8gTU9VU0VcclxuICAgIGdldENvb3JkcyhlKXtcclxuICAgICAgY29uc3Qge3N2Z1dpZHRoLCBkYXRhLCB5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHN2Z0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVjaGFydFwiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgYWRqdXN0bWVudCA9IChzdmdMb2NhdGlvbi53aWR0aCAtIHN2Z1dpZHRoKSAvIDI7IC8vdGFrZXMgcGFkZGluZyBpbnRvIGNvbnNpZGVyYXRpb25cclxuICAgICAgY29uc3QgcmVsYXRpdmVMb2MgPSBlLmNsaWVudFggLSBzdmdMb2NhdGlvbi5sZWZ0IC0gYWRqdXN0bWVudDtcclxuICBcclxuICAgICAgbGV0IHN2Z0RhdGEgPSBbXTtcclxuICAgICAgZGF0YS5tYXAoKHBvaW50LCBpKSA9PiB7XHJcbiAgICAgICAgc3ZnRGF0YS5wdXNoKHtcclxuICAgICAgICAgIHN2Z1g6IHRoaXMuZ2V0U3ZnWChwb2ludC54KSxcclxuICAgICAgICAgIHN2Z1k6IHRoaXMuZ2V0U3ZnWShwb2ludC55KSxcclxuICAgICAgICAgIGQ6IHBvaW50LmQsXHJcbiAgICAgICAgICBwOiBwb2ludC5wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBsZXQgY2xvc2VzdFBvaW50ID0ge307XHJcbiAgICAgIGZvcihsZXQgaSA9IDAsIGMgPSA1MDA7IGkgPCBzdmdEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoIE1hdGguYWJzKHN2Z0RhdGFbaV0uc3ZnWCAtIHRoaXMuc3RhdGUuaG92ZXJMb2MpIDw9IGMgKXtcclxuICAgICAgICAgIGMgPSBNYXRoLmFicyhzdmdEYXRhW2ldLnN2Z1ggLSB0aGlzLnN0YXRlLmhvdmVyTG9jKTtcclxuICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHN2Z0RhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmKHJlbGF0aXZlTG9jIC0geUxhYmVsU2l6ZSA8IDApe1xyXG4gICAgICAgIHRoaXMuc3RvcEhvdmVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBob3ZlckxvYzogcmVsYXRpdmVMb2MsXHJcbiAgICAgICAgICBhY3RpdmVQb2ludDogY2xvc2VzdFBvaW50XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihyZWxhdGl2ZUxvYywgY2xvc2VzdFBvaW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU1RPUCBIT1ZFUlxyXG4gICAgc3RvcEhvdmVyKCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyTG9jOiBudWxsLCBhY3RpdmVQb2ludDogbnVsbH0pO1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihudWxsLCBudWxsKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgQUNUSVZFIFBPSU5UXHJcbiAgICBtYWtlQWN0aXZlUG9pbnQoKXtcclxuICAgICAgY29uc3Qge2NvbG9yLCBwb2ludFJhZGl1c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9wb2ludH1cclxuICAgICAgICAgIHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19XHJcbiAgICAgICAgICByPXtwb2ludFJhZGl1c31cclxuICAgICAgICAgIGN4PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50LnN2Z1h9XHJcbiAgICAgICAgICBjeT17dGhpcy5zdGF0ZS5hY3RpdmVQb2ludC5zdmdZfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBNQUtFIEhPVkVSIExJTkVcclxuICAgIGNyZWF0ZUxpbmUoKXtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgeExhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaW5lIGNsYXNzTmFtZT17c3R5bGVzLmhvdmVyTGluZX1cclxuICAgICAgICAgIHgxPXt0aGlzLnN0YXRlLmhvdmVyTG9jfSB5MT17LTh9XHJcbiAgICAgICAgICB4Mj17dGhpcy5zdGF0ZS5ob3ZlckxvY30geTI9e3N2Z0hlaWdodCAtIHhMYWJlbFNpemV9IC8+XHJcbiAgICAgIClcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgc3ZnV2lkdGh9ID0gdGhpcy5wcm9wcztcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnICB3aWR0aD17c3ZnV2lkdGh9IGhlaWdodD17c3ZnSGVpZ2h0fSB2aWV3Qm94PXtgMCAwICR7c3ZnV2lkdGh9ICR7c3ZnSGVpZ2h0fWB9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydH1cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyAoKSA9PiB0aGlzLnN0b3BIb3ZlcigpIH1cclxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17IChlKSA9PiB0aGlzLmdldENvb3JkcyhlKSB9ID5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlQXhpcygpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlUGF0aCgpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlQXJlYSgpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlTGFiZWxzKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gdGhpcy5jcmVhdGVMaW5lKCkgOiBudWxsfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5ob3ZlckxvYyA/IHRoaXMubWFrZUFjdGl2ZVBvaW50KCkgOiBudWxsfVxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBERUZBVUxUIFBST1BTXHJcbiAgTGluZUNoYXJ0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgY29sb3I6ICcjMjE5NkYzJyxcclxuICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgc3ZnSGVpZ2h0OiAzMDAsXHJcbiAgICBzdmdXaWR0aDogOTAwLFxyXG4gICAgeExhYmVsU2l6ZTogMjAsXHJcbiAgICB5TGFiZWxTaXplOiA4MFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==