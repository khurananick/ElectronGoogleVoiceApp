// Modules to control application life and create native browser window
let { app, BrowserView, BrowserWindow, Menu } = require('electron')
let path = require('path')

function createWindow () {
  let width = 375;
  let height = 760;
  app.userAgentFallback = app.userAgentFallback.replace('Electron/' + process.versions.electron, '');
  let win = new BrowserWindow({
              width:width,
              height:height,
              frame: false,
              webPreferences: {
                nodeIntegration: false,
                webviewTag: true
              }});
  win.setMinimumSize(width, height);
  win.setMaximumSize(width, height);
  win.on('closed', () => {
    win = null;
  });
  win.loadFile("html/index.html", {userAgent: 'Chrome'});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)
app.userAgentFallback = app.userAgentFallback.replace('Electron/' + process.versions.electron, '');
app.allowRendererProcessReuse = true;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.userAgentFallback = app.userAgentFallback.replace('Electron/' + process.versions.electron, '');
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
