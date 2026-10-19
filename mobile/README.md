# VOZIO Mobile — Capacitor starter

This folder is the starting point for the VOZIO Android/iOS app. It packages the existing VOZIO site so website pages and Supabase-backed content can be shared while native capabilities are added.

## Requirements
- Node.js 20 or newer
- Android Studio + Android SDK for Android
- macOS + Xcode for iOS (Apple's build/signing tools are macOS-only)

## First local setup

Run from this folder:

    npm install
    npm run cap:add:android
    npm run cap:sync
    npm run cap:open:android

For iOS, on a Mac:

    npm run cap:add:ios
    npm run cap:sync
    npm run cap:open:ios

After opening Android Studio or Xcode, build and run on an emulator/simulator or connected device. Capacitor copies the website from the repository root (`webDir: ..`) into native app assets during sync.

## Included native plugin dependencies
- Camera — native camera/photo selection support
- Geolocation — native location support
- Status bar and splash screen — mobile presentation controls

The plugins are dependencies only; native permission flows and app features still need implementation and device testing.

## Before public release
- Configure Supabase auth redirect/deep-link URLs for `sk.vozio.app` and test login/logout on iOS and Android.
- Verify photo uploads and Storage policies on real devices.
- Add and test native OBD transport modules (Wi-Fi/TCP, BLE, and platform-specific Bluetooth Classic/USB as supported). The current Drive Meter OBD page is a UI prototype and does not yet read live car data.
- Test offline/error behavior, app icons, splash assets, accessibility, and store signing.
- Generate native project folders with Capacitor on a developer machine; this starter does not include a built APK/IPA and is not store-ready yet.