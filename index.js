const { app, BrowserWindow } = require('electron')
const { createMenu } = require('./menu')

let myWindow

app.on('ready', () => {
  myWindow = new BrowserWindow()
  myWindow.loadFile('index.html')

  myWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault()
    e.sender.send('open-file', url.slice(7))
  })

  createMenu()
})
