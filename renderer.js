const { ipcRenderer } = require('electron')
const loader = require('monaco-loader')
const $ = document.querySelector.bind(document)

ipcRenderer.on('open-file', (...args) => {
  console.log(args)
})

let editor

loader().then((monaco) => {
  const div = $('#container')

  editor = monaco.editor.create(div, {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })
})
