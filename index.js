const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
		show: false,
        width: 800,
        height: 600,
		icon: '/icon.png'
    })

	win.loadURL('https://andrewcloud.vercel.app');
	win.setMenu(null);

	win.once('ready-to-show', () => {
		win.show()
	});
}

app.whenReady().then(() => {
    createWindow()
});
