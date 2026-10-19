import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'sk.vozio.app',
  appName: 'VOZIO',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: { launchShowDuration: 1800, backgroundColor: '#080808' },
    StatusBar: { backgroundColor: '#080808', style: 'DARK' }
  }
};
export default config;