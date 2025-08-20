# Testing Guide for react-native-reading-card-br301-ntl

## 1. ทดสอบการติดตั้งในโปรเจคใหม่

```bash
# สร้างโปรเจค React Native ใหม่
npx @react-native-community/cli@latest init TestProject --version 0.81.0
cd TestProject

# ติดตั้งแพคเกจ
npm install file:../path/to/react-native-reading-card-br301-ntl

# iOS
cd ios && pod install && cd ..
npx react-native run-ios

# Android  
npx react-native run-android
```

## 2. ทดสอบการใช้งาน

```javascript
// App.tsx
import React from 'react';
import { View, Button, Alert } from 'react-native';
import { multiply } from 'react-native-reading-card-br301-ntl';
import CardReaderModule from 'react-native-reading-card-br301-ntl';

export default function App() {
  const testMultiply = async () => {
    try {
      const result = await multiply(3, 7);
      Alert.alert('Result', `3 × 7 = ${result}`);
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

## 3. ทดสอบ New Architecture (Fabric + TurboModules)

```bash
# Enable New Architecture
# iOS
export RCT_NEW_ARCH_ENABLED=1
cd ios && pod install && cd ..

# Android
echo "newArchEnabled=true" >> android/gradle.properties

# Build และทดสอบ
npx react-native run-ios
npx react-native run-android
```

## 4. ตรวจสอบ Build ใน Production

```bash
# iOS Release
npx react-native run-ios --configuration Release

# Android Release
npx react-native run-android --variant release
```

## 5. ทดสอบใน TypeScript Project

```bash
# สร้างโปรเจค TypeScript
npx @react-native-community/cli@latest init TestTSProject --version 0.81.0 --template react-native-template-typescript
```

## 6. ปัญหาที่อาจเกิดขึ้นและวิธีแก้

### iOS
- หาก pod install ล้มเหลว: `cd ios && rm -rf Pods Podfile.lock && pod install`
- หาก build ล้มเหลวเรื่อง RCT-Folly: ตรวจสอบ Xcode version (ต้อง 15.0+)

### Android
- หาก build ล้มเหลว: ตรวจสอบ Gradle version และ AGP compatibility
- ตรวจสอบ NDK version ใน android/gradle.properties

### TypeScript
- หาก type definitions ไม่ทำงาน: ลอง rebuild และ restart TypeScript server
