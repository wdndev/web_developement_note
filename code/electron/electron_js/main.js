/*
main.js 运行在应用的主进程上，无法访问Web相关API，
主要负责：控制生命周期、显示界面、控制渲染进程等其他操作。
*/
const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const fs = require('fs')
const remote = require('@electron/remote/main')

// remote初始
remote.initialize()

function writeFile(event, data) {
    fs.writeFileSync('D:/hello.txt', data)
    // 将标题设置为data
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(data)
}
function readFile(event, data) {
    const res = fs.readFileSync('D:/hello.txt', 'utf-8').toString()
    console.log('###: ', res)
    return res
}
// ⽤于创建窗⼝
function createWindow() {
    const win = new BrowserWindow({
        width: 800, // 窗⼝宽度
        height: 600, // 窗⼝⾼度
        autoHideMenuBar: true, // ⾃动隐藏菜单栏
        // alwaysOnTop: true, // 置顶
        // x: 0, // 窗⼝位置x坐标
        // y: 0, // 窗⼝位置y坐标
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    // 打开开发者工具
    win.webContents.openDevTools()
    // 通信api
    ipcMain.on('save-file', writeFile)
    ipcMain.handle('read-file', readFile)

    // 加载⼀个远程⻚⾯
    // win.loadURL('https://wdndev.github.io')
    win.loadFile("./pages/index.html")

    // 创建一个定时器
    setTimeout(() => {
        win.webContents.send('message', 'wdn, 你好啊！')
    }, 6000)

    // remote.enable(win.webContents)

    return win
}


// // 当app准备好后，执⾏createWindow创建窗⼝
// app.on('ready',()=>{
//     createWindow()
// })


// 当app准备好后，执⾏createWindow创建窗⼝
app.whenReady().then(() => {
    console.log('app is ready')
    const win = createWindow()
    // 激活 remote 模块
    remote.enable(win.webContents)
    // 当应⽤被激活时
    app.on('activate', () => {
        // 如果当前应⽤没有窗⼝，则创建⼀个新的窗⼝
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 当所有窗口关闭时
app.on('window-all-closed', () => {
    // 如果所处平台不是 mac(darwin)，则退出应用
    if (process.platform !== 'darwin') app.quit()
})
