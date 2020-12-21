'use strict';


//-----------------------
// Electronのモジュール
const electron = require("electron");


// アプリケーションをコントロールするモジュール
const app = electron.app;
app.allowRendererProcessReuse = false;

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog = electron.dialog;
const fs = require('fs');

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function() {  
  mainWindow = new BrowserWindow({width: 1960, height: 1080, useContentSize: true, webPreferences: { nodeIntegration: true }});  
  mainWindow.setMenu(null);
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});



