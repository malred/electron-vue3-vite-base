const { app, BrowserWindow } = require('electron') 
const path = require('path')
const WinState = require('electron-win-state').default
const winState = new WinState({
    defaultWidth: 800,
    defaultHeight: 600,
})
const createWindow = () => {
    const win = new BrowserWindow({
        // 使用这个,可以从上一次的窗口大小和位置打开 
        ...winState.winOptions,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, './preload/index.js'),
        }
    })
    win.on('ready-to-show', win.show)
    // 本地起vue3项目
    win.loadURL('http://localhost:3000')    
    // 打开调试器
    win.webContents.openDevTools()
    winState.manage(win)
}
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform === 'darwin') app.quit()
})