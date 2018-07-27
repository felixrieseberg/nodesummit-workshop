const { Menu } = require('electron')
const { openFile } = require('./files')

function createMenu() {
  let template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open File',
          accelerator: 'CmdOrCtrl+O',
          click: openFile
        }
      ]
    },
    { role: 'editMenu' },
    { role: 'windowMenu' }
  ]

  if (process.platform === 'darwin') {
    template.unshift({
      label: 'Code Editor',
      submenu: [{
        role: 'quit'
      }]
    })
  }

  const menu = Menu.buildFromTemplate(template)

  Menu.setApplicationMenu(menu)
}

module.exports = { createMenu }
