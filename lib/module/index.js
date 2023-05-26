import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-reading-card-br301' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const FeitianBr301Module = NativeModules.FeitianBr301Module ? NativeModules.FeitianBr301Module : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }

});
export function multiply(a, b) {
  return FeitianBr301Module.multiply(a, b);
}
const CardReaderModule = NativeModules.CardReaderModule ? NativeModules.CardReaderModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }

});
export default CardReaderModule;
//# sourceMappingURL=index.js.map