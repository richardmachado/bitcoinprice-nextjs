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

var LineChart = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LineChart, _Component);

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
}(Component); // DEFAULT PROPS


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

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
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
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LineChart */ "./components/LineChart.js");
/* harmony import */ var _ToolTip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ToolTip */ "./components/ToolTip.js");
/* harmony import */ var _InfoBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InfoBox */ "./components/InfoBox.js");





var _jsxFileName = "D:\\Lambda\\Next\\BITZPRICE\\components\\Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    _this = _super.call(this, props);
    _this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "handleChartHover",
    value: function handleChartHover(hoverLoc, activePoint) {
      this.setState({
        hoverLoc: hoverLoc,
        activePoint: activePoint
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var getData = function getData() {
        var url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
        fetch(url).then(function (r) {
          return r.json();
        }).then(function (bitcoinData) {
          var sortedData = [];
          var count = 0;

          for (var date in bitcoinData.bpi) {
            sortedData.push({
              d: moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format('MMM DD'),
              p: bitcoinData.bpi[date].toLocaleString('us-EN', {
                style: 'currency',
                currency: 'USD'
              }),
              x: count,
              //previous days
              y: bitcoinData.bpi[date] // numerical price

            });
            count++;
          }

          _this2.setState({
            data: sortedData,
            fetchingData: false
          });
        })["catch"](function (e) {
          console.log(e);
        });
      };

      getData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, "30 Day Bitcoin Price Chart")), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, !this.state.fetchingData ? __jsx(_InfoBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: this.state.data,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      }) : null), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, this.state.hoverLoc ? __jsx(_ToolTip__WEBPACK_IMPORTED_MODULE_8__["default"], {
        hoverLoc: this.state.hoverLoc,
        activePoint: this.state.activePoint,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 40
        }
      }) : null)), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "chart",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }, !this.state.fetchingData ? __jsx(_LineChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: this.state.data,
        onChartHover: function onChartHover(a, b) {
          return _this3.handleChartHover(a, b);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 19
        }
      }) : null)), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "coindesk",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
        }
      }, " Powered by ", __jsx("a", {
        href: "http://www.coindesk.com/price/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 46
        }
      }, "CoinDesk"))));
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaW5lQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm5hbWVzIjpbIkxpbmVDaGFydCIsInByb3BzIiwic3RhdGUiLCJob3ZlckxvYyIsImFjdGl2ZVBvaW50IiwiZGF0YSIsIm1pbiIsIngiLCJtYXgiLCJsZW5ndGgiLCJyZWR1Y2UiLCJwIiwieSIsInN2Z1dpZHRoIiwieUxhYmVsU2l6ZSIsImdldFgiLCJzdmdIZWlnaHQiLCJ4TGFiZWxTaXplIiwiZ1kiLCJnZXRZIiwiY29sb3IiLCJwYXRoRCIsImdldFN2Z1giLCJnZXRTdmdZIiwibWFwIiwicG9pbnQiLCJpIiwiam9pbiIsInN0cm9rZSIsInBhZGRpbmciLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJkIiwiZSIsInN2Z0xvY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYWRqdXN0bWVudCIsIndpZHRoIiwicmVsYXRpdmVMb2MiLCJjbGllbnRYIiwibGVmdCIsInN2Z0RhdGEiLCJwdXNoIiwic3ZnWCIsInN2Z1kiLCJjbG9zZXN0UG9pbnQiLCJjIiwiTWF0aCIsImFicyIsInN0b3BIb3ZlciIsInNldFN0YXRlIiwib25DaGFydEhvdmVyIiwicG9pbnRSYWRpdXMiLCJnZXRDb29yZHMiLCJtYWtlQXhpcyIsIm1ha2VQYXRoIiwibWFrZUFyZWEiLCJtYWtlTGFiZWxzIiwiY3JlYXRlTGluZSIsIm1ha2VBY3RpdmVQb2ludCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIlByaWNlcyIsImZldGNoaW5nRGF0YSIsImdldERhdGEiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImJpdGNvaW5EYXRhIiwic29ydGVkRGF0YSIsImNvdW50IiwiZGF0ZSIsImJwaSIsIm1vbWVudCIsImZvcm1hdCIs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QUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxDQUFDLEtBQUtGLEtBQUwsQ0FBV2dFLFlBQVosR0FDQSxNQUFDLG1EQUFEO0FBQVcsWUFBSSxFQUFFLEtBQUtoRSxLQUFMLENBQVdHLElBQTVCO0FBQWtDLG9CQUFZLEVBQUcsc0JBQUM2RSxDQUFELEVBQUdDLENBQUg7QUFBQSxpQkFBUyxNQUFJLENBQUNDLGdCQUFMLENBQXNCRixDQUF0QixFQUF3QkMsQ0FBeEIsQ0FBVDtBQUFBLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQSxHQUVFLElBSE4sQ0FERixDQWRGLEVBcUJFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLFVBQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQStCO0FBQUcsWUFBSSxFQUFDLGdDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQS9CLENBREYsQ0FyQkYsQ0FGRjtBQTZCRDs7OztFQTFFY0UsNENBQUssQ0FBQ3RCLFM7O0FBNkVaRSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMzYyMTMxM2QxZTAzNTM5OGExNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBob3ZlckxvYzogbnVsbCxcclxuICAgICAgICBhY3RpdmVQb2ludDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBHRVQgWCAmIFkgfHwgTUFYICYgTUlOXHJcbiAgICBnZXRYKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhWzBdLngsXHJcbiAgICAgICAgbWF4OiBkYXRhW2RhdGEubGVuZ3RoIC0gMV0ueFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRZKCl7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluOiBkYXRhLnJlZHVjZSgobWluLCBwKSA9PiBwLnkgPCBtaW4gPyBwLnkgOiBtaW4sIGRhdGFbMF0ueSksXHJcbiAgICAgICAgbWF4OiBkYXRhLnJlZHVjZSgobWF4LCBwKSA9PiBwLnkgPiBtYXggPyBwLnkgOiBtYXgsIGRhdGFbMF0ueSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gR0VUIFNWRyBDT09SRElOQVRFU1xyXG4gICAgZ2V0U3ZnWCh4KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdXaWR0aCwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4geUxhYmVsU2l6ZSArICh4IC8gdGhpcy5nZXRYKCkubWF4ICogKHN2Z1dpZHRoIC0geUxhYmVsU2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ZnWSh5KSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHhMYWJlbFNpemV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgZ1kgPSB0aGlzLmdldFkoKTtcclxuICAgICAgcmV0dXJuICgoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiBnWS5tYXggLSAoc3ZnSGVpZ2h0IC0geExhYmVsU2l6ZSkgKiB5KSAvIChnWS5tYXggLSBnWS5taW4pO1xyXG4gICAgfVxyXG4gICAgLy8gQlVJTEQgU1ZHIFBBVEhcclxuICAgIG1ha2VQYXRoKCkge1xyXG4gICAgICBjb25zdCB7ZGF0YSwgY29sb3J9ID0gdGhpcy5wcm9wcztcclxuICAgICAgbGV0IHBhdGhEID0gXCJNIFwiICsgdGhpcy5nZXRTdmdYKGRhdGFbMF0ueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShkYXRhWzBdLnkpICsgXCIgXCI7XHJcbiAgXHJcbiAgICAgIHBhdGhEICs9IGRhdGEubWFwKChwb2ludCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkwgXCIgKyB0aGlzLmdldFN2Z1gocG9pbnQueCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWShwb2ludC55KSArIFwiIFwiO1xyXG4gICAgICB9KS5qb2luKFwiXCIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImxpbmVjaGFydF9wYXRoXCIgZD17cGF0aER9IHN0eWxlPXt7c3Ryb2tlOiBjb2xvcn19IC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBTSEFERUQgQVJFQVxyXG4gICAgbWFrZUFyZWEoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBwYXRoRCA9IFwiTSBcIiArIHRoaXMuZ2V0U3ZnWChkYXRhWzBdLngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1koZGF0YVswXS55KSArIFwiIFwiO1xyXG4gIFxyXG4gICAgICBwYXRoRCArPSBkYXRhLm1hcCgocG9pbnQsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJMIFwiICsgdGhpcy5nZXRTdmdYKHBvaW50LngpICsgXCIgXCIgKyB0aGlzLmdldFN2Z1kocG9pbnQueSkgKyBcIiBcIjtcclxuICAgICAgfSkuam9pbihcIlwiKTtcclxuICBcclxuICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpO1xyXG4gICAgICBjb25zdCB5ID0gdGhpcy5nZXRZKCk7XHJcbiAgICAgIHBhdGhEICs9IFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1heCkgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIlxyXG4gICAgICArIFwiTCBcIiArIHRoaXMuZ2V0U3ZnWCh4Lm1pbikgKyBcIiBcIiArIHRoaXMuZ2V0U3ZnWSh5Lm1pbikgKyBcIiBcIjtcclxuICBcclxuICAgICAgcmV0dXJuIDxwYXRoIGNsYXNzTmFtZT1cImxpbmVjaGFydF9hcmVhXCIgZD17cGF0aER9IC8+XHJcbiAgICB9XHJcbiAgICAvLyBCVUlMRCBHUklEIEFYSVNcclxuICAgIG1ha2VBeGlzKCkge1xyXG4gICAgICBjb25zdCB7eUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB4ID0gdGhpcy5nZXRYKCk7XHJcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmdldFkoKTtcclxuICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJsaW5lY2hhcnRfYXhpc1wiPlxyXG4gICAgICAgICAgPGxpbmVcclxuICAgICAgICAgICAgeDE9e3RoaXMuZ2V0U3ZnWCh4Lm1pbikgLSB5TGFiZWxTaXplfSB5MT17dGhpcy5nZXRTdmdZKHkubWluKX1cclxuICAgICAgICAgICAgeDI9e3RoaXMuZ2V0U3ZnWCh4Lm1heCl9IHkyPXt0aGlzLmdldFN2Z1koeS5taW4pfVxyXG4gICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCI1XCIgLz5cclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPXt0aGlzLmdldFN2Z1goeC5taW4pIC0geUxhYmVsU2l6ZX0geTE9e3RoaXMuZ2V0U3ZnWSh5Lm1heCl9XHJcbiAgICAgICAgICAgIHgyPXt0aGlzLmdldFN2Z1goeC5tYXgpfSB5Mj17dGhpcy5nZXRTdmdZKHkubWF4KX1cclxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgbWFrZUxhYmVscygpe1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCBzdmdXaWR0aCwgeExhYmVsU2l6ZSwgeUxhYmVsU2l6ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBwYWRkaW5nID0gNTtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxnIGNsYXNzTmFtZT1cImxpbmVjaGFydF9sYWJlbFwiPlxyXG4gICAgICAgICAgey8qIFkgQVhJUyBMQUJFTFMgKi99XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAyMClgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5tYXgudG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt5TGFiZWxTaXplLzJ9LCAke3N2Z0hlaWdodCAtIHhMYWJlbFNpemUgLSBwYWRkaW5nfSlgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFkoKS5taW4udG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSl9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICB7LyogWCBBWElTIExBQkVMUyAqL31cclxuICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3lMYWJlbFNpemV9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5kYXRhWzBdLmQgfVxyXG4gICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7c3ZnV2lkdGh9LCAke3N2Z0hlaWdodH0pYH0gdGV4dEFuY2hvcj1cImVuZFwiPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC0gMV0uZCB9XHJcbiAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICAvLyBGSU5EIENMT1NFU1QgUE9JTlQgVE8gTU9VU0VcclxuICAgIGdldENvb3JkcyhlKXtcclxuICAgICAgY29uc3Qge3N2Z1dpZHRoLCBkYXRhLCB5TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHN2Z0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpbmVjaGFydFwiKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgYWRqdXN0bWVudCA9IChzdmdMb2NhdGlvbi53aWR0aCAtIHN2Z1dpZHRoKSAvIDI7IC8vdGFrZXMgcGFkZGluZyBpbnRvIGNvbnNpZGVyYXRpb25cclxuICAgICAgY29uc3QgcmVsYXRpdmVMb2MgPSBlLmNsaWVudFggLSBzdmdMb2NhdGlvbi5sZWZ0IC0gYWRqdXN0bWVudDtcclxuICBcclxuICAgICAgbGV0IHN2Z0RhdGEgPSBbXTtcclxuICAgICAgZGF0YS5tYXAoKHBvaW50LCBpKSA9PiB7XHJcbiAgICAgICAgc3ZnRGF0YS5wdXNoKHtcclxuICAgICAgICAgIHN2Z1g6IHRoaXMuZ2V0U3ZnWChwb2ludC54KSxcclxuICAgICAgICAgIHN2Z1k6IHRoaXMuZ2V0U3ZnWShwb2ludC55KSxcclxuICAgICAgICAgIGQ6IHBvaW50LmQsXHJcbiAgICAgICAgICBwOiBwb2ludC5wXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBsZXQgY2xvc2VzdFBvaW50ID0ge307XHJcbiAgICAgIGZvcihsZXQgaSA9IDAsIGMgPSA1MDA7IGkgPCBzdmdEYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoIE1hdGguYWJzKHN2Z0RhdGFbaV0uc3ZnWCAtIHRoaXMuc3RhdGUuaG92ZXJMb2MpIDw9IGMgKXtcclxuICAgICAgICAgIGMgPSBNYXRoLmFicyhzdmdEYXRhW2ldLnN2Z1ggLSB0aGlzLnN0YXRlLmhvdmVyTG9jKTtcclxuICAgICAgICAgIGNsb3Nlc3RQb2ludCA9IHN2Z0RhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmKHJlbGF0aXZlTG9jIC0geUxhYmVsU2l6ZSA8IDApe1xyXG4gICAgICAgIHRoaXMuc3RvcEhvdmVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBob3ZlckxvYzogcmVsYXRpdmVMb2MsXHJcbiAgICAgICAgICBhY3RpdmVQb2ludDogY2xvc2VzdFBvaW50XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihyZWxhdGl2ZUxvYywgY2xvc2VzdFBvaW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU1RPUCBIT1ZFUlxyXG4gICAgc3RvcEhvdmVyKCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyTG9jOiBudWxsLCBhY3RpdmVQb2ludDogbnVsbH0pO1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhcnRIb3ZlcihudWxsLCBudWxsKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgQUNUSVZFIFBPSU5UXHJcbiAgICBtYWtlQWN0aXZlUG9pbnQoKXtcclxuICAgICAgY29uc3Qge2NvbG9yLCBwb2ludFJhZGl1c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgIGNsYXNzTmFtZT0nbGluZWNoYXJ0X3BvaW50J1xyXG4gICAgICAgICAgc3R5bGU9e3tzdHJva2U6IGNvbG9yfX1cclxuICAgICAgICAgIHI9e3BvaW50UmFkaXVzfVxyXG4gICAgICAgICAgY3g9e3RoaXMuc3RhdGUuYWN0aXZlUG9pbnQuc3ZnWH1cclxuICAgICAgICAgIGN5PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50LnN2Z1l9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIC8vIE1BS0UgSE9WRVIgTElORVxyXG4gICAgY3JlYXRlTGluZSgpe1xyXG4gICAgICBjb25zdCB7c3ZnSGVpZ2h0LCB4TGFiZWxTaXplfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpbmUgY2xhc3NOYW1lPSdob3ZlckxpbmUnXHJcbiAgICAgICAgICB4MT17dGhpcy5zdGF0ZS5ob3ZlckxvY30geTE9ey04fVxyXG4gICAgICAgICAgeDI9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IHkyPXtzdmdIZWlnaHQgLSB4TGFiZWxTaXplfSAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtzdmdIZWlnaHQsIHN2Z1dpZHRofSA9IHRoaXMucHJvcHM7XHJcbiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyAgd2lkdGg9e3N2Z1dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gdmlld0JveD17YDAgMCAke3N2Z1dpZHRofSAke3N2Z0hlaWdodH1gfSBjbGFzc05hbWU9eydsaW5lY2hhcnQnfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17ICgpID0+IHRoaXMuc3RvcEhvdmVyKCkgfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsgKGUpID0+IHRoaXMuZ2V0Q29vcmRzKGUpIH0gPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VBeGlzKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VQYXRoKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VBcmVhKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLm1ha2VMYWJlbHMoKX1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaG92ZXJMb2MgPyB0aGlzLmNyZWF0ZUxpbmUoKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gdGhpcy5tYWtlQWN0aXZlUG9pbnQoKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIERFRkFVTFQgUFJPUFNcclxuICBMaW5lQ2hhcnQuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGF0YTogW10sXHJcbiAgICBjb2xvcjogJyMyMTk2RjMnLFxyXG4gICAgcG9pbnRSYWRpdXM6IDUsXHJcbiAgICBzdmdIZWlnaHQ6IDMwMCxcclxuICAgIHN2Z1dpZHRoOiA5MDAsXHJcbiAgICB4TGFiZWxTaXplOiAyMCxcclxuICAgIHlMYWJlbFNpemU6IDgwXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDsiLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gJy4vTGluZUNoYXJ0JztcclxuaW1wb3J0IFRvb2xUaXAgZnJvbSAnLi9Ub29sVGlwJztcclxuaW1wb3J0IEluZm9Cb3ggZnJvbSAnLi9JbmZvQm94JztcclxuXHJcbmNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgZmV0Y2hpbmdEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgIGhvdmVyTG9jOiBudWxsLFxyXG4gICAgICAgICAgYWN0aXZlUG9pbnQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlQ2hhcnRIb3Zlcihob3ZlckxvYywgYWN0aXZlUG9pbnQpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaG92ZXJMb2M6IGhvdmVyTG9jLFxyXG4gICAgICAgICAgYWN0aXZlUG9pbnQ6IGFjdGl2ZVBvaW50XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb24nO1xyXG4gICAgXHJcbiAgICAgICAgICBmZXRjaCh1cmwpLnRoZW4oIHIgPT4gci5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChiaXRjb2luRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGRhdGUgaW4gYml0Y29pbkRhdGEuYnBpKXtcclxuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIGQ6IG1vbWVudChkYXRlKS5mb3JtYXQoJ01NTSBERCcpLFxyXG4gICAgICAgICAgICAgICAgICBwOiBiaXRjb2luRGF0YS5icGlbZGF0ZV0udG9Mb2NhbGVTdHJpbmcoJ3VzLUVOJyx7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSksXHJcbiAgICAgICAgICAgICAgICAgIHg6IGNvdW50LCAvL3ByZXZpb3VzIGRheXNcclxuICAgICAgICAgICAgICAgICAgeTogYml0Y29pbkRhdGEuYnBpW2RhdGVdIC8vIG51bWVyaWNhbCBwcmljZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXHJcbiAgICAgICAgICAgICAgICBmZXRjaGluZ0RhdGE6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICA8aDE+MzAgRGF5IEJpdGNvaW4gUHJpY2UgQ2hhcnQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgeyAhdGhpcy5zdGF0ZS5mZXRjaGluZ0RhdGEgP1xyXG4gICAgICAgICAgICAgIDxJbmZvQm94IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gLz5cclxuICAgICAgICAgICAgICA6IG51bGwgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcHVwJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmhvdmVyTG9jID8gPFRvb2xUaXAgaG92ZXJMb2M9e3RoaXMuc3RhdGUuaG92ZXJMb2N9IGFjdGl2ZVBvaW50PXt0aGlzLnN0YXRlLmFjdGl2ZVBvaW50fS8+IDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydCc+XHJcbiAgICAgICAgICAgICAgICB7ICF0aGlzLnN0YXRlLmZldGNoaW5nRGF0YSA/XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBvbkNoYXJ0SG92ZXI9eyAoYSxiKSA9PiB0aGlzLmhhbmRsZUNoYXJ0SG92ZXIoYSxiKSB9Lz5cclxuICAgICAgICAgICAgICAgICAgOiBudWxsIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2luZGVza1wiPiBQb3dlcmVkIGJ5IDxhIGhyZWY9XCJodHRwOi8vd3d3LmNvaW5kZXNrLmNvbS9wcmljZS9cIj5Db2luRGVzazwvYT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9