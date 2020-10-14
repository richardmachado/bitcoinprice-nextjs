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
        className: style.linechart_point,
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
        className: stylehoverLine,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJkYXRhIiwibWluIiwieCIsIm1heCIsImxlbmd0aCIsInJlZHVjZSIsInAiLCJ5Iiwic3ZnV2lkdGgiLCJ5TGFiZWxTaXplIiwiZ2V0WCIsInN2Z0hlaWdodCIsInhMYWJlbFNpemUiLCJnWSIsImdldFkiLCJjb2xvciIsInBhdGhEIiwiZ2V0U3ZnWCIsImdldFN2Z1kiLCJtYXAiLCJwb2ludCIsImkiLCJqb2luIiwic3R5bGVzIiwibGluZWNoYXJ0X3BhdGgiLCJzdHJva2UiLCJsaW5lY2hhcnRfYXJlYSIsImxpbmVjaGFydF9heGlzIiwicGFkZGluZyIsImxpbmVjaGFydF9sYWJlbCIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsImQiLCJlIiwic3ZnTG9jYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhZGp1c3RtZW50Iiwid2lkdGgiLCJyZWxhdGl2ZUxvYyIsImNsaWVudFgiLCJsZWZ0Iiwic3ZnRGF0YSIsInB1c2giLCJzdmdYIiwic3ZnWSIsImNsb3Nlc3RQb2ludCIsImMiLCJNYXRoIiwiYWJzIiwic3RvcEhvdmVyIiwic2V0U3RhdGUiLCJvbkNoYXJ0SG92ZXIiLCJwb2ludFJhZGl1cyIsImxpbmVjaGFydF9wb2ludCIsInN0eWxlaG92ZXJMaW5lIiwiZ2V0Q29vcmRzIiwibWFrZUF4aXMiLCJtYWtlUGF0aCIsIm1ha2VBcmVhIiwibWFrZUxhYmVscyIsImNyZWF0ZUxpbmUiLCJtYWtlQWN0aXZlUG9pbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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QUksQ0FBQ3lDLFNBQUwsRUFBTjtBQUFBLFNBRHJCO0FBRU0sbUJBQVcsRUFBRyxxQkFBQ2xCLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUN3QixTQUFMLENBQWV4QixDQUFmLENBQVA7QUFBQSxTQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUt5QixRQUFMLEVBREgsRUFFRyxLQUFLQyxRQUFMLEVBRkgsRUFHRyxLQUFLQyxRQUFMLEVBSEgsRUFJRyxLQUFLQyxVQUFMLEVBSkgsRUFLRyxLQUFLakUsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLEtBQUtpRSxVQUFMLEVBQXRCLEdBQTBDLElBTDdDLEVBTUcsS0FBS2xFLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixLQUFLa0UsZUFBTCxFQUF0QixHQUErQyxJQU5sRCxDQUhGLENBREY7QUFjRDs7OztFQXZMbUJDLDRDQUFLLENBQUNDLFMsR0F5TDVCOzs7QUFDQXZFLFNBQVMsQ0FBQ3dFLFlBQVYsR0FBeUI7QUFDdkJuRSxNQUFJLEVBQUUsRUFEaUI7QUFFdkJlLE9BQUssRUFBRSxTQUZnQjtBQUd2QndDLGFBQVcsRUFBRSxDQUhVO0FBSXZCNUMsV0FBUyxFQUFFLEdBSlk7QUFLdkJILFVBQVEsRUFBRSxHQUxhO0FBTXZCSSxZQUFVLEVBQUUsRUFOVztBQU92QkgsWUFBVSxFQUFFO0FBUFcsQ0FBekI7QUFVZWQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZmMDQwMmU3N2I0ZTk3ZTQxMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGluZUNoYXJ0Lm1vZHVsZS5jc3NcIlxyXG5cclxuY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBob3ZlckxvYzogbnVsbCxcclxuICAgICAgICBhY3RpdmVQb2ludDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHRVQgWCAmIFkgfHwgTUFYICYgTUlOXHJcbiAgICBnZXRYKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhWzBdLngsXHJcbiAgICAgICAgbWF4OiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRZKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhLnJlZHVjZSgobWluLCBwKSA9PiBwLnkgPCBtaW4gPyBwLnkgOiBtaW4sIGRhdGFbMF0ueSksXHJcbiAgICAgICAgbWF4OiBkYXRhLnJlZHVjZSgobWF4LCBwKSA9PiBwLnkgPiBtYXggPyBwLnkgOiBtYXgsIGRhdGFbMF0ueSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR0VUIFNWRyBDT09SRElOQVRFU1xyXG4gICAgZ2V0U3ZnWCh4KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdXaWR0aCwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4geUxhYmVsU2l6ZSArICh4IC8gdGhpcy5nZXRYKCkubWF4ICogKHN2Z1dpZHRoIC0geUxhYmVsU2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ZnWSh5KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHhMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgZ1kgPSB0aGlzLmdldFkoKTtcclxuICAgICAgcmV0dXJuICgoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiBnWS5tYXggLSAoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiB5KSAvIChnWS5tYXggLSBnWS5taW4pO1xyXG4gICAgfVxyXG4gICAgLy8gQlVJTEQgU1ZHIFBBVEhcclxuICAgIG1ha2VQYXRoKCkge1xyXG4gICAgICBjb25zdCB7ZGF0YSwgY29sb3J9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IHBhdGhEID0gXCJNIFwiICsgdGhpcy5nZXRTdmdYKGRhdGFbMF0ueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShkYXRhWzBdLnkpICsgXCIgXCI7XHJcbiAgXHJcbiAgICAgIHBhdGhEICs9IGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkwgXCIgKyB0aGlzLmdldFN2Z1gocG9pbnQueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShwb2ludC55KSArIFwiIFwiO1xyXG4gICAgICB9KS5qb2luKFwiXCIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9wYXRofSBkPXtwYXRoRH0gc3R5bGU9e3tzdHJva2U6IGNvbG9yfX0gLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIEJVSUxEIFNIQURFRCBBUkVBXHJcbiAgICBtYWtlQXJlYSgpIHtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IHBhdGhEID0gXCJNIFwiICsgdGhpcy5nZXRTdmdYKGRhdGFbMF0ueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShkYXRhWzBdLnkpICsgXCIgXCI7XHJcbiAgXHJcbiAgICAgIHBhdGhEICs9IGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkwgXCIgKyB0aGlzLmdldFN2Z1gocG9pbnQueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShwb2ludC55KSArIFwiIFwiO1xyXG4gICAgICB9KS5qb2luKFwiXCIpO1xyXG4gIFxyXG4gICAgICBjb25zdCB4ID0gdGhpcy5nZXRYKCk7XHJcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmdldFkoKTtcclxuICAgICAgcGF0aEQgKz0gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHgubWF4KSArIFwiIFwiICsgdGhpcy5nZXRTdmdZKHkubWluKSArIFwiIFwiXHJcbiAgICAgICsgXCJMIFwiICsgdGhpcy5nZXRTdmdYKHgubWluKSArIFwiIFwiICsgdGhpcy5nZXRTdmdZKHkubWluKSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICByZXR1cm4gPHBhdGggY2xhc3NOYW1lPXtzdHlsZXMubGluZWNoYXJ0X2FyZWF9IGQ9e3BhdGhEfSAvPlxyXG4gICAgfVxyXG4gICAgLy8gQlVJTEQgR1JJRCBBWElTXHJcbiAgICBtYWtlQXhpcygpIHtcclxuICAgICAgY29uc3Qge3lMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBjb25zdCB5ID0gdGhpcy5nZXRZKCk7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPXtzdHlsZXMubGluZWNoYXJ0X2F4aXN9PlxyXG4gICAgICAgICAgPGxpbmVcclxuICAgICAgICAgICAgeDE9e3RoaXMuZ2V0U3ZnWCh4Lm1pbikgLSB5TGFiZWxTaXplfSB5MT17dGhpcy5nZXRTdmdZKHkubWluKX1cclxuICAgICAgICAgICAgeDI9e3RoaXMuZ2V0U3ZnWCh4Lm1heCl9IHkyPXt0aGlzLmdldFN2Z1koeS5taW4pfVxyXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCI1XCIgLz5cclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPXt0aGlzLmdldFN2Z1goeC5taW4pIC0geUxhYmVsU2l6ZX0geTE9e3RoaXMuZ2V0U3ZnWSh5Lm1heCl9XHJcbiAgICAgICAgICAgIHgyPXt0aGlzLmdldFN2Z1goeC5tYXgpfSB5Mj17dGhpcy5nZXRTdmdZKHkubWF4KX1cclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgbWFrZUxhYmVscygpe1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCBzdmdXaWR0aCwgeExhYmVsU2l6ZSwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBwYWRkaW5nID0gNTtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9sYWJlbH0+XHJcbiAgICAgICAgICB7LyogWSBBWElTIExBQkVMUyAqL31cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemUvMn0sIDIwKWB9IHRleHRBbmNob3I9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAge3RoaXMuZ2V0WSgpLm1heC50b0xvY2FsZVN0cmluZygndXMtRU4nLHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9KX1cclxuICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemUvMn0sICR7c3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSAtIHBhZGRpbmd9KWB9IHRleHRBbmNob3I9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAge3RoaXMuZ2V0WSgpLm1pbi50b0xvY2FsZVN0cmluZygndXMtRU4nLHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9KX1cclxuICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgIHsvKiBYIEFYSVMgTEFCRUxTICovfVxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eUxhYmVsU2l6ZX0sICR7c3ZnSGVpZ2h0fSlgfSB0ZXh0QW5jaG9yPVwic3RhcnRcIj5cclxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRhdGFbMF0uZCB9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtzdmdXaWR0aH0sICR7c3ZnSGVpZ2h0fSlgfSB0ZXh0QW5jaG9yPVwiZW5kXCI+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZGF0YS5sZW5ndGggLSAxXS5kIH1cclxuICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIC8vIEZJTkQgQ0xPU0VTVCBQT0lOVCBUTyBNT1VTRVxyXG4gICAgZ2V0Q29vcmRzKGUpe1xyXG4gICAgICBjb25zdCB7c3ZnV2lkdGgsIGRhdGEsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3Qgc3ZnTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGluZWNoYXJ0XCIpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBhZGp1c3RtZW50ID0gKHN2Z0xvY2F0aW9uLndpZHRoIC0gc3ZnV2lkdGgpIC8gMjsgLy90YWtlcyBwYWRkaW5nIGludG8gY29uc2lkZXJhdGlvblxyXG4gICAgICBjb25zdCByZWxhdGl2ZUxvYyA9IGUuY2xpZW50WCAtIHN2Z0xvY2F0aW9uLmxlZnQgLSBhZGp1c3RtZW50O1xyXG4gIFxyXG4gICAgICBsZXQgc3ZnRGF0YSA9IFtdO1xyXG4gICAgICBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICBzdmdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgc3ZnWDogdGhpcy5nZXRTdmdYKHBvaW50LngpLFxyXG4gICAgICAgICAgc3ZnWTogdGhpcy5nZXRTdmdZKHBvaW50LnkpLFxyXG4gICAgICAgICAgZDogcG9pbnQuZCxcclxuICAgICAgICAgIHA6IHBvaW50LnBcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGxldCBjbG9zZXN0UG9pbnQgPSB7fTtcclxuICAgICAgZm9yKGxldCBpID0gMCwgYyA9IDUwMDsgaSA8IHN2Z0RhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmICggTWF0aC5hYnMoc3ZnRGF0YVtpXS5zdmdYIC0gdGhpcy5zdGF0ZS5ob3ZlckxvYykgPD0gYyApe1xyXG4gICAgICAgICAgYyA9IE1hdGguYWJzKHN2Z0RhdGFbaV0uc3ZnWCAtIHRoaXMuc3RhdGUuaG92ZXJMb2MpO1xyXG4gICAgICAgICAgY2xvc2VzdFBvaW50ID0gc3ZnRGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYocmVsYXRpdmVMb2MgLSB5TGFiZWxTaXplIDwgMCl7XHJcbiAgICAgICAgdGhpcy5zdG9wSG92ZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGhvdmVyTG9jOiByZWxhdGl2ZUxvYyxcclxuICAgICAgICAgIGFjdGl2ZVBvaW50OiBjbG9zZXN0UG9pbnRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFydEhvdmVyKHJlbGF0aXZlTG9jLCBjbG9zZXN0UG9pbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBTVE9QIEhPVkVSXHJcbiAgICBzdG9wSG92ZXIoKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXJMb2M6IG51bGwsIGFjdGl2ZVBvaW50OiBudWxsfSk7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFydEhvdmVyKG51bGwsIG51bGwpO1xyXG4gICAgfVxyXG4gICAgLy8gTUFLRSBBQ1RJVkUgUE9JTlRcclxuICAgIG1ha2VBY3RpdmVQb2ludCgpe1xyXG4gICAgICBjb25zdCB7Y29sb3IsIHBvaW50UmFkaXVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5saW5lY2hhcnRfcG9pbnR9XHJcbiAgICAgICAgICBzdHlsZT17e3N0cm9rZTogY29sb3J9fVxyXG4gICAgICAgICAgcj17cG9pbnRSYWRpdXN9XHJcbiAgICAgICAgICBjeD17dGhpcy5zdGF0ZS5hY3RpdmVQb2ludC5zdmdYfVxyXG4gICAgICAgICAgY3k9e3RoaXMuc3RhdGUuYWN0aXZlUG9pbnQuc3ZnWX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gTUFLRSBIT1ZFUiBMSU5FXHJcbiAgICBjcmVhdGVMaW5lKCl7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHhMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGluZSBjbGFzc05hbWU9e3N0eWxlaG92ZXJMaW5lfVxyXG4gICAgICAgICAgeDE9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IHkxPXstOH1cclxuICAgICAgICAgIHgyPXt0aGlzLnN0YXRlLmhvdmVyTG9jfSB5Mj17c3ZnSGVpZ2h0IC0geExhYmVsU2l6ZX0gLz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCBzdmdXaWR0aH0gPSB0aGlzLnByb3BzO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgIHdpZHRoPXtzdmdXaWR0aH0gaGVpZ2h0PXtzdmdIZWlnaHR9IHZpZXdCb3g9e2AwIDAgJHtzdmdXaWR0aH0gJHtzdmdIZWlnaHR9YH0gY2xhc3NOYW1lPXsnbGluZWNoYXJ0J31cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyAoKSA9PiB0aGlzLnN0b3BIb3ZlcigpIH1cclxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17IChlKSA9PiB0aGlzLmdldENvb3JkcyhlKSB9ID5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlQXhpcygpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlUGF0aCgpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlQXJlYSgpfVxyXG4gICAgICAgICAgICB7dGhpcy5tYWtlTGFiZWxzKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gdGhpcy5jcmVhdGVMaW5lKCkgOiBudWxsfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5ob3ZlckxvYyA/IHRoaXMubWFrZUFjdGl2ZVBvaW50KCkgOiBudWxsfVxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBERUZBVUxUIFBST1BTXHJcbiAgTGluZUNoYXJ0LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgY29sb3I6ICcjMjE5NkYzJyxcclxuICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgc3ZnSGVpZ2h0OiAzMDAsXHJcbiAgICBzdmdXaWR0aDogOTAwLFxyXG4gICAgeExhYmVsU2l6ZTogMjAsXHJcbiAgICB5TGFiZWxTaXplOiA4MFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==