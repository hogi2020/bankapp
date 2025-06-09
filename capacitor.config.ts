import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.bankapp',
  appName: 'bankapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
