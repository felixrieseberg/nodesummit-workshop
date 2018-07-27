const { Menu, app } = require('electron')

function createMenu() {
  let template = [
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
