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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiXSwibmFtZXMiOlsiTGluZUNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImhvdmVyTG9jIiwiYWN0aXZlUG9pbnQiLCJkYXRhIiwibWluIiwieCIsIm1heCIsImxlbmd0aCIsInJlZHVjZSIsInAiLCJ5Iiwic3ZnV2lkdGgiLCJ5TGFiZWxTaXplIiwiZ2V0WCIsInN2Z0hlaWdodCIsInhMYWJlbFNpemUiLCJnWSIsImdldFkiLCJjb2xvciIsInBhdGhEIiwiZ2V0U3ZnWCIsImdldFN2Z1kiLCJtYXAiLCJwb2ludCIsImkiLCJqb2luIiwic3R5bGVzIiwibGluZWNoYXJ0X3BhdGgiLCJzdHJva2UiLCJsaW5lY2hhcnRfYXJlYSIsImxpbmVjaGFydF9heGlzIiwicGFkZGluZyIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsImQiLCJlIiwic3ZnTG9jYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJhZGp1c3RtZW50Iiwid2lkdGgiLCJyZWxhdGl2ZUxvYyIsImNsaWVudFgiLCJsZWZ0Iiwic3ZnRGF0YSIsInB1c2giLCJzdmdYIiwic3ZnWSIsImNsb3Nlc3RQb2ludCIsImMiLCJNYXRoIiwiYWJzIiwic3RvcEhvdmVyIiwic2V0U3RhdGUiLCJvbkNoYXJ0SG92ZXIiLCJwb2ludFJhZGl1cyIsImxpbmVjaGFydF9wb2ludCIsImhvdmVyTGluZSIsImxpbmVjaGFydCIsImdldENvb3JkcyIsIm1ha2VBeGlzIiwibWFrZVBhdGgiLCJtYWtlQXJlYSIsIm1ha2VMYWJlbHMiLCJjcmVhdGVMaW5lIiwibWFrZUFjdGl2ZVBvaW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxTOzs7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LE1BQUksQ0FBQ04sU0FBTCxFQUFOO0FBQUEsU0FEckI7QUFFTSxtQkFBVyxFQUFHLHFCQUFDbEIsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ3lCLFNBQUwsQ0FBZXpCLENBQWYsQ0FBUDtBQUFBLFNBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBSzBCLFFBQUwsRUFESCxFQUVHLEtBQUtDLFFBQUwsRUFGSCxFQUdHLEtBQUtDLFFBQUwsRUFISCxFQUlHLEtBQUtDLFVBQUwsRUFKSCxFQUtHLEtBQUtqRSxLQUFMLENBQVdDLFFBQVgsR0FBc0IsS0FBS2lFLFVBQUwsRUFBdEIsR0FBMEMsSUFMN0MsRUFNRyxLQUFLbEUsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLEtBQUtrRSxlQUFMLEVBQXRCLEdBQStDLElBTmxELENBSEYsQ0FERjtBQWNEOzs7O0VBdkxtQkMsNENBQUssQ0FBQ0MsUyxHQXlMNUI7OztBQUNBdkUsU0FBUyxDQUFDd0UsWUFBVixHQUF5QjtBQUN2Qm5FLE1BQUksRUFBRSxFQURpQjtBQUV2QmUsT0FBSyxFQUFFLFNBRmdCO0FBR3ZCdUMsYUFBVyxFQUFFLENBSFU7QUFJdkIzQyxXQUFTLEVBQUUsR0FKWTtBQUt2QkgsVUFBUSxFQUFFLEdBTGE7QUFNdkJJLFlBQVUsRUFBRSxFQU5XO0FBT3ZCSCxZQUFVLEVBQUU7QUFQVyxDQUF6QjtBQVVlZCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YzFmODg2NDc4NjcwOTM3NzQzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9MaW5lQ2hhcnQubW9kdWxlLmNzc1wiXHJcblxyXG5jbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGhvdmVyTG9jOiBudWxsLFxyXG4gICAgICAgIGFjdGl2ZVBvaW50OiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEdFVCBYICYgWSB8fCBNQVggJiBNSU5cclxuICAgIGdldFgoKXtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtaW46IGRhdGFbMF0ueCxcclxuICAgICAgICBtYXg6IGRhdGFbZGF0YS5sZW5ndGggLSAxXS54XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFkoKXtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gdGhpcy5wcm9wcztcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtaW46IGRhdGEucmVkdWNlKChtaW4sIHApID0+IHAueSA8IG1pbiA/IHAueSA6IG1pbiwgZGF0YVswXS55KSxcclxuICAgICAgICBtYXg6IGRhdGEucmVkdWNlKChtYXgsIHApID0+IHAueSA+IG1heCA/IHAueSA6IG1heCwgZGF0YVswXS55KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHRVQgU1ZHIENPT1JESU5BVEVTXHJcbiAgICBnZXRTdmdYKHgpIHtcclxuICAgICAgY29uc3Qge3N2Z1dpZHRoLCB5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB5TGFiZWxTaXplICsgKHggLyB0aGlzLmdldFgoKS5tYXggKiAoc3ZnV2lkdGggLSB5TGFiZWxTaXplKSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdmdZKHkpIHtcclxuICAgICAgY29uc3Qge3N2Z0hlaWdodCwgeExhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBnWSA9IHRoaXMuZ2V0WSgpO1xyXG4gICAgICByZXR1cm4gKChzdmdIZWlnaHQgLSB4TGFiZWxTaXplKSAqIGdZLm1heCAtIChzdmdIZWlnaHQgLSB4TGFiZWxTaXplKSAqIHkpIC8gKGdZLm1heCAtIGdZLm1pbik7XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBTVkcgUEFUSFxyXG4gICAgbWFrZVBhdGgoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhLCBjb2xvcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBsZXQgcGF0aEQgPSBcIk0gXCIgKyB0aGlzLmdldFN2Z1goZGF0YVswXS54KSArIFwiIFwiICsgdGhpcy5nZXRTdmdZKGRhdGFbMF0ueSkgKyBcIiBcIjtcclxuICBcclxuICAgICAgcGF0aEQgKz0gZGF0YS5tYXAoKHBvaW50LCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiTCBcIiArIHRoaXMuZ2V0U3ZnWChwb2ludC54KSArIFwiIFwiICsgdGhpcy5nZXRTdmdZKHBvaW50LnkpICsgXCIgXCI7XHJcbiAgICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHBhdGggY2xhc3NOYW1lPXtzdHlsZXMubGluZWNoYXJ0X3BhdGh9IGQ9e3BhdGhEfSBzdHlsZT17e3N0cm9rZTogY29sb3J9fSAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gQlVJTEQgU0hBREVEIEFSRUFcclxuICAgIG1ha2VBcmVhKCkge1xyXG4gICAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBsZXQgcGF0aEQgPSBcIk0gXCIgKyB0aGlzLmdldFN2Z1goZGF0YVswXS54KSArIFwiIFwiICsgdGhpcy5nZXRTdmdZKGRhdGFbMF0ueSkgKyBcIiBcIjtcclxuICBcclxuICAgICAgcGF0aEQgKz0gZGF0YS5tYXAoKHBvaW50LCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiTCBcIiArIHRoaXMuZ2V0U3ZnWChwb2ludC54KSArIFwiIFwiICsgdGhpcy5nZXRTdmdZKHBvaW50LnkpICsgXCIgXCI7XHJcbiAgICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKTtcclxuICAgICAgY29uc3QgeSA9IHRoaXMuZ2V0WSgpO1xyXG4gICAgICBwYXRoRCArPSBcIkwgXCIgKyB0aGlzLmdldFN2Z1goeC5tYXgpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koeS5taW4pICsgXCIgXCJcclxuICAgICAgKyBcIkwgXCIgKyB0aGlzLmdldFN2Z1goeC5taW4pICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koeS5taW4pICsgXCIgXCI7XHJcbiAgXHJcbiAgICAgIHJldHVybiA8cGF0aCBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfYXJlYX0gZD17cGF0aER9IC8+XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBHUklEIEFYSVNcclxuICAgIG1ha2VBeGlzKCkge1xyXG4gICAgICBjb25zdCB7eUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB4ID0gdGhpcy5nZXRYKCk7XHJcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmdldFkoKTtcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZyBjbGFzc05hbWU9e3N0eWxlcy5saW5lY2hhcnRfYXhpc30+XHJcbiAgICAgICAgICA8bGluZVxyXG4gICAgICAgICAgICB4MT17dGhpcy5nZXRTdmdYKHgubWluKSAtIHlMYWJlbFNpemV9IHkxPXt0aGlzLmdldFN2Z1koeS5taW4pfVxyXG4gICAgICAgICAgICB4Mj17dGhpcy5nZXRTdmdYKHgubWF4KX0geTI9e3RoaXMuZ2V0U3ZnWSh5Lm1pbil9XHJcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjVcIiAvPlxyXG4gICAgICAgICAgPGxpbmVcclxuICAgICAgICAgICAgeDE9e3RoaXMuZ2V0U3ZnWCh4Lm1pbikgLSB5TGFiZWxTaXplfSB5MT17dGhpcy5nZXRTdmdZKHkubWF4KX1cclxuICAgICAgICAgICAgeDI9e3RoaXMuZ2V0U3ZnWCh4Lm1heCl9IHkyPXt0aGlzLmdldFN2Z1koeS5tYXgpfVxyXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCI1XCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBtYWtlTGFiZWxzKCl7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHN2Z1dpZHRoLCB4TGFiZWxTaXplLCB5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSA1O1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwibGluZWNoYXJ0X2xhYmVsXCI+XHJcbiAgICAgICAgICB7LyogWSBBWElTIExBQkVMUyAqL31cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemUvMn0sIDIwKWB9IHRleHRBbmNob3I9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAge3RoaXMuZ2V0WSgpLm1heC50b0xvY2FsZVN0cmluZygndXMtRU4nLHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9KX1cclxuICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemUvMn0sICR7c3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSAtIHBhZGRpbmd9KWB9IHRleHRBbmNob3I9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAge3RoaXMuZ2V0WSgpLm1pbi50b0xvY2FsZVN0cmluZygndXMtRU4nLHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9KX1cclxuICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgIHsvKiBYIEFYSVMgTEFCRUxTICovfVxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7eUxhYmVsU2l6ZX0sICR7c3ZnSGVpZ2h0fSlgfSB0ZXh0QW5jaG9yPVwic3RhcnRcIj5cclxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmRhdGFbMF0uZCB9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtzdmdXaWR0aH0sICR7c3ZnSGVpZ2h0fSlgfSB0ZXh0QW5jaG9yPVwiZW5kXCI+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZGF0YS5sZW5ndGggLSAxXS5kIH1cclxuICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIC8vIEZJTkQgQ0xPU0VTVCBQT0lOVCBUTyBNT1VTRVxyXG4gICAgZ2V0Q29vcmRzKGUpe1xyXG4gICAgICBjb25zdCB7c3ZnV2lkdGgsIGRhdGEsIHlMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3Qgc3ZnTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGluZWNoYXJ0XCIpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBhZGp1c3RtZW50ID0gKHN2Z0xvY2F0aW9uLndpZHRoIC0gc3ZnV2lkdGgpIC8gMjsgLy90YWtlcyBwYWRkaW5nIGludG8gY29uc2lkZXJhdGlvblxyXG4gICAgICBjb25zdCByZWxhdGl2ZUxvYyA9IGUuY2xpZW50WCAtIHN2Z0xvY2F0aW9uLmxlZnQgLSBhZGp1c3RtZW50O1xyXG4gIFxyXG4gICAgICBsZXQgc3ZnRGF0YSA9IFtdO1xyXG4gICAgICBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICBzdmdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgc3ZnWDogdGhpcy5nZXRTdmdYKHBvaW50LngpLFxyXG4gICAgICAgICAgc3ZnWTogdGhpcy5nZXRTdmdZKHBvaW50LnkpLFxyXG4gICAgICAgICAgZDogcG9pbnQuZCxcclxuICAgICAgICAgIHA6IHBvaW50LnBcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGxldCBjbG9zZXN0UG9pbnQgPSB7fTtcclxuICAgICAgZm9yKGxldCBpID0gMCwgYyA9IDUwMDsgaSA8IHN2Z0RhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmICggTWF0aC5hYnMoc3ZnRGF0YVtpXS5zdmdYIC0gdGhpcy5zdGF0ZS5ob3ZlckxvYykgPD0gYyApe1xyXG4gICAgICAgICAgYyA9IE1hdGguYWJzKHN2Z0RhdGFbaV0uc3ZnWCAtIHRoaXMuc3RhdGUuaG92ZXJMb2MpO1xyXG4gICAgICAgICAgY2xvc2VzdFBvaW50ID0gc3ZnRGF0YVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYocmVsYXRpdmVMb2MgLSB5TGFiZWxTaXplIDwgMCl7XHJcbiAgICAgICAgdGhpcy5zdG9wSG92ZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGhvdmVyTG9jOiByZWxhdGl2ZUxvYyxcclxuICAgICAgICAgIGFjdGl2ZVBvaW50OiBjbG9zZXN0UG9pbnRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFydEhvdmVyKHJlbGF0aXZlTG9jLCBjbG9zZXN0UG9pbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBTVE9QIEhPVkVSXHJcbiAgICBzdG9wSG92ZXIoKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXJMb2M6IG51bGwsIGFjdGl2ZVBvaW50OiBudWxsfSk7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFydEhvdmVyKG51bGwsIG51bGwpO1xyXG4gICAgfVxyXG4gICAgLy8gTUFLRSBBQ1RJVkUgUE9JTlRcclxuICAgIG1ha2VBY3RpdmVQb2ludCgpe1xyXG4gICAgICBjb25zdCB7Y29sb3IsIHBvaW50UmFkaXVzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGluZWNoYXJ0X3BvaW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tzdHJva2U6IGNvbG9yfX1cclxuICAgICAgICAgIHI9e3BvaW50UmFkaXVzfVxyXG4gICAgICAgICAgY3g9e3RoaXMuc3RhdGUuYWN0aXZlUG9pbnQuc3ZnWH1cclxuICAgICAgICAgIGN5PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50LnN2Z1l9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgSE9WRVIgTElORVxyXG4gICAgY3JlYXRlTGluZSgpe1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCB4TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpbmUgY2xhc3NOYW1lPXtzdHlsZXMuaG92ZXJMaW5lfVxyXG4gICAgICAgICAgeDE9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IHkxPXstOH1cclxuICAgICAgICAgIHgyPXt0aGlzLnN0YXRlLmhvdmVyTG9jfSB5Mj17c3ZnSGVpZ2h0IC0geExhYmVsU2l6ZX0gLz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCBzdmdXaWR0aH0gPSB0aGlzLnByb3BzO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgIHdpZHRoPXtzdmdXaWR0aH0gaGVpZ2h0PXtzdmdIZWlnaHR9IHZpZXdCb3g9e2AwIDAgJHtzdmdXaWR0aH0gJHtzdmdIZWlnaHR9YH0gY2xhc3NOYW1lPXtzdHlsZXMubGluZWNoYXJ0fVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ICgpID0+IHRoaXMuc3RvcEhvdmVyKCkgfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsgKGUpID0+IHRoaXMuZ2V0Q29vcmRzKGUpIH0gPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VBeGlzKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VQYXRoKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VBcmVhKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VMYWJlbHMoKX1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaG92ZXJMb2MgPyB0aGlzLmNyZWF0ZUxpbmUoKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gdGhpcy5tYWtlQWN0aXZlUG9pbnQoKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIERFRkFVTFQgUFJPUFNcclxuICBMaW5lQ2hhcnQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGF0YTogW10sXHJcbiAgICBjb2xvcjogJyMyMTk2RjMnLFxyXG4gICAgcG9pbnRSYWRpdXM6IDUsXHJcbiAgICBzdmdIZWlnaHQ6IDMwMCxcclxuICAgIHN2Z1dpZHRoOiA5MDAsXHJcbiAgICB4TGFiZWxTaXplOiAyMCxcclxuICAgIHlMYWJlbFNpemU6IDgwXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDsiXSwic291cmNlUm9vdCI6IiJ9