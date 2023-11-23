const libretranslatejs = require(__dirname + "/../src/libretranslate.js");
const translator = libretranslatejs({
    host: "127.0.0.1", // Default
    port: 5000 // Default too
});
const main = async function() {
    try {
        const traduccion = await translator.translate("Hola, esto es una prueba de traducción", "es", "en")
        console.log(traduccion);
        if(traduccion !== "Hi, this is a translation test") {
            throw new Error("Se esperaba una traducción concreta en test.js");
        }
    } catch (error) {
        console.log(error);
    }
};

main();