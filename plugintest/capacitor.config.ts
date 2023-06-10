import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.mide.ionic.plugintest',
  appName: 'Plugin-Test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
