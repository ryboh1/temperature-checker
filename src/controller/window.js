exports.window = {
  
    createWindow: (theBrowserWindow) => {
      // Create the browser window.
      let win = new theBrowserWindow({
        width: 550,
        height: 400,
        webPreferences: {
          nodeIntegration: true
        },
        resizable:false
      })
    
      // and load the index.html of the app.
      win.loadFile('./views/templates/index.html')
    }
  }