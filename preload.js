const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('argbAPI',{
  detect:()=>ipcRenderer.invoke('detect'),
  apply:(cfg)=>ipcRenderer.invoke('apply',cfg)
});
