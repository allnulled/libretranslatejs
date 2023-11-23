# libretranslate.js

Una API para interactuar con un servidor LibreTranslate como máquina local y obtener traducciones desde un traductor gratuito sin límite.

API (para node.js y navegadores) para interactuar con un servidor [LibreTranslate](https://libretranslate.com/) como máquina local y obtener traducciones desde un traductor gratuito.

## Requisitos

- `libretranslate` funcionando por el `--port 5000`. Puedes descargártelo desde algunos lugares, pero hacerlo funcionar finalmente no ha resultado tan sencillo en Ubuntu. He podido gracias al instalador último.
  - La web oficial. [https://libretranslate.com/](https://libretranslate.com/)
  - La web de Github. [https://github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)
  - La web de un instalador para Linux. [https://github.com/argosopentech/LibreTranslate-init](https://github.com/argosopentech/LibreTranslate-init)
- `node`
- `npm`
  - La web oficial, donde ambos están descargables. [https://nodejs.org/en/download](https://nodejs.org/en/download)

## Instalación

```sh
npm i -s libretranslatejs
```

## Uso

Tanto desde servidor como desde node.js, la API funciona igual.

```js
const libretranslatejs = require("libretranslatejs");
const translator = libretranslatejs(); // by default points to: { host: "127.0.0.1" , port: 5000 }
const translation = await translator("Esto es un texto de ejemplo"); // by default sets: "es", "en"
const translation2 = await translator("This is just an example", "en", "es");
```

Si `libretranslatejs` llega a ejecutarse, se introduce la variable `libretranslatejs` tanto en `global` como en `window` como en `module.exports`.

El fichero está en `src/libretranslate.js`. Él habilitará la API para cualquier entorno. Son menos de 50 líneas de código, pero ya te ofrece la función para traducir directamente.
