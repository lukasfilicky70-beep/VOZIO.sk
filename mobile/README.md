# VOZIO Mobile (Capacitor)

This is the first mobile-app scaffold for VOZIO. It reuses the current website as its web UI so the existing pages, authentication and Supabase-backed listings remain the shared starting point.

## Requirements

- Node.js 20+
- Android Studio for Android builds
- Xcode on macOS for iOS builds

## Setup

From this directory:

```sh
npm install
npm run cap:add:android
# On macOS, also:
npm run cap:add:ios
npm run cap:sync
```

Open native projects:

```sh
npm run cap:open:android
npm run cap:open:ios
```

## Current status

- Capacitor project configuration and scripts are prepared.
- The app currently loads the website from the repository root (`webDir: ..`).
- Android/iOS native project folders are generated locally by Capacitor commands; they are not committed yet.
- Native camera, push notifications and OBD-II transports are not implemented by this scaffold. They need platform plugins and device testing.
- The site should be served from a local web server during development/deployment; test the Supabase auth redirect URLs and storage policies on native devices before release.

This scaffold is an initial conversion step, not a finished or store-ready mobile application.
