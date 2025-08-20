# Commit Messages Summary

## Main Commit Message:

```
feat: upgrade to React Native 0.81.0 with New Architecture support

- Updated package dependencies to React Native 0.81.0
- Added New Architecture (Fabric + TurboModules) support
- Enhanced iOS and Android native module compatibility
- Improved TypeScript configuration and build process
- Added comprehensive documentation and installation guides

BREAKING CHANGES:
- Minimum iOS version increased to 13.4
- Minimum Android API increased to 24 (Android 7.0)
- Updated Folly version to 2024.06.10.00
- Requires Node.js 16+ for development
```

## Alternative Shorter Version:

```
feat: upgrade to React Native 0.81.0 with New Architecture

- Add New Architecture (Fabric + TurboModules) support
- Update iOS minimum to 13.4, Android to API 24
- Enhance TypeScript and build configuration
- Add installation and testing guides
```

## Conventional Commits Format:

```
feat(core): upgrade React Native to 0.81.0 with New Architecture support

- feat(ios): update minimum iOS version to 13.4 and add New Architecture support
- feat(android): update minimum Android API to 24 and enhance Gradle config
- feat(typescript): improve TypeScript configuration and type definitions
- feat(build): update dependencies and build tools for RN 0.81.0
- docs: add comprehensive installation and testing guides
- fix(deps): resolve RCT-Folly dependency conflicts

BREAKING CHANGES:
- iOS minimum version: 10.0 → 13.4
- Android minimum API: 21 → 24
- Node.js minimum version: 14+ → 16+
```

## Files Changed Summary:

### Core Package Files:
- `package.json` - Updated dependencies and version to 1.2.0
- `babel.config.js` - Updated to use @react-native/babel-preset
- `metro.config.js` - Added React Native 0.81.0 configuration
- `tsconfig.json` - Enhanced TypeScript configuration

### iOS Changes:
- `react-native-reading-card-br301-ntl.podspec` - Updated Folly version and iOS minimum
- `ios/FeitianBr301Module.h` - Added New Architecture support
- `ios/FeitianBr301Module.mm` - Enhanced TurboModule implementation

### Android Changes:
- `android/build.gradle` - Updated AGP to 8.7.2
- `android/gradle.properties` - Updated SDK versions and Gradle settings

### New Files:
- `src/NativeFeitianBr301Module.ts` - TurboModule specification
- `react-native-codegen.json` - CodeGen configuration
- `react-native.config.js` - Auto-linking configuration
- `CHANGELOG.md` - Version history documentation
- `INSTALLATION_GUIDE.md` - Detailed installation instructions
- `TESTING_GUIDE.md` - Testing procedures
- `EXAMPLE_USAGE.tsx` - Usage examples

### Built Files:
- `lib/commonjs/` - Updated CommonJS build
- `lib/module/` - Updated ES Module build
- `lib/typescript/` - Added TypeScript definitions
