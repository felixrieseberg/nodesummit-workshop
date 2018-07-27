const fs = require('fs')
const { ipcRenderer } = require('electron')
const loader = require('monaco-loader')
const $ = document.querySelector.bind(document)

let editor

ipcRenderer.on('open-file', (e, filePath) => openFile(filePath))

function openFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  editor.setValue(content)
}

loader().then((monaco) => {
  const div = $('#container')

  // https://microsoft.github.io/monaco-editor/api/interfaces/
  // monaco.editor.istandalonecodeeditor.html
  editor = monaco.editor.create(div, {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })
})
