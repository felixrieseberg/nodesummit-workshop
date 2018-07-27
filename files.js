const { dialog, BrowserWindow } = require('electron')

function openFile() {
  dialog.showOpenDialog({
    defaultPath: __dirname
  }, (filePaths) => {
    const myWindow = BrowserWindow.getFocusedWindow()

    myWindow.webContents.send('open-file', filePaths[0])
  })
}

module.exports = {
  openFile
}
