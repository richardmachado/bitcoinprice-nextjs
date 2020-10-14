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
        className: style.hoverLine,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJkYXRhIiwibWluIiwieCIsIm1heCIsImxlbmd0aCIsInJlZHVjZSIsInAiLCJ5Iiwic3ZnV2lkdGgiLCJ5TGFiZWxTaXplIiwiZ2V0WCIsInN2Z0hlaWdodCIsInhMYWJlbFNpemUiLCJnWSIsImdldFkiLCJjb2xvciIsInBhdGhEIiwiZ2V0U3ZnWCIsImdldFN2Z1kiLCJtYXAiLCJwb2ludCIsImkiLCJqb2luIiwic3R5bGVzIiwibGluZWNoYXJ0X3BhdGgiLCJzdHJva2UiLCJsaW5lY2hhcnRfYXJlYSIsImxpbmVjaGFydF9heGlzIiwicGFkZGluZyIsImxpbmVjaGFydF9sYWJlbCIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsImQiLCJlIiwic3ZnTG9jYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhZGp1c3RtZW50Iiwid2lkdGgiLCJyZWxhdGl2ZUxvYyIsImNsaWVudFgiLCJsZWZ0Iiwic3ZnRGF0YSIsInB1c2giLCJzdmdYIiwic3ZnWSIsImNsb3Nlc3RQb2ludCIsImMiLCJNYXRoIiwiYWJzIiwic3RvcEhvdmVyIiwic2V0U3RhdGUiLCJvbkNoYXJ0SG92ZXIiLCJwb2ludFJhZGl1cyIsImxpbmVjaGFydF9wb2ludCIsImhvdmVyTGluZSIsImdldENvb3JkcyIsIm1ha2VBeGlzIiwibWFrZVBhdGgiLCJtYWtlQXJlYSIsIm1ha2VMYWJlbHMiLCJjcmVhdGVMaW5lIiwibWFrZUFjdGl2ZVBvaW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxJQURDO0FBRVhDLGlCQUFXLEVBQUU7QUFGRixLQUFiO0FBRmlCO0FBTWxCLEcsQ0FDRDs7Ozs7MkJBQ007QUFBQSxVQUNHQyxJQURILEdBQ1csS0FBS0osS0FEaEIsQ0FDR0ksSUFESDtBQUVKLGFBQU87QUFDTEMsV0FBRyxFQUFFRCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFFLENBRFI7QUFFTEMsV0FBRyxFQUFFSCxJQUFJLENBQUNBLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQWYsQ0FBSixDQUFzQkY7QUFGdEIsT0FBUDtBQUlEOzs7MkJBQ0s7QUFBQSxVQUNHRixJQURILEdBQ1csS0FBS0osS0FEaEIsQ0FDR0ksSUFESDtBQUVKLGFBQU87QUFDTEMsV0FBRyxFQUFFRCxJQUFJLENBQUNLLE1BQUwsQ0FBWSxVQUFDSixHQUFELEVBQU1LLENBQU47QUFBQSxpQkFBWUEsQ0FBQyxDQUFDQyxDQUFGLEdBQU1OLEdBQU4sR0FBWUssQ0FBQyxDQUFDQyxDQUFkLEdBQWtCTixHQUE5QjtBQUFBLFNBQVosRUFBK0NELElBQUksQ0FBQyxDQUFELENBQUosQ0FBUU8sQ0FBdkQsQ0FEQTtBQUVMSixXQUFHLEVBQUVILElBQUksQ0FBQ0ssTUFBTCxDQUFZLFVBQUNGLEdBQUQsRUFBTUcsQ0FBTjtBQUFBLGlCQUFZQSxDQUFDLENBQUNDLENBQUYsR0FBTUosR0FBTixHQUFZRyxDQUFDLENBQUNDLENBQWQsR0FBa0JKLEdBQTlCO0FBQUEsU0FBWixFQUErQ0gsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRTyxDQUF2RDtBQUZBLE9BQVA7QUFJRCxLLENBQ0Q7Ozs7NEJBQ1FMLEMsRUFBRztBQUFBLHdCQUNzQixLQUFLTixLQUQzQjtBQUFBLFVBQ0ZZLFFBREUsZUFDRkEsUUFERTtBQUFBLFVBQ1FDLFVBRFIsZUFDUUEsVUFEUjtBQUVULGFBQU9BLFVBQVUsR0FBSVAsQ0FBQyxHQUFHLEtBQUtRLElBQUwsR0FBWVAsR0FBaEIsSUFBdUJLLFFBQVEsR0FBR0MsVUFBbEMsQ0FBckI7QUFDRDs7OzRCQUNPRixDLEVBQUc7QUFBQSx5QkFDdUIsS0FBS1gsS0FENUI7QUFBQSxVQUNGZSxTQURFLGdCQUNGQSxTQURFO0FBQUEsVUFDU0MsVUFEVCxnQkFDU0EsVUFEVDtBQUVULFVBQU1DLEVBQUUsR0FBRyxLQUFLQyxJQUFMLEVBQVg7QUFDQSxhQUFPLENBQUMsQ0FBQ0gsU0FBUyxHQUFHQyxVQUFiLElBQTJCQyxFQUFFLENBQUNWLEdBQTlCLEdBQW9DLENBQUNRLFNBQVMsR0FBR0MsVUFBYixJQUEyQkwsQ0FBaEUsS0FBc0VNLEVBQUUsQ0FBQ1YsR0FBSCxHQUFTVSxFQUFFLENBQUNaLEdBQWxGLENBQVA7QUFDRCxLLENBQ0Q7Ozs7K0JBQ1c7QUFBQTs7QUFBQSx5QkFDYSxLQUFLTCxLQURsQjtBQUFBLFVBQ0ZJLElBREUsZ0JBQ0ZBLElBREU7QUFBQSxVQUNJZSxLQURKLGdCQUNJQSxLQURKO0FBRVQsVUFBSUMsS0FBSyxHQUFHLE9BQU8sS0FBS0MsT0FBTCxDQUFhakIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRRSxDQUFyQixDQUFQLEdBQWlDLEdBQWpDLEdBQXVDLEtBQUtnQixPQUFMLENBQWFsQixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFPLENBQXJCLENBQXZDLEdBQWlFLEdBQTdFO0FBRUFTLFdBQUssSUFBSWhCLElBQUksQ0FBQ21CLEdBQUwsQ0FBUyxVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUM5QixlQUFPLE9BQU8sTUFBSSxDQUFDSixPQUFMLENBQWFHLEtBQUssQ0FBQ2xCLENBQW5CLENBQVAsR0FBK0IsR0FBL0IsR0FBcUMsTUFBSSxDQUFDZ0IsT0FBTCxDQUFhRSxLQUFLLENBQUNiLENBQW5CLENBQXJDLEdBQTZELEdBQXBFO0FBQ0QsT0FGUSxFQUVOZSxJQUZNLENBRUQsRUFGQyxDQUFUO0FBSUEsYUFDRTtBQUFNLGlCQUFTLEVBQUVDLDREQUFNLENBQUNDLGNBQXhCO0FBQXdDLFNBQUMsRUFBRVIsS0FBM0M7QUFBa0QsYUFBSyxFQUFFO0FBQUNTLGdCQUFNLEVBQUVWO0FBQVQsU0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBR0QsSyxDQUNEOzs7OytCQUNXO0FBQUE7O0FBQUEsVUFDRmYsSUFERSxHQUNNLEtBQUtKLEtBRFgsQ0FDRkksSUFERTtBQUVULFVBQUlnQixLQUFLLEdBQUcsT0FBTyxLQUFLQyxPQUFMLENBQWFqQixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFFLENBQXJCLENBQVAsR0FBaUMsR0FBakMsR0FBdUMsS0FBS2dCLE9BQUwsQ0FBYWxCLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUU8sQ0FBckIsQ0FBdkMsR0FBaUUsR0FBN0U7QUFFQVMsV0FBSyxJQUFJaEIsSUFBSSxDQUFDbUIsR0FBTCxDQUFTLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzlCLGVBQU8sT0FBTyxNQUFJLENBQUNKLE9BQUwsQ0FBYUcsS0FBSyxDQUFDbEIsQ0FBbkIsQ0FBUCxHQUErQixHQUEvQixHQUFxQyxNQUFJLENBQUNnQixPQUFMLENBQWFFLEtBQUssQ0FBQ2IsQ0FBbkIsQ0FBckMsR0FBNkQsR0FBcEU7QUFDRCxPQUZRLEVBRU5lLElBRk0sQ0FFRCxFQUZDLENBQVQ7QUFJQSxVQUFNcEIsQ0FBQyxHQUFHLEtBQUtRLElBQUwsRUFBVjtBQUNBLFVBQU1ILENBQUMsR0FBRyxLQUFLTyxJQUFMLEVBQVY7QUFDQUUsV0FBSyxJQUFJLE9BQU8sS0FBS0MsT0FBTCxDQUFhZixDQUFDLENBQUNDLEdBQWYsQ0FBUCxHQUE2QixHQUE3QixHQUFtQyxLQUFLZSxPQUFMLENBQWFYLENBQUMsQ0FBQ04sR0FBZixDQUFuQyxHQUF5RCxHQUF6RCxHQUNQLElBRE8sR0FDQSxLQUFLZ0IsT0FBTCxDQUFhZixDQUFDLENBQUNELEdBQWYsQ0FEQSxHQUNzQixHQUR0QixHQUM0QixLQUFLaUIsT0FBTCxDQUFhWCxDQUFDLENBQUNOLEdBQWYsQ0FENUIsR0FDa0QsR0FEM0Q7QUFHQSxhQUFPO0FBQU0saUJBQVMsRUFBRXNCLDREQUFNLENBQUNHLGNBQXhCO0FBQXdDLFNBQUMsRUFBRVYsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0QsSyxDQUNEOzs7OytCQUNXO0FBQUEsVUFDRlAsVUFERSxHQUNZLEtBQUtiLEtBRGpCLENBQ0ZhLFVBREU7QUFFVCxVQUFNUCxDQUFDLEdBQUcsS0FBS1EsSUFBTCxFQUFWO0FBQ0EsVUFBTUgsQ0FBQyxHQUFHLEtBQUtPLElBQUwsRUFBVjtBQUVBLGFBQ0U7QUFBRyxpQkFBUyxFQUFFUyw0REFBTSxDQUFDSSxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxVQUFFLEVBQUUsS0FBS1YsT0FBTCxDQUFhZixDQUFDLENBQUNELEdBQWYsSUFBc0JRLFVBRDVCO0FBQ3dDLFVBQUUsRUFBRSxLQUFLUyxPQUFMLENBQWFYLENBQUMsQ0FBQ04sR0FBZixDQUQ1QztBQUVFLFVBQUUsRUFBRSxLQUFLZ0IsT0FBTCxDQUFhZixDQUFDLENBQUNDLEdBQWYsQ0FGTjtBQUUyQixVQUFFLEVBQUUsS0FBS2UsT0FBTCxDQUFhWCxDQUFDLENBQUNOLEdBQWYsQ0FGL0I7QUFHRSx1QkFBZSxFQUFDLEdBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUtFO0FBQ0UsVUFBRSxFQUFFLEtBQUtnQixPQUFMLENBQWFmLENBQUMsQ0FBQ0QsR0FBZixJQUFzQlEsVUFENUI7QUFDd0MsVUFBRSxFQUFFLEtBQUtTLE9BQUwsQ0FBYVgsQ0FBQyxDQUFDSixHQUFmLENBRDVDO0FBRUUsVUFBRSxFQUFFLEtBQUtjLE9BQUwsQ0FBYWYsQ0FBQyxDQUFDQyxHQUFmLENBRk47QUFFMkIsVUFBRSxFQUFFLEtBQUtlLE9BQUwsQ0FBYVgsQ0FBQyxDQUFDSixHQUFmLENBRi9CO0FBR0UsdUJBQWUsRUFBQyxHQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsQ0FERjtBQVlEOzs7aUNBQ1c7QUFBQSx5QkFDNEMsS0FBS1AsS0FEakQ7QUFBQSxVQUNIZSxTQURHLGdCQUNIQSxTQURHO0FBQUEsVUFDUUgsUUFEUixnQkFDUUEsUUFEUjtBQUFBLFVBQ2tCSSxVQURsQixnQkFDa0JBLFVBRGxCO0FBQUEsVUFDOEJILFVBRDlCLGdCQUM4QkEsVUFEOUI7QUFFVixVQUFNbUIsT0FBTyxHQUFHLENBQWhCO0FBQ0EsYUFDRTtBQUFHLGlCQUFTLEVBQUVMLDREQUFNLENBQUNNLGVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRTtBQUFNLGlCQUFTLHNCQUFlcEIsVUFBVSxHQUFDLENBQTFCLFVBQWY7QUFBbUQsa0JBQVUsRUFBQyxRQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0ssSUFBTCxHQUFZWCxHQUFaLENBQWdCMkIsY0FBaEIsQ0FBK0IsT0FBL0IsRUFBdUM7QUFBRUMsYUFBSyxFQUFFLFVBQVQ7QUFBcUJDLGdCQUFRLEVBQUU7QUFBL0IsT0FBdkMsQ0FESCxDQUZGLEVBS0U7QUFBTSxpQkFBUyxzQkFBZXZCLFVBQVUsR0FBQyxDQUExQixlQUFnQ0UsU0FBUyxHQUFHQyxVQUFaLEdBQXlCZ0IsT0FBekQsTUFBZjtBQUFvRixrQkFBVSxFQUFDLFFBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLZCxJQUFMLEdBQVliLEdBQVosQ0FBZ0I2QixjQUFoQixDQUErQixPQUEvQixFQUF1QztBQUFFQyxhQUFLLEVBQUUsVUFBVDtBQUFxQkMsZ0JBQVEsRUFBRTtBQUEvQixPQUF2QyxDQURILENBTEYsRUFTRTtBQUFNLGlCQUFTLHNCQUFldkIsVUFBZixlQUE4QkUsU0FBOUIsTUFBZjtBQUEyRCxrQkFBVSxFQUFDLE9BQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxLQUFLZixLQUFMLENBQVdJLElBQVgsQ0FBZ0IsQ0FBaEIsRUFBbUJpQyxDQUR2QixDQVRGLEVBWUU7QUFBTSxpQkFBUyxzQkFBZXpCLFFBQWYsZUFBNEJHLFNBQTVCLE1BQWY7QUFBeUQsa0JBQVUsRUFBQyxLQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksS0FBS2YsS0FBTCxDQUFXSSxJQUFYLENBQWdCLEtBQUtKLEtBQUwsQ0FBV0ksSUFBWCxDQUFnQkksTUFBaEIsR0FBeUIsQ0FBekMsRUFBNEM2QixDQURoRCxDQVpGLENBREY7QUFrQkQsSyxDQUNEOzs7OzhCQUNVQyxDLEVBQUU7QUFBQTs7QUFBQSx5QkFDMkIsS0FBS3RDLEtBRGhDO0FBQUEsVUFDSFksUUFERyxnQkFDSEEsUUFERztBQUFBLFVBQ09SLElBRFAsZ0JBQ09BLElBRFA7QUFBQSxVQUNhUyxVQURiLGdCQUNhQSxVQURiO0FBRVYsVUFBTTBCLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxXQUFoQyxFQUE2QyxDQUE3QyxFQUFnREMscUJBQWhELEVBQXBCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLENBQUNKLFdBQVcsQ0FBQ0ssS0FBWixHQUFvQmhDLFFBQXJCLElBQWlDLENBQXBELENBSFUsQ0FHNkM7O0FBQ3ZELFVBQU1pQyxXQUFXLEdBQUdQLENBQUMsQ0FBQ1EsT0FBRixHQUFZUCxXQUFXLENBQUNRLElBQXhCLEdBQStCSixVQUFuRDtBQUVBLFVBQUlLLE9BQU8sR0FBRyxFQUFkO0FBQ0E1QyxVQUFJLENBQUNtQixHQUFMLENBQVMsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDckJ1QixlQUFPLENBQUNDLElBQVIsQ0FBYTtBQUNYQyxjQUFJLEVBQUUsTUFBSSxDQUFDN0IsT0FBTCxDQUFhRyxLQUFLLENBQUNsQixDQUFuQixDQURLO0FBRVg2QyxjQUFJLEVBQUUsTUFBSSxDQUFDN0IsT0FBTCxDQUFhRSxLQUFLLENBQUNiLENBQW5CLENBRks7QUFHWDBCLFdBQUMsRUFBRWIsS0FBSyxDQUFDYSxDQUhFO0FBSVgzQixXQUFDLEVBQUVjLEtBQUssQ0FBQ2Q7QUFKRSxTQUFiO0FBTUQsT0FQRDtBQVNBLFVBQUkwQyxZQUFZLEdBQUcsRUFBbkI7O0FBQ0EsV0FBSSxJQUFJM0IsQ0FBQyxHQUFHLENBQVIsRUFBVzRCLENBQUMsR0FBRyxHQUFuQixFQUF3QjVCLENBQUMsR0FBR3VCLE9BQU8sQ0FBQ3hDLE1BQXBDLEVBQTRDaUIsQ0FBQyxFQUE3QyxFQUFnRDtBQUM5QyxZQUFLNkIsSUFBSSxDQUFDQyxHQUFMLENBQVNQLE9BQU8sQ0FBQ3ZCLENBQUQsQ0FBUCxDQUFXeUIsSUFBWCxHQUFrQixLQUFLakQsS0FBTCxDQUFXQyxRQUF0QyxLQUFtRG1ELENBQXhELEVBQTJEO0FBQ3pEQSxXQUFDLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTUCxPQUFPLENBQUN2QixDQUFELENBQVAsQ0FBV3lCLElBQVgsR0FBa0IsS0FBS2pELEtBQUwsQ0FBV0MsUUFBdEMsQ0FBSjtBQUNBa0Qsc0JBQVksR0FBR0osT0FBTyxDQUFDdkIsQ0FBRCxDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsVUFBR29CLFdBQVcsR0FBR2hDLFVBQWQsR0FBMkIsQ0FBOUIsRUFBZ0M7QUFDOUIsYUFBSzJDLFNBQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQyxRQUFMLENBQWM7QUFDWnZELGtCQUFRLEVBQUUyQyxXQURFO0FBRVoxQyxxQkFBVyxFQUFFaUQ7QUFGRCxTQUFkO0FBSUEsYUFBS3BELEtBQUwsQ0FBVzBELFlBQVgsQ0FBd0JiLFdBQXhCLEVBQXFDTyxZQUFyQztBQUNEO0FBQ0YsSyxDQUNEOzs7O2dDQUNXO0FBQ1QsV0FBS0ssUUFBTCxDQUFjO0FBQUN2RCxnQkFBUSxFQUFFLElBQVg7QUFBaUJDLG1CQUFXLEVBQUU7QUFBOUIsT0FBZDtBQUNBLFdBQUtILEtBQUwsQ0FBVzBELFlBQVgsQ0FBd0IsSUFBeEIsRUFBOEIsSUFBOUI7QUFDRCxLLENBQ0Q7Ozs7c0NBQ2lCO0FBQUEseUJBQ2MsS0FBSzFELEtBRG5CO0FBQUEsVUFDUm1CLEtBRFEsZ0JBQ1JBLEtBRFE7QUFBQSxVQUNEd0MsV0FEQyxnQkFDREEsV0FEQztBQUVmLGFBQ0U7QUFDRSxpQkFBUyxFQUFFeEIsS0FBSyxDQUFDeUIsZUFEbkI7QUFFRSxhQUFLLEVBQUU7QUFBQy9CLGdCQUFNLEVBQUVWO0FBQVQsU0FGVDtBQUdFLFNBQUMsRUFBRXdDLFdBSEw7QUFJRSxVQUFFLEVBQUUsS0FBSzFELEtBQUwsQ0FBV0UsV0FBWCxDQUF1QitDLElBSjdCO0FBS0UsVUFBRSxFQUFFLEtBQUtqRCxLQUFMLENBQVdFLFdBQVgsQ0FBdUJnRCxJQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFTRCxLLENBQ0Q7Ozs7aUNBQ1k7QUFBQSx5QkFDc0IsS0FBS25ELEtBRDNCO0FBQUEsVUFDSGUsU0FERyxnQkFDSEEsU0FERztBQUFBLFVBQ1FDLFVBRFIsZ0JBQ1FBLFVBRFI7QUFFVixhQUNFO0FBQU0saUJBQVMsRUFBRW1CLEtBQUssQ0FBQzBCLFNBQXZCO0FBQ0UsVUFBRSxFQUFFLEtBQUs1RCxLQUFMLENBQVdDLFFBRGpCO0FBQzJCLFVBQUUsRUFBRSxDQUFDLENBRGhDO0FBRUUsVUFBRSxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsUUFGakI7QUFFMkIsVUFBRSxFQUFFYSxTQUFTLEdBQUdDLFVBRjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUtEOzs7NkJBRVE7QUFBQTs7QUFBQSx5QkFDdUIsS0FBS2hCLEtBRDVCO0FBQUEsVUFDQWUsU0FEQSxnQkFDQUEsU0FEQTtBQUFBLFVBQ1dILFFBRFgsZ0JBQ1dBLFFBRFg7QUFHUCxhQUNFO0FBQU0sYUFBSyxFQUFFQSxRQUFiO0FBQXVCLGNBQU0sRUFBRUcsU0FBL0I7QUFBMEMsZUFBTyxnQkFBU0gsUUFBVCxjQUFxQkcsU0FBckIsQ0FBakQ7QUFBbUYsaUJBQVMsRUFBRSxXQUE5RjtBQUNNLG9CQUFZLEVBQUc7QUFBQSxpQkFBTSxNQUFJLENBQUN5QyxTQUFMLEVBQU47QUFBQSxTQURyQjtBQUVNLG1CQUFXLEVBQUcscUJBQUNsQixDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDd0IsU0FBTCxDQUFleEIsQ0FBZixDQUFQO0FBQUEsU0FGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLeUIsUUFBTCxFQURILEVBRUcsS0FBS0MsUUFBTCxFQUZILEVBR0csS0FBS0MsUUFBTCxFQUhILEVBSUcsS0FBS0MsVUFBTCxFQUpILEVBS0csS0FBS2pFLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixLQUFLaUUsVUFBTCxFQUF0QixHQUEwQyxJQUw3QyxFQU1HLEtBQUtsRSxLQUFMLENBQVdDLFFBQVgsR0FBc0IsS0FBS2tFLGVBQUwsRUFBdEIsR0FBK0MsSUFObEQsQ0FIRixDQURGO0FBY0Q7Ozs7RUF2TG1CQyw0Q0FBSyxDQUFDQyxTLEdBeUw1Qjs7O0FBQ0F2RSxTQUFTLENBQUN3RSxZQUFWLEdBQXlCO0FBQ3ZCbkUsTUFBSSxFQUFFLEVBRGlCO0FBRXZCZSxPQUFLLEVBQUUsU0FGZ0I7QUFHdkJ3QyxhQUFXLEVBQUUsQ0FIVTtBQUl2QjVDLFdBQVMsRUFBRSxHQUpZO0FBS3ZCSCxVQUFRLEVBQUUsR0FMYTtBQU12QkksWUFBVSxFQUFFLEVBTlc7QUFPdkJILFlBQVUsRUFBRTtBQVBXLENBQXpCO0FBVWVkLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiNGNmZmJmMWFiNzI0YWIyNzExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpbmVDaGFydC5tb2R1bGUuY3NzXCJcclxuXHJcbmNsYXNzIExpbmVDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgaG92ZXJMb2M6IG51bGwsXHJcbiAgICAgICAgYWN0aXZlUG9pbnQ6IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR0VUIFggJiBZIHx8IE1BWCAmIE1JTlxyXG4gICAgZ2V0WCgpe1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjogZGF0YVswXS54LFxyXG4gICAgICAgIG1heDogZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0WSgpe1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pbjogZGF0YS5yZWR1Y2UoKG1pbiwgcCkgPT4gcC55IDwgbWluID8gcC55IDogbWluLCBkYXRhWzBdLnkpLFxyXG4gICAgICAgIG1heDogZGF0YS5yZWR1Y2UoKG1heCwgcCkgPT4gcC55ID4gbWF4ID8gcC55IDogbWF4LCBkYXRhWzBdLnkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEdFVCBTVkcgQ09PUkRJTkFURVNcclxuICAgIGdldFN2Z1goeCkge1xyXG4gICAgICBjb25zdCB7c3ZnV2lkdGgsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIHlMYWJlbFNpemUgKyAoeCAvIHRoaXMuZ2V0WCgpLm1heCAqIChzdmdXaWR0aCAtIHlMYWJlbFNpemUpKTtcclxuICAgIH1cclxuICAgIGdldFN2Z1koeSkge1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCB4TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGdZID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHJldHVybiAoKHN2Z0hlaWdodCAtIHhMYWJlbFNpemUpICogZ1kubWF4IC0gKHN2Z0hlaWdodCAtIHhMYWJlbFNpemUpICogeSkgLyAoZ1kubWF4IC0gZ1kubWluKTtcclxuICAgIH1cclxuICAgIC8vIEJVSUxEIFNWRyBQQVRIXHJcbiAgICBtYWtlUGF0aCgpIHtcclxuICAgICAgY29uc3Qge2RhdGEsIGNvbG9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8cGF0aCBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfcGF0aH0gZD17cGF0aER9IHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19IC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBTSEFERUQgQVJFQVxyXG4gICAgbWFrZUFyZWEoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBjb25zdCB5ID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHBhdGhEICs9IFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1heCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIlxyXG4gICAgICArIFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1pbikgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIjtcclxuICBcclxuICAgICAgcmV0dXJuIDxwYXRoIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9hcmVhfSBkPXtwYXRoRH0gLz5cclxuICAgIH1cclxuICAgIC8vIEJVSUxEIEdSSUQgQVhJU1xyXG4gICAgbWFrZUF4aXMoKSB7XHJcbiAgICAgIGNvbnN0IHt5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKTtcclxuICAgICAgY29uc3QgeSA9IHRoaXMuZ2V0WSgpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT17c3R5bGVzLmxpbmVjaGFydF9heGlzfT5cclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPXt0aGlzLmdldFN2Z1goeC5taW4pIC0geUxhYmVsU2l6ZX0geTE9e3RoaXMuZ2V0U3ZnWSh5Lm1pbil9XHJcbiAgICAgICAgICAgIHgyPXt0aGlzLmdldFN2Z1goeC5tYXgpfSB5Mj17dGhpcy5nZXRTdmdZKHkubWluKX1cclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiIC8+XHJcbiAgICAgICAgICA8bGluZVxyXG4gICAgICAgICAgICB4MT17dGhpcy5nZXRTdmdYKHgubWluKSAtIHlMYWJlbFNpemV9IHkxPXt0aGlzLmdldFN2Z1koeS5tYXgpfVxyXG4gICAgICAgICAgICB4Mj17dGhpcy5nZXRTdmdYKHgubWF4KX0geTI9e3RoaXMuZ2V0U3ZnWSh5Lm1heCl9XHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjVcIiAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIG1ha2VMYWJlbHMoKXtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgc3ZnV2lkdGgsIHhMYWJlbFNpemUsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgcGFkZGluZyA9IDU7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZyBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfbGFiZWx9PlxyXG4gICAgICAgICAgey8qIFkgQVhJUyBMQUJFTFMgKi99XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAyMClgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5tYXgudG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAke3N2Z0hlaWdodCAtIHhMYWJlbFNpemUgLSBwYWRkaW5nfSlgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5taW4udG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICB7LyogWCBBWElTIExBQkVMUyAqL31cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemV9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhWzBdLmQgfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7c3ZnV2lkdGh9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cImVuZFwiPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC0gMV0uZCB9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICAvLyBGSU5EIENMT1NFU1QgUE9JTlQgVE8gTU9VU0VcclxuICAgIGdldENvb3JkcyhlKXtcclxuICAgICAgY29uc3Qge3N2Z1dpZHRoLCBkYXRhLCB5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHN2Z0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVjaGFydFwiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgYWRqdXN0bWVudCA9IChzdmdMb2NhdGlvbi53aWR0aCAtIHN2Z1dpZHRoKSAvIDI7IC8vdGFrZXMgcGFkZGluZyBpbnRvIGNvbnNpZGVyYXRpb25cclxuICAgICAgY29uc3QgcmVsYXRpdmVMb2MgPSBlLmNsaWVudFggLSBzdmdMb2NhdGlvbi5sZWZ0IC0gYWRqdXN0bWVudDtcclxuICBcclxuICAgICAgbGV0IHN2Z0RhdGEgPSBbXTtcclxuICAgICAgZGF0YS5tYXAoKHBvaW50LCBpKSA9PiB7XHJcbiAgICAgICAgc3ZnRGF0YS5wdXNoKHtcclxuICAgICAgICAgIHN2Z1g6IHRoaXMuZ2V0U3ZnWChwb2ludC54KSxcclxuICAgICAgICAgIHN2Z1k6IHRoaXMuZ2V0U3ZnWShwb2ludC55KSxcclxuICAgICAgICAgIGQ6IHBvaW50LmQsXHJcbiAgICAgICAgICBwOiBwb2ludC5wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBsZXQgY2xvc2VzdFBvaW50ID0ge307XHJcbiAgICAgIGZvcihsZXQgaSA9IDAsIGMgPSA1MDA7IGkgPCBzdmdEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoIE1hdGguYWJzKHN2Z0RhdGFbaV0uc3ZnWCAtIHRoaXMuc3RhdGUuaG92ZXJMb2MpIDw9IGMgKXtcclxuICAgICAgICAgIGMgPSBNYXRoLmFicyhzdmdEYXRhW2ldLnN2Z1ggLSB0aGlzLnN0YXRlLmhvdmVyTG9jKTtcclxuICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHN2Z0RhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmKHJlbGF0aXZlTG9jIC0geUxhYmVsU2l6ZSA8IDApe1xyXG4gICAgICAgIHRoaXMuc3RvcEhvdmVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBob3ZlckxvYzogcmVsYXRpdmVMb2MsXHJcbiAgICAgICAgICBhY3RpdmVQb2ludDogY2xvc2VzdFBvaW50XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihyZWxhdGl2ZUxvYywgY2xvc2VzdFBvaW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU1RPUCBIT1ZFUlxyXG4gICAgc3RvcEhvdmVyKCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyTG9jOiBudWxsLCBhY3RpdmVQb2ludDogbnVsbH0pO1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihudWxsLCBudWxsKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgQUNUSVZFIFBPSU5UXHJcbiAgICBtYWtlQWN0aXZlUG9pbnQoKXtcclxuICAgICAgY29uc3Qge2NvbG9yLCBwb2ludFJhZGl1c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUubGluZWNoYXJ0X3BvaW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tzdHJva2U6IGNvbG9yfX1cclxuICAgICAgICAgIHI9e3BvaW50UmFkaXVzfVxyXG4gICAgICAgICAgY3g9e3RoaXMuc3RhdGUuYWN0aXZlUG9pbnQuc3ZnWH1cclxuICAgICAgICAgIGN5PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50LnN2Z1l9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgSE9WRVIgTElORVxyXG4gICAgY3JlYXRlTGluZSgpe1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCB4TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpbmUgY2xhc3NOYW1lPXtzdHlsZS5ob3ZlckxpbmV9XHJcbiAgICAgICAgICB4MT17dGhpcy5zdGF0ZS5ob3ZlckxvY30geTE9ey04fVxyXG4gICAgICAgICAgeDI9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IHkyPXtzdmdIZWlnaHQgLSB4TGFiZWxTaXplfSAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHN2Z1dpZHRofSA9IHRoaXMucHJvcHM7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyAgd2lkdGg9e3N2Z1dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gdmlld0JveD17YDAgMCAke3N2Z1dpZHRofSAke3N2Z0hlaWdodH1gfSBjbGFzc05hbWU9eydsaW5lY2hhcnQnfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ICgpID0+IHRoaXMuc3RvcEhvdmVyKCkgfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsgKGUpID0+IHRoaXMuZ2V0Q29vcmRzKGUpIH0gPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VBeGlzKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VQYXRoKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VBcmVhKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VMYWJlbHMoKX1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaG92ZXJMb2MgPyB0aGlzLmNyZWF0ZUxpbmUoKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gdGhpcy5tYWtlQWN0aXZlUG9pbnQoKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIERFRkFVTFQgUFJPUFNcclxuICBMaW5lQ2hhcnQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGF0YTogW10sXHJcbiAgICBjb2xvcjogJyMyMTk2RjMnLFxyXG4gICAgcG9pbnRSYWRpdXM6IDUsXHJcbiAgICBzdmdIZWlnaHQ6IDMwMCxcclxuICAgIHN2Z1dpZHRoOiA5MDAsXHJcbiAgICB4TGFiZWxTaXplOiAyMCxcclxuICAgIHlMYWJlbFNpemU6IDgwXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDsiXSwic291cmNlUm9vdCI6IiJ9