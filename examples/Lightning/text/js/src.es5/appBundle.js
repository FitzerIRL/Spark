"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.appBundle = factory();
})(void 0, function () {
  'use strict';

  var MyApp =
  /*#__PURE__*/
  function (_ux$App) {
    _inherits(MyApp, _ux$App);

    function MyApp() {
      _classCallCheck(this, MyApp);

      return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
    }

    _createClass(MyApp, null, [{
      key: "_template",
      value: function _template() {
        return {
          Text1: {
            x: 50,
            text: {
              fontSize: 36,
              textAlign: 'center',
              maxLines: 2,
              text: 'Text a little too long so this part won\'t be visible',
              wordWrapWidth: 180,
              textColor: 0xffff00ff
            }
          },
          Text2: {
            x: 20,
            y: 100,
            text: {
              fontSize: 60,
              text: 'STYLE IT UP! ',
              fontStyle: 'italic bold',
              textColor: 0xff00ffff,
              shadow: true,
              shadowColor: 0xffff00ff,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
              shadowBlur: 2
            }
          },
          Text3: {
            mountX: 1,
            x: 500,
            y: 220,
            text: {
              fontSize: 48,
              textAlign: 'right',
              text: 'you can also add\nline breaks\nusing\n\\n!',
              lineHeight: 80
            }
          }
        };
      }
    }]);

    return MyApp;
  }(ux.App);

  MyApp.COLORS = {
    BACKGROUND: 0xff282e32
  };
  return MyApp;
});