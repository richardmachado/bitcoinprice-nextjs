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
          lineNumber: 44,
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
        className: "linechart_area",
        d: pathD,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
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
          lineNumber: 70,
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
          lineNumber: 71,
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
          lineNumber: 75,
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
          lineNumber: 86,
          columnNumber: 9
        }
      }, __jsx("text", {
        transform: "translate(".concat(yLabelSize / 2, ", 20)"),
        textAnchor: "middle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
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
          lineNumber: 91,
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
          lineNumber: 95,
          columnNumber: 11
        }
      }, this.props.data[0].d), __jsx("text", {
        transform: "translate(".concat(svgWidth, ", ").concat(svgHeight, ")"),
        textAnchor: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
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
          lineNumber: 148,
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
          lineNumber: 161,
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
          lineNumber: 171,
          columnNumber: 9
        }
      }, __jsx("g", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJkYXRhIiwibWluIiwieCIsIm1heCIsImxlbmd0aCIsInJlZHVjZSIsInAiLCJ5Iiwic3ZnV2lkdGgiLCJ5TGFiZWxTaXplIiwiZ2V0WCIsInN2Z0hlaWdodCIsInhMYWJlbFNpemUiLCJnWSIsImdldFkiLCJjb2xvciIsInBhdGhEIiwiZ2V0U3ZnWCIsImdldFN2Z1kiLCJtYXAiLCJwb2ludCIsImkiLCJqb2luIiwic3Ryb2tlIiwicGFkZGluZyIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsImQiLCJlIiwic3ZnTG9jYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhZGp1c3RtZW50Iiwid2lkdGgiLCJyZWxhdGl2ZUxvYyIsImNsaWVudFgiLCJsZWZ0Iiwic3ZnRGF0YSIsInB1c2giLCJzdmdYIiwic3ZnWSIsImNsb3Nlc3RQb2ludCIsImMiLCJNYXRoIiwiYWJzIiwic3RvcEhvdmVyIiwic2V0U3RhdGUiLCJvbkNoYXJ0SG92ZXIiLCJwb2ludFJhZGl1cyIsImdldENvb3JkcyIsIm1ha2VBeGlzIiwibWFrZVBhdGgiLCJtYWtlQXJlYSIsIm1ha2VMYWJlbHMiLCJjcmVhdGVMaW5lIiwibWFrZUFjdGl2ZVBvaW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsUzs7Ozs7QUFDRixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsSUFEQztBQUVYQyxpQkFBVyxF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Q0csS0FBS3VCLFFBQUwsRUFESCxFQUVHLEtBQUtDLFFBQUwsRUFGSCxFQUdHLEtBQUtDLFFBQUwsRUFISCxFQUlHLEtBQUtDLFVBQUwsRUFKSCxFQUtHLEtBQUsxRCxLQUFMLENBQVdDLFFBQVgsR0FBc0IsS0FBSzBELFVBQUwsRUFBdEIsR0FBMEMsSUFMN0MsRUFNRyxLQUFLM0QsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLEtBQUsyRCxlQUFMLEVBQXRCLEdBQStDLElBTmxELENBSEYsQ0FERjtBQWNEOzs7O0VBdkxtQkMsNENBQUssQ0FBQ0MsUyxHQXlMNUI7OztBQUNBaEUsU0FBUyxDQUFDaUUsWUFBVixHQUF5QjtBQUN2QjVELE1BQUksRUFBRSxFQURpQjtBQUV2QmUsT0FBSyxFQUFFLFNBRmdCO0FBR3ZCbUMsYUFBVyxFQUFFLENBSFU7QUFJdkJ2QyxXQUFTLEVBQUUsR0FKWTtBQUt2QkgsVUFBUSxFQUFFLEdBTGE7QUFNdkJJLFlBQVUsRUFBRSxFQU5XO0FBT3ZCSCxZQUFVLEVBQUU7QUFQVyxDQUF6QjtBQVVlZCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjFjNWY5MWUwNWQ4Y2U2YjBhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBob3ZlckxvYzogbnVsbCxcclxuICAgICAgICBhY3RpdmVQb2ludDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHRVQgWCAmIFkgfHwgTUFYICYgTUlOXHJcbiAgICBnZXRYKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhWzBdLngsXHJcbiAgICAgICAgbWF4OiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRZKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhLnJlZHVjZSgobWluLCBwKSA9PiBwLnkgPCBtaW4gPyBwLnkgOiBtaW4sIGRhdGFbMF0ueSksXHJcbiAgICAgICAgbWF4OiBkYXRhLnJlZHVjZSgobWF4LCBwKSA9PiBwLnkgPiBtYXggPyBwLnkgOiBtYXgsIGRhdGFbMF0ueSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR0VUIFNWRyBDT09SRElOQVRFU1xyXG4gICAgZ2V0U3ZnWCh4KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdXaWR0aCwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4geUxhYmVsU2l6ZSArICh4IC8gdGhpcy5nZXRYKCkubWF4ICogKHN2Z1dpZHRoIC0geUxhYmVsU2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ZnWSh5KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHhMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgZ1kgPSB0aGlzLmdldFkoKTtcclxuICAgICAgcmV0dXJuICgoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiBnWS5tYXggLSAoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiB5KSAvIChnWS5tYXggLSBnWS5taW4pO1xyXG4gICAgfVxyXG4gICAgLy8gQlVJTEQgU1ZHIFBBVEhcclxuICAgIG1ha2VQYXRoKCkge1xyXG4gICAgICBjb25zdCB7ZGF0YSwgY29sb3J9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IHBhdGhEID0gXCJNIFwiICsgdGhpcy5nZXRTdmdYKGRhdGFbMF0ueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShkYXRhWzBdLnkpICsgXCIgXCI7XHJcbiAgXHJcbiAgICAgIHBhdGhEICs9IGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkwgXCIgKyB0aGlzLmdldFN2Z1gocG9pbnQueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShwb2ludC55KSArIFwiIFwiO1xyXG4gICAgICB9KS5qb2luKFwiXCIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxpbmVjaGFydF9wYXRoXCIgZD17cGF0aER9IHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19IC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBTSEFERUQgQVJFQVxyXG4gICAgbWFrZUFyZWEoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBjb25zdCB5ID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHBhdGhEICs9IFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1heCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIlxyXG4gICAgICArIFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1pbikgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIjtcclxuICBcclxuICAgICAgcmV0dXJuIDxwYXRoIGNsYXNzTmFtZT1cImxpbmVjaGFydF9hcmVhXCIgZD17cGF0aER9IC8+XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBHUklEIEFYSVNcclxuICAgIG1ha2VBeGlzKCkge1xyXG4gICAgICBjb25zdCB7eUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB4ID0gdGhpcy5nZXRYKCk7XHJcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmdldFkoKTtcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJsaW5lY2hhcnRfYXhpc1wiPlxyXG4gICAgICAgICAgPGxpbmVcclxuICAgICAgICAgICAgeDE9e3RoaXMuZ2V0U3ZnWCh4Lm1pbikgLSB5TGFiZWxTaXplfSB5MT17dGhpcy5nZXRTdmdZKHkubWluKX1cclxuICAgICAgICAgICAgeDI9e3RoaXMuZ2V0U3ZnWCh4Lm1heCl9IHkyPXt0aGlzLmdldFN2Z1koeS5taW4pfVxyXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCI1XCIgLz5cclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPXt0aGlzLmdldFN2Z1goeC5taW4pIC0geUxhYmVsU2l6ZX0geTE9e3RoaXMuZ2V0U3ZnWSh5Lm1heCl9XHJcbiAgICAgICAgICAgIHgyPXt0aGlzLmdldFN2Z1goeC5tYXgpfSB5Mj17dGhpcy5nZXRTdmdZKHkubWF4KX1cclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgbWFrZUxhYmVscygpe1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCBzdmdXaWR0aCwgeExhYmVsU2l6ZSwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBwYWRkaW5nID0gNTtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT1cImxpbmVjaGFydF9sYWJlbFwiPlxyXG4gICAgICAgICAgey8qIFkgQVhJUyBMQUJFTFMgKi99XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAyMClgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5tYXgudG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAke3N2Z0hlaWdodCAtIHhMYWJlbFNpemUgLSBwYWRkaW5nfSlgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5taW4udG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICB7LyogWCBBWElTIExBQkVMUyAqL31cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemV9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhWzBdLmQgfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7c3ZnV2lkdGh9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cImVuZFwiPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC0gMV0uZCB9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICAvLyBGSU5EIENMT1NFU1QgUE9JTlQgVE8gTU9VU0VcclxuICAgIGdldENvb3JkcyhlKXtcclxuICAgICAgY29uc3Qge3N2Z1dpZHRoLCBkYXRhLCB5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHN2Z0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVjaGFydFwiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgYWRqdXN0bWVudCA9IChzdmdMb2NhdGlvbi53aWR0aCAtIHN2Z1dpZHRoKSAvIDI7IC8vdGFrZXMgcGFkZGluZyBpbnRvIGNvbnNpZGVyYXRpb25cclxuICAgICAgY29uc3QgcmVsYXRpdmVMb2MgPSBlLmNsaWVudFggLSBzdmdMb2NhdGlvbi5sZWZ0IC0gYWRqdXN0bWVudDtcclxuICBcclxuICAgICAgbGV0IHN2Z0RhdGEgPSBbXTtcclxuICAgICAgZGF0YS5tYXAoKHBvaW50LCBpKSA9PiB7XHJcbiAgICAgICAgc3ZnRGF0YS5wdXNoKHtcclxuICAgICAgICAgIHN2Z1g6IHRoaXMuZ2V0U3ZnWChwb2ludC54KSxcclxuICAgICAgICAgIHN2Z1k6IHRoaXMuZ2V0U3ZnWShwb2ludC55KSxcclxuICAgICAgICAgIGQ6IHBvaW50LmQsXHJcbiAgICAgICAgICBwOiBwb2ludC5wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBsZXQgY2xvc2VzdFBvaW50ID0ge307XHJcbiAgICAgIGZvcihsZXQgaSA9IDAsIGMgPSA1MDA7IGkgPCBzdmdEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoIE1hdGguYWJzKHN2Z0RhdGFbaV0uc3ZnWCAtIHRoaXMuc3RhdGUuaG92ZXJMb2MpIDw9IGMgKXtcclxuICAgICAgICAgIGMgPSBNYXRoLmFicyhzdmdEYXRhW2ldLnN2Z1ggLSB0aGlzLnN0YXRlLmhvdmVyTG9jKTtcclxuICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHN2Z0RhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmKHJlbGF0aXZlTG9jIC0geUxhYmVsU2l6ZSA8IDApe1xyXG4gICAgICAgIHRoaXMuc3RvcEhvdmVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBob3ZlckxvYzogcmVsYXRpdmVMb2MsXHJcbiAgICAgICAgICBhY3RpdmVQb2ludDogY2xvc2VzdFBvaW50XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihyZWxhdGl2ZUxvYywgY2xvc2VzdFBvaW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU1RPUCBIT1ZFUlxyXG4gICAgc3RvcEhvdmVyKCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyTG9jOiBudWxsLCBhY3RpdmVQb2ludDogbnVsbH0pO1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihudWxsLCBudWxsKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgQUNUSVZFIFBPSU5UXHJcbiAgICBtYWtlQWN0aXZlUG9pbnQoKXtcclxuICAgICAgY29uc3Qge2NvbG9yLCBwb2ludFJhZGl1c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGNsYXNzTmFtZT0nbGluZWNoYXJ0X3BvaW50J1xyXG4gICAgICAgICAgc3R5bGU9e3tzdHJva2U6IGNvbG9yfX1cclxuICAgICAgICAgIHI9e3BvaW50UmFkaXVzfVxyXG4gICAgICAgICAgY3g9e3RoaXMuc3RhdGUuYWN0aXZlUG9pbnQuc3ZnWH1cclxuICAgICAgICAgIGN5PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50LnN2Z1l9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgSE9WRVIgTElORVxyXG4gICAgY3JlYXRlTGluZSgpe1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCB4TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpbmUgY2xhc3NOYW1lPSdob3ZlckxpbmUnXHJcbiAgICAgICAgICB4MT17dGhpcy5zdGF0ZS5ob3ZlckxvY30geTE9ey04fVxyXG4gICAgICAgICAgeDI9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IHkyPXtzdmdIZWlnaHQgLSB4TGFiZWxTaXplfSAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHN2Z1dpZHRofSA9IHRoaXMucHJvcHM7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyAgd2lkdGg9e3N2Z1dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gdmlld0JveD17YDAgMCAke3N2Z1dpZHRofSAke3N2Z0hlaWdodH1gfSBjbGFzc05hbWU9eydsaW5lY2hhcnQnfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ICgpID0+IHRoaXMuc3RvcEhvdmVyKCkgfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsgKGUpID0+IHRoaXMuZ2V0Q29vcmRzKGUpIH0gPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VBeGlzKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VQYXRoKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VBcmVhKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VMYWJlbHMoKX1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaG92ZXJMb2MgPyB0aGlzLmNyZWF0ZUxpbmUoKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gdGhpcy5tYWtlQWN0aXZlUG9pbnQoKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIERFRkFVTFQgUFJPUFNcclxuICBMaW5lQ2hhcnQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGF0YTogW10sXHJcbiAgICBjb2xvcjogJyMyMTk2RjMnLFxyXG4gICAgcG9pbnRSYWRpdXM6IDUsXHJcbiAgICBzdmdIZWlnaHQ6IDMwMCxcclxuICAgIHN2Z1dpZHRoOiA5MDAsXHJcbiAgICB4TGFiZWxTaXplOiAyMCxcclxuICAgIHlMYWJlbFNpemU6IDgwXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDsiXSwic291cmNlUm9vdCI6IiJ9