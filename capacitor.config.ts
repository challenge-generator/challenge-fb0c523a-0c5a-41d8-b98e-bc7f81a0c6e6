import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fintech.mobile.app',
  appName: 'Fintech Mobile',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    cleartext: false,
    allowNavigation: []
  },
  android: {
    path: 'android',
    includePlugins: true,
    minSdkVersion: 22,
    flavorDimensions: null,
    buildOptions: {
      signingType: 'debug',
      keystorePath: null,
      keystoreAlias: null
    }
  },
  ios: {
    path: 'ios/App',
    scheme: 'App',
    includePlugins: true,
    minVersion: '13.0',
    target: '15.0',
    usesTabs: false,
    backgroundColor: '#ffffff',
    allowLinkPreview: false,
    preferredContentMode: 'mobile'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999'
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#ffffff'
    },
    Keyboard: {
      resizeOnFullScreen: true,
      style: 'dark'
    }
  },
  cordova: {}
};

export default config;