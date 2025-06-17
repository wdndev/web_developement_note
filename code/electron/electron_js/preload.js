console.log("preload")

const { contextBridge, ipcRenderer } = require("electron")
// 不能使用
const fs = require("fs")
console.log("fs ", fs)

contextBridge.exposeInMainWorld("myAPI", {
    testVar: 666,
    nodeVersion: process.version,
    saveFile: (data) => {
        ipcRenderer.send("save-file", data)
    },
    readFile() {
        // let x = await ipcRenderer.invoke("read-file")
        // console.log('@@@: ', x)
        return ipcRenderer.invoke("read-file")
    },
    getMsg: (callback) => {
        return ipcRenderer.on("message", callback)
    },
})