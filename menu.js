const { Menu, app } = require('electron')

function createMenu() {
  let template = [{
    label: 'Hello'
  }]

  if (process.platform === 'darwin') {
    template.unshift({
      label: 'Code Editor',
      submenu: [{
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => app.quit()
      }]
    })
  }

  const menu = Menu.buildFromTemplate([{

  }])

  Menu.setApplicationMenu(menu)
}

module.exports = { createMenu }
