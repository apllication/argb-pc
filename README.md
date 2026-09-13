# Posto ARGB Control v0.3

Aplicativo Electron para controlar o ARGB da **MSI MAG B550 TOMAHAWK (MS-7C91)** através do servidor SDK do OpenRGB.

## O que mudou na v0.3

- Leitura correta do pacote `REQUEST_CONTROLLER_DATA`, incluindo version, serial, location, modos, zonas e LEDs.
- Negociação de compatibilidade até o protocolo SDK 5.
- Seleção do controlador real detectado pelo OpenRGB.
- Lista dinâmica dos **modos reais** do controlador, em vez de efeitos inventados pelo aplicativo.
- Leitura de zonas e contagem real de LEDs.
- `Cor fixa` usa `SetCustomMode()` + `UpdateLEDs()`.
- Efeitos reais usam `UpdateMode()` com os parâmetros do modo detectado.
- `Desligar` envia preto para todos os LEDs do controlador selecionado.
- Interface mostra protocolo, fabricante, LEDs e zonas.

A documentação atual do OpenRGB descreve o SDK como uma API de rede em TCP, normalmente na porta **6742**, e os comandos usados pela v0.3 incluem `REQUEST_PROTOCOL_VERSION`, `REQUEST_CONTROLLER_COUNT`, `REQUEST_CONTROLLER_DATA`, `UPDATELEDS`, `SETECUSTOMMODE` e `UPDATEMODE`. Consulte a documentação oficial se quiser desenvolver a ponte ainda mais.

## Como executar

1. Abra o OpenRGB.
2. Ative o **SDK Server** na porta `6742`.
3. Feche outros programas que estejam disputando o controle RGB, se necessário.
4. Nesta pasta execute:

```bash
npm install
npm start
```

5. No Posto ARGB clique em **Detectar**.
6. Selecione `MSI MAG B550 TOMAHAWK`.
7. Escolha um dos modos reais mostrados pelo OpenRGB e clique **Aplicar**.

## Hardware

Este projeto considera a saída ARGB 5V/3 pinos da MSI em `JRAINBOW1/JRAINBOW2`, com a controladora Cooler Master em sincronização pela placa-mãe.

**Nunca conecte ARGB 5V/3 pinos no JRGB 12V/4 pinos.**

## Limite atual

A v0.3 trabalha com o modelo de controladores indexados dos protocolos 0–5. Se o servidor anunciar protocolo 6 ou superior, o aplicativo negocia e usa o protocolo 5 compatível quando o servidor aceitar essa versão. Recursos exclusivos de protocolo 6, como modos independentes por zona, ainda ficam para uma versão posterior.
