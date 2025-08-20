# 📦 คำสั่งติดตั้ง React Native Reading Card BR301 - NTL Edition

## 🎯 **สำหรับ Development/Testing (แนะนำ)**

### ติดตั้งจาก Local Path
```bash
# ใช้เมื่อต้องการ develop หรือ test package
npm install file:../react-native-reading-card-br301

# หรือ
yarn add file:../react-native-reading-card-br301
```

### ติดตั้งจาก Git Repository (Specific Branch/Tag)
```bash
# ติดตั้งจาก main branch
npm install git+https://github.com/Nattawut1994/react-native-reading-card-br301.git#main

# ติดตั้งจาก specific tag (ถ้ามี)
npm install git+https://github.com/Nattawut1994/react-native-reading-card-br301.git#v1.2.0

# ใช้ yarn
yarn add git+https://github.com/Nattawut1994/react-native-reading-card-br301.git#main
```

## 🚀 **สำหรับ Production (Published on npm)**

### ติดตั้งจาก NPM Registry
```bash
# ติดตั้งจาก npm registry
npm install react-native-reading-card-br301-ntl

# หรือ
yarn add react-native-reading-card-br301-ntl

# ระบุ version เฉพาะ
yarn add react-native-reading-card-br301-ntl@1.2.0
```

## 📋 **การใช้งานใน Code**

### Import Statement
```typescript
// ใน TypeScript/JavaScript files
import { multiply } from 'react-native-reading-card-br301-ntl';
import CardReaderModule from 'react-native-reading-card-br301-ntl';

// หรือถ้าใช้ local installation
import { multiply } from 'react-native-reading-card-br301';
import CardReaderModule from 'react-native-reading-card-br301';
```

### Package.json Dependencies
```json
{
  "dependencies": {
    "@nattawut1994/react-native-reading-card-br301": "^1.2.0"
  }
}
```

## 🔧 **สำหรับ Monorepo/Workspace**

### Yarn Workspaces
```json
// package.json ใน root workspace
{
  "workspaces": [
    "apps/*",
    "libs/react-native-reading-card-br301"
  ]
}
```

### การ Link Local Package
```bash
# ใน directory ของ main app
yarn add link:../libs/react-native-reading-card-br301

# หรือ
npm install file:../libs/react-native-reading-card-br301
```

## 🏗️ **สำหรับ CI/CD**

### GitHub Actions / Docker
```dockerfile
# ใน Dockerfile
RUN npm install git+https://github.com/Nattawut1994/react-native-reading-card-br301.git#main
```

### Package.json สำหรับ CI
```json
{
  "dependencies": {
    "@nattawut1994/react-native-reading-card-br301": "git+https://github.com/Nattawut1994/react-native-reading-card-br301.git#main"
  }
}
```

## ⚠️ **หมายเหตุสำคัญ**

1. **Scoped Package Name**: `@nattawut1994/react-native-reading-card-br301` จะไม่ซ้ำกับ package อื่น
2. **Git Installation**: แนะนำใช้ specific tag หรือ commit hash สำหรับ production
3. **Local Development**: ใช้ `file:` protocol สำหรับการพัฒนา
4. **Auto-linking**: React Native 0.60+ จะทำ auto-linking อัตโนมัติ

## 🔍 **การตรวจสอบการติดตั้ง**

```bash
# ตรวจสอบว่าติดตั้งสำเร็จ
npm list @nattawut1994/react-native-reading-card-br301

# หรือ
yarn why @nattawut1994/react-native-reading-card-br301
```

## 📞 **ติดต่อ/ช่วยเหลือ**

- **Repository**: https://github.com/Nattawut1994/react-native-reading-card-br301
- **Issues**: สร้าง issue ใน GitHub repository
- **Version**: 1.2.0 (React Native 0.81.0 Compatible)
