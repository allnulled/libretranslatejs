(function (module_factory) {
    const module_data = module_factory();
    if(typeof global !== "undefined") {
        global.libretranslatejs = module_data;
    }
    if(typeof window !== "undefined") {
        window.libretranslatejs = module_data;
    }
    if(typeof module !== "undefined") {
        module.exports = module_data;
    }
})(function () {
    const options_default = {
        host: "127.0.0.1",
        port: 5000
    };
    const factory = function (options_user = {}) {
        const options = Object.assign({}, options_default, options_user);
        const translator = {};
        translator.translate = function (texto, idioma_origen = "es", idioma_objetivo = "en") {
            return new Promise(async function (resolve, reject) {
                try {
                    const respuesta_1 = await fetch(`http://${options.host}:${options.port}/translate`, {
                        method: "POST",
                        body: JSON.stringify({
                            q: texto,
                            source: idioma_origen,
                            target: idioma_objetivo,
                            format: "text",
                            api_key: ""
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    const respuesta_salida_1 = await respuesta_1.json();
                    return resolve(respuesta_salida_1.translatedText);
                } catch (error) {
                    return reject(error);
                }
            });
        }
        return translator;
    };
    factory.default = factory;
    return factory;
});