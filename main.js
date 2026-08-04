const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // セキュリティのため有効推奨
    },
  });

  // --- ここを修正します ---
  // 開発環境(npm start) か 本番環境(ビルド後) かを判定
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    // 開発時はローカルサーバーに接続（例: Reactのポート3000など）
    mainWindow.loadURL('http://localhost:3000');
  } else {
    // 本番環境（ビルド後）は、アプリ内にある index.html を読み込む
    // __dirname は実行ファイルの場所(例: C:\Program Files\NijinApp\resources\app.asar\)
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    // もし index.html がサブフォルダ(dist/index.html など)にある場合は以下のように調整
    // mainWindow.loadFile(path.join(__dirname, 'dist/index.html'));
  }
  // ------------------------

  // デバッグ用に開発者ツールを開く（必要に応じてコメントアウトを外す）
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);
