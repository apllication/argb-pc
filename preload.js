const { contextBridge, ipcRenderer } = require("electron");

try {
  contextBridge.exposeInMainWorld("argbAPI", {
    detect: () => ipcRenderer.invoke("detect"),
    apply: (cfg) => ipcRenderer.invoke("apply", cfg),
    ping: () => ipcRenderer.invoke("ping")
  });
} catch (err) {
  console.error("[Posto ARGB] Falha ao carregar preload:", err);
}
