"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.multiply = multiply;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-reading-card-br301' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const FeitianBr301Module = _reactNative.NativeModules.FeitianBr301Module ? _reactNative.NativeModules.FeitianBr301Module : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function multiply(a, b) {
  return FeitianBr301Module.multiply(a, b);
}
const CardReaderModule = _reactNative.NativeModules.CardReaderModule ? _reactNative.NativeModules.CardReaderModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
var _default = exports.default = CardReaderModule;
//# sourceMappingURL=index.js.map