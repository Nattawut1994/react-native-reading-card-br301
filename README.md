# react-native-reading-card-br301-ntl

React Native library for BR301 card reader integration with React Native 0.81.0+ support - NTL Edition.

Modified from: [repository](https://github.com/realoiji/react-native-ntl-id-card-reader.git)  
SDKs: [version 3.5.64](https://github.com/FeitianSmartcardReader/FEITIAN_MOBILE_READERS.git)

## 🚀 Features

- ✅ **React Native 0.81.0** full compatibility
- ✅ **New Architecture** (Fabric + TurboModules) support
- ✅ **TypeScript** support with type definitions
- ✅ **iOS 13.4+** and **Android API 24+** support
- ✅ **Auto-linking** for easy installation
- ✅ **BR301 Card Reader** integration
- ✅ **Both architectures** supported (Old + New)

## 📦 Installation

### Using npm
```bash
npm install react-native-reading-card-br301-ntl
```

### Using yarn
```bash
yarn add react-native-reading-card-br301-ntl
```

### iOS Setup
```bash
cd ios && pod install
```

## 🔧 Usage

```javascript
import React from 'react';
import { View, Button, Alert } from 'react-native';
import { multiply } from 'react-native-reading-card-br301-ntl';
import CardReaderModule from 'react-native-reading-card-br301-ntl';

export default function App() {
  const testMultiply = async () => {
    try {
      const result = await multiply(6, 7);
      Alert.alert('Result', `6 × 7 = ${result}`);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button title="Test Multiply" onPress={testMultiply} />
    </View>
  );
}
```

## 🆕 New Architecture Support

### Enable New Architecture

#### iOS
```bash
export RCT_NEW_ARCH_ENABLED=1
cd ios && pod install && cd ..
```

#### Android
```bash
echo "newArchEnabled=true" >> android/gradle.properties
```

## 📋 Requirements

- **React Native**: 0.81.0+
- **iOS**: 13.4+
- **Android**: API 24+ (Android 7.0)
- **Xcode**: 15.0+
- **Node.js**: 16+

## Configuration IOS

```js
[[info.plist]]
<key>NSBluetoothAlwaysUsageDescription</key>
<string>App need your approval to access to the bluetooth</string>
<key>UISupportedExternalAccessoryProtocols</key>
<array>
    <string>com.ftsafe.bR301</string>
    <string>com.ftsafe.iR301</string>
    <string>com.ftsafe.ir301</string>
    <string>com.ftsafe.br301</string>
</array>
<key>NSBluetoothPeripheralUsageDescription</key>
<string>App need your approval to access to the bluetooth</string>
<key>UIBackgroundModes</key>
<array>
    <string>external-accessory</string>
</array>

[[Link Binary With Libraries]]
-libiRockey301_3.5.64_Release
-CoreBluetooth.framework
-ExternalAccessory.framework
```

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
