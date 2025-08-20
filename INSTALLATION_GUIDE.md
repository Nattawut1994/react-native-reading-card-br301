# การติดตั้งและใช้งาน react-native-reading-card-br301-ntl

## 🚀 Quick Start

### 1. สร้างโปรเจค React Native ใหม่

```bash
# สร้างโปรเจค React Native 0.81.0
npx @react-native-community/cli@latest init MyCardReaderApp --version 0.81.0

# หรือใช้ TypeScript template
npx @react-native-community/cli@latest init MyCardReaderApp --version 0.81.0 --template react-native-template-typescript

cd MyCardReaderApp
```

### 2. ติดตั้งแพคเกจ

```bash
# วิธีที่ 1: ติดตั้งจาก Local Path (แนะนำ)
npm install file:../path/to/react-native-reading-card-br301-ntl

# วิธีที่ 2: ติดตั้งจาก Git Repository พร้อม tag
npm install git+https://github.com/Nattawut1994/react-native-reading-card-br301.git#main

# วิธีที่ 3: ติดตั้งจาก npm registry (ถ้า publish แล้ว)
npm install react-native-reading-card-br301-ntl

# หรือใช้ yarn
yarn add file:../path/to/react-native-reading-card-br301-ntl
yarn add git+https://github.com/Nattawut1994/react-native-reading-card-br301.git#main
yarn add react-native-reading-card-br301-ntl
```

### 3. ติดตั้งและตั้งค่าสำหรับ iOS

```bash
cd ios
pod install
cd ..
```

### 4. ตั้งค่าสำหรับ Android

Android จะใช้ auto-linking ไม่ต้องตั้งค่าเพิ่มเติม

### 5. เรียกใช้งาน

```bash
# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

## 🔧 การตั้งค่า New Architecture (Optional)

### สำหรับ iOS
```bash
export RCT_NEW_ARCH_ENABLED=1
cd ios && pod install && cd ..
npx react-native run-ios
```

### สำหรับ Android
```bash
# เพิ่มในไฟล์ android/gradle.properties
echo "newArchEnabled=true" >> android/gradle.properties
npx react-native run-android
```

## 💻 ตัวอย่างการใช้งานใน App.js/App.tsx

```javascript
import React from 'react';
import { View, Button, Alert } from 'react-native';
import { multiply } from 'react-native-reading-card-br301-ntl';
import CardReaderModule from 'react-native-reading-card-br301-ntl';

export default function App() {
  const testFunction = async () => {
    try {
      // ทดสอบ multiply function
      const result = await multiply(6, 7);
      Alert.alert('Success', `6 × 7 = ${result}`);
      
      // ใช้งาน CardReaderModule (เพิ่ม methods ตาม BR301 API)
      console.log('CardReaderModule:', CardReaderModule);
      
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button title="Test Card Reader Package" onPress={testFunction} />
    </View>
  );
}
```

## 📋 Requirements

- **React Native**: 0.81.0+
- **iOS**: 13.4+
- **Android**: API 24+ (Android 7.0)
- **Xcode**: 15.0+ (สำหรับ iOS)
- **Android Studio**: 2023.1+ (สำหรับ Android)
- **Node.js**: 16+

## 🐛 Troubleshooting

### iOS Issues
```bash
# ถ้า pod install ล้มเหลว
cd ios
rm -rf Pods Podfile.lock
pod install --repo-update

# ถ้า build ล้มเหลว
npx react-native clean
cd ios && xcodebuild clean && cd ..
```

### Android Issues
```bash
# ถ้า build ล้มเหลว
npx react-native clean
cd android && ./gradlew clean && cd ..

# ตรวจสอบ Android SDK และ NDK version
```

### TypeScript Issues
```bash
# Restart TypeScript server
npx react-native start --reset-cache

# หรือใน VS Code: Cmd+Shift+P -> "TypeScript: Restart TS Server"
```

## 📚 API Reference

### Functions

```typescript
// ฟังก์ชันทดสอบ
multiply(a: number, b: number): Promise<number>

// CardReaderModule - เพิ่ม methods ตาม BR301 API
CardReaderModule.methodName()
```

## 🔄 การอัปเดต Package

```bash
# อัปเดตเป็นเวอร์ชันใหม่
npm update react-native-reading-card-br301-ntl

# หรือติดตั้งเวอร์ชันใหม่
npm install react-native-reading-card-br301-ntl@latest
```

## ⚡ Performance Tips

1. **ใช้ New Architecture** สำหรับประสิทธิภาพที่ดีขึ้น
2. **Enable Hermes** ใน React Native 0.81.0 (เปิดใช้งานอัตโนมัติ)
3. **ใช้ Release Build** สำหรับการทดสอบประสิทธิภาพ

```bash
# Build Release สำหรับทดสอบ
npx react-native run-ios --configuration Release
npx react-native run-android --variant release
```
