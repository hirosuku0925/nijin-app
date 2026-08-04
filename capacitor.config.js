/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'com.nijin.app.universal',
  appName: 'nijin-app',
  webDir: 'dist', // またはビルド成果物のディレクトリ名に合わせて変更してください
  server: {
    androidScheme: 'https'
  }
};

module.exports = config;
