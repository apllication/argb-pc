# Posto ARGB Control v0.3.1

Correção da ponte Electron/OpenRGB e do fluxo do protocolo SDK.

## Requisitos
- Windows
- Node.js LTS
- OpenRGB aberto com **SDK Server** ativo em `127.0.0.1:6742`

## Executar
1. Extraia a pasta.
2. Abra um terminal dentro dela.
3. Rode `npm install`.
4. Rode `npm start`.
5. Clique em **Detectar**.

**Importante:** não abra `index.html` diretamente. O `window.argbAPI` é fornecido pelo `preload.js` do Electron.

A v0.3.1 corrige também o protocolo: o comando 40 (versão) é enviado com corpo vazio e o comando 1 recebe no corpo o protocolo negociado.
